import fs from 'fs'
import path from 'path'

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source directory does not exist: ${src}, skipping.`)
    return
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)
    const stat = fs.statSync(srcPath)
    if (stat.isDirectory()) {
      copyDirRecursive(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

console.log('Syncing static assets to dist/...')
copyDirRecursive('assets', 'dist/assets')
copyDirRecursive('videos', 'dist/videos')
copyDirRecursive('public', 'dist')
console.log('✓ Successfully synced /assets, /videos, and /public into dist/')
