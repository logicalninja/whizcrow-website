#!/usr/bin/env node
/**
 * extract-blog-images.js
 * Extracts base64-encoded images from blog JSON files,
 * saves them as real image files in /public/blog-images/[slug]/,
 * and replaces the data URIs with relative paths.
 *
 * Run from the whizcrow-app directory:
 *   node scripts/extract-blog-images.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BLOGS_DIR = path.join(__dirname, '../src/data/blogs');
const OUTPUT_DIR = path.join(__dirname, '../public/blog-images');

const EXT_MAP = {
    jpeg: 'jpg',
    jpg: 'jpg',
    png: 'png',
    gif: 'gif',
    webp: 'webp',
    svg: 'svg',
};

function extractImages(slug, content) {
    const imgDir = path.join(OUTPUT_DIR, slug);
    if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

    let count = 0;
    const replaced = content.replace(
        /data:image\/([a-zA-Z]+);base64,([A-Za-z0-9+/=]+)/g,
        (match, type, b64) => {
            const ext = EXT_MAP[type.toLowerCase()] || 'jpg';
            // Use first 16 chars of md5 as filename — deterministic so re-runs are idempotent
            const hash = crypto.createHash('md5').update(b64.slice(0, 512)).digest('hex').slice(0, 16);
            const filename = `${hash}.${ext}`;
            const filepath = path.join(imgDir, filename);

            if (!fs.existsSync(filepath)) {
                fs.writeFileSync(filepath, Buffer.from(b64, 'base64'));
            }

            count++;
            return `/blog-images/${slug}/${filename}`;
        }
    );

    return { content: replaced, count };
}

async function run() {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const files = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.json'));
    console.log(`Found ${files.length} blog JSON files\n`);

    let totalImages = 0;
    let totalSavedBytes = 0;

    for (const file of files) {
        const filePath = path.join(BLOGS_DIR, file);
        const beforeSize = fs.statSync(filePath).size;
        const raw = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(raw);

        if (!data.content || !data.content.includes('data:image/')) {
            console.log(`  ✓ ${file} — no embedded images, skipping`);
            continue;
        }

        const slug = data.slug || file.replace('.json', '');
        const { content: newContent, count } = extractImages(slug, data.content);
        data.content = newContent;

        const newRaw = JSON.stringify(data);
        fs.writeFileSync(filePath, newRaw, 'utf8');

        const afterSize = fs.statSync(filePath).size;
        const saved = beforeSize - afterSize;
        totalImages += count;
        totalSavedBytes += saved;

        console.log(`  ✓ ${slug}`);
        console.log(`    ${count} images extracted | ${(beforeSize / 1024 / 1024).toFixed(1)}MB → ${(afterSize / 1024 / 1024).toFixed(1)}MB (saved ${(saved / 1024 / 1024).toFixed(1)}MB)`);
    }

    console.log(`\n${'─'.repeat(60)}`);
    console.log(`Total images extracted : ${totalImages}`);
    console.log(`Total size saved       : ${(totalSavedBytes / 1024 / 1024).toFixed(1)}MB`);
    console.log(`\nImages saved to: public/blog-images/`);
    console.log(`Done. ✅`);
}

run().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
