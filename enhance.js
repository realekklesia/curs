require('dotenv').config();
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getCodebaseContents(basePath, ignoreDirs = ['node_modules', '.git']) {
    const files = [];

    async function walk(dir) {
        try {
            const items = await fs.promises.readdir(dir, { withFileTypes: true });
            for (const item of items) {
                const fullPath = path.join(dir, item.name);

                if (item.isDirectory()) {
                    if (!ignoreDirs.includes(item.name)) {
                        await walk(fullPath);
                    }
                    continue;
                }

                if (item.name.endsWith('.js')) {
                    try {
                        const content = await fs.promises.readFile(fullPath, 'utf8');
                        files.push({ path: fullPath, content });
                        console.log(`📄 Found: ${fullPath}`);
                    } catch (err) {
                        console.error(`❌ Error reading ${fullPath}:`, err.message);
                    }
                }
            }
        } catch (err) {
            console.error(`❌ Error walking directory ${dir}:`, err.message);
        }
    }

    await walk(basePath);
    return files;
}

function formatForGPT(files) {
    return files.map(f => `