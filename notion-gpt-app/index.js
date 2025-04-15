require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');
const { Client } = require('@notionhq/client');

console.log('Starting server...');
console.log('Environment variables loaded:', {
    port: process.env.PORT,
    hasOpenAIKey: !!process.env.OPENAI_API_KEY,
    hasNotionKey: !!process.env.NOTION_API_KEY,
    hasNotionPageId: !!process.env.NOTION_PAGE_ID,
});

const app = express();
app.use(express.json());

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Notion client
const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// Helper: Convert markdown to Notion blocks (simple line-by-line paragraphs)
function markdownToNotionBlocks(markdown) {
    return markdown.split('\n').map(line => ({
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: line },
                },
            ],
        },
    }));
}

// POST /generate-and-push: Generate content and push to Notion
app.post('/generate-and-push', async (req, res) => {
    try {
        const { topic } = req.body;
        if (!topic) {
            return res.status(400).json({ error: 'Topic is required' });
        }

        console.log(`Generating content for topic: ${topic}`);

        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant that creates well-structured content in Markdown format.',
                },
                {
                    role: 'user',
                    content: topic,
                },
            ],
            temperature: 0.7,
        });

        const generatedContent = completion.choices[0].message.content;
        console.log('Content generated successfully');

        const notionBlocks = markdownToNotionBlocks(generatedContent);

        await notion.blocks.children.append({
            block_id: process.env.NOTION_PAGE_ID,
            children: notionBlocks,
        });

        console.log('Content pushed to Notion successfully');
        res.json({
            success: true,
            message: 'Content generated and pushed to Notion successfully',
            content: generatedContent,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'An error occurred while processing your request',
            details: error.message,
        });
    }
});

const PORT = process.env.PORT || 4567;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Server is listening on http://localhost:${PORT}`);
});