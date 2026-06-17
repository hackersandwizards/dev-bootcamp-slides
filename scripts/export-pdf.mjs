#!/usr/bin/env node
/*
 * Export TS deck PDFs into pdfs/<slug>.pdf.
 *   bun run export:pdf            -> every TS module deck
 *   bun run export:pdf keynote    -> selected module(s)
 *
 * TS decks render every slide on the #/print route. This builds the deck, serves
 * the bundle over loopback (Chromium blocks module scripts on file:// URLs), and
 * drives the print route with Playwright into a paged PDF.
 *
 * One-time setup: bun add -d playwright-chromium && bun pm trust playwright-chromium
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const modulesDir = path.join(root, 'modules')
const pdfDir = path.join(root, 'pdfs')

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
}

const serveStatic = (dir) =>
  new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
      if (p.endsWith('/')) p += 'index.html'
      fs.readFile(path.join(dir, p), (err, data) => {
        if (err) {
          res.writeHead(404)
          res.end()
        } else {
          res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] ?? 'application/octet-stream' })
          res.end(data)
        }
      })
    })
    server.listen(0, '127.0.0.1', () => resolve(server))
  })

async function exportTs(dir, out) {
  execFileSync('bunx', ['vite', 'build', '--base', './', '--outDir', 'dist'], { cwd: dir, stdio: 'inherit' })
  const server = await serveStatic(path.join(dir, 'dist'))
  const port = server.address().port
  let chromium
  try {
    ;({ chromium } = await import('playwright-chromium'))
  } catch {
    server.close()
    throw new Error(
      'playwright-chromium is not installed. Run: bun add -d playwright-chromium && bun pm trust playwright-chromium',
    )
  }
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage()
    await page.goto(`http://127.0.0.1:${port}/#/print`, { waitUntil: 'networkidle' })
    await page.waitForSelector('.frame')
    await page.evaluate(() => document.fonts && document.fonts.ready)
    const frames = await page.locator('.frame').count()
    await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true })
    return frames
  } finally {
    await browser.close()
    server.close()
  }
}

const isTsDeck = (slug) => fs.existsSync(path.join(modulesDir, slug, 'vite.config.ts'))

const wanted = process.argv.slice(2)
const slugs = (wanted.length ? wanted : fs.readdirSync(modulesDir)).filter(isTsDeck)

if (slugs.length === 0) {
  const hint = wanted.length ? `${wanted.join(', ')} is not a TS deck` : 'no TS decks found'
  console.error(`Nothing to export: ${hint}. Usage: bun run export:pdf [slug ...]`)
  process.exit(1)
}

fs.mkdirSync(pdfDir, { recursive: true })
const results = []
for (const slug of slugs) {
  const out = path.join(pdfDir, `${slug}.pdf`)
  console.log(`\n=== exporting ${slug} ===`)
  const frames = await exportTs(path.join(modulesDir, slug), out)
  const kb = Math.round(fs.statSync(out).size / 1024)
  results.push({ slug, kb, frames })
  console.log(`-> pdfs/${slug}.pdf (${kb} KB, ${frames} pages)`)
}

console.log('\nDone:')
for (const r of results) console.log(`  ${r.slug}: ${r.kb} KB, ${r.frames} pages`)
