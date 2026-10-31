import { test,  chromium  } from '@playwright/test';

test('has title', async ({ }) => {
const browser = await chromium.launch({ args: ['--enable-features=WebMCP'] });
const page = await browser.newPage();
await page.goto('https://www.fb.com');

for (const tool of await page.webmcp.tools())
  console.log(tool.name, tool.description);

const result = await page.webmcp.callTool('add', { a: 2, b: 40 });
console.log(result.content[0].text); // "42"

});


test('Discover WebMCP tools', async () => {
    const browser = await chromium.launch({
        args: ['--enable-features=WebMCP']
    });

    try {
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com');

        const tools = await page.webmcp.tools();

        console.log('Available tools:', tools.length);

        for (const tool of tools) {
            console.log(tool.name, tool.description);
        }
    } finally {
        await browser.close();
    }
});