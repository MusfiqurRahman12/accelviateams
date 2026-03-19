/**
 * Post-build script: copies public/ and .next/static/ into the standalone directory.
 * Required for Next.js standalone output mode to serve static assets correctly.
 * Run via: npm run cpanel-build
 */
const fs = require("fs");
const path = require("path");

function copyDirSync(src, dest) {
    if (!fs.existsSync(src)) {
        console.log(`  Skipped (not found): ${src}`);
        return;
    }
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDirSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

console.log("Copying static assets into standalone directory...");

// 1. Copy public/ -> .next/standalone/public/
const publicSrc = path.join(__dirname, "public");
const publicDest = path.join(__dirname, ".next", "standalone", "public");
console.log(`  public/ -> .next/standalone/public/`);
copyDirSync(publicSrc, publicDest);

// 2. Copy .next/static/ -> .next/standalone/.next/static/
const staticSrc = path.join(__dirname, ".next", "static");
const staticDest = path.join(__dirname, ".next", "standalone", ".next", "static");
console.log(`  .next/static/ -> .next/standalone/.next/static/`);
copyDirSync(staticSrc, staticDest);

console.log("Done! Project is ready for cPanel upload.");
