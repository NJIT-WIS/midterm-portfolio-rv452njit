import { test, expect } from '@playwright/test';
import Error from 'next/error';

test.describe('RV452 Profile', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:3000/', { waitUntil: 'domcontentloaded' });
    });

    test('Successfully Opened Website', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/');
        if (response !== null) {
            expect(response.status()).toBe(200);
        } else {
            throw new Error('No response received');
        }
    });

    test("Landing Homepage Section, Chat Section, Chat Object", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        await expect(page.locator('.homepage-setting')).toBeVisible();
        await expect(page.locator('.chatSection')).toBeVisible();
        const foundChatSection = await expect(page.locator('#chatSection')).toBeVisible();

        if (foundChatSection != null) {
            const textContent = await foundChatSection.textContent();
            await expect(textContent).toBe("CHAT");
        }
    });

    test("Header Section with logo", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const foundHeaderSection = await expect(page.locator('#logoSection')).toBeVisible();

        if (foundHeaderSection != null) {
            const textContent = await foundHeaderSection.textContent();
            await expect(textContent).page.locator(".logo").toBe(200);
        }
    });

    test("Header Section", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const foundHeaderSection = await expect(page.locator('#headersection')).toBeVisible();

        if (foundHeaderSection != null) {
            const textContent = await foundHeaderSection.textContent();
            await expect(textContent).toBe("Ravisankar VENKATARAMAN");
        }
    });

    test("Header With Navigation Section", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const foundHeaderSection = await expect(page.locator('#navigationsection')).toBeVisible();

        if (foundHeaderSection != null) {
            const textContent = await foundHeaderSection.textContent();
            await expect(textContent).toBe("Background");
        }
    });

    test("Header, Navigation Section with Links", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const foundHeaderSection = await expect(page.locator('#navigationsection')).toBeVisible();

        if (foundHeaderSection != null) {
            const textContent = await foundHeaderSection.textContent();
            await expect(textContent).toBe("Background");
            await expect(textContent).toBe("Blogs");
            await expect(textContent).toBe("Contact");
        }
    });

    test("Hero Section With Archtype", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const heroSection = await expect(page.locator('.HeroSectionArchtype')).toBeVisible();

        if (heroSection != null) {
            const textContent = await foundChatSection.textContent();
            await expect(textContent).toBe("Reach for the Stars or Get to Coding -  The Explorer");
        }
    });

    test("Title Section", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const heroSection = await expect(page.locator('#titlesection')).toBeVisible();

        if (heroSection != null) {
            const textContent = await foundChatSection.textContent();
            await expect(textContent).toBe("Full Stack Developer");
        }
    });

    test("Challenge Section", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const heroSection = await expect(page.locator('#challengesection')).toBeVisible();
    });

    test("Footer Section", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const footerSection = await expect(page.locator('.footer-section')).toBeVisible();
    });

    test("Footer Section with social links", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const footerSection = await expect(page.locator('#socialsection')).toBeVisible();
        if (footerSection != null) {
            const textContent = await footerSection.textContent();
            await expect(textContent).toBe(".GITLink");
        }
    });

    test("Footer Section with Linked in", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const footerSection = await expect(page.locator('.footer-setting')).toBeVisible();
        if (footerSection != null) {
            const textContent = await footerSection.textContent();
            await expect(textContent).toBe(".InLink");
        }
    });

    test("Footer Section with Twitter Lnik", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const footerSection = await expect(page.locator('.footer-setting')).toBeVisible();
        if (footerSection != null) {
            const textContent = await footerSection.textContent();
            await expect(textContent).toBe(".TwitterLink");
        }
    });

    test("Footer Section with Download Lnik", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const footerSection = await expect(page.locator('.footer-setting')).toBeVisible();
        if (footerSection != null) {
            const textContent = await footerSection.textContent();
            await expect(textContent).toBe(".DownloadLink");
        }
    });    

    test("Profile Management Card", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const heroSection = await expect(page.locator('#ProfileManagement')).toBeVisible();

        if (heroSection != null) {
            const textContent = await foundChatSection.textContent();
            await expect(textContent).toBe("Profile Management");
        }
    });

    test("Trade Management Card", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const heroSection = await expect(page.locator('#TradeManagement')).toBeVisible();

        if (heroSection != null) {
            const textContent = await foundChatSection.textContent();
            await expect(textContent).toBe("Trade Management");
        }
    });

    test("Trend Analysis Card", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const heroSection = await expect(page.locator('#TrendAnalysis')).toBeVisible();

        if (heroSection != null) {
            const textContent = await foundChatSection.textContent();
            await expect(textContent).toBe("Trend Analysis");
        }
    });

    test("Time Keeper Card", async ({ page }) => {
        await page.goto("http://127.0.0.1:3000");
        const heroSection = await expect(page.locator('#Timekeeper')).toBeVisible();

        if (heroSection != null) {
            const textContent = await foundChatSection.textContent();
            await expect(textContent).toBe("Timekeeper");
        }
    });

    test('Profile Management Project Route', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/CurrentProjects');
        if (response !== null) {
            expect(response.status()).toBe(200);
        } else {
            throw new Error('No response received');
        }
    });

    test("Trend Management Project Route with element", async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/Projects1');
        await page.waitForLoadState('networkidle');
        const text = await page.$('#Project2');
        const textContent = await text.textContent();
        await expect(textContent).toBe("Trade Management");
    });

    test('Trend Analysis Route', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/Projects2');
        if (response !== null) {
            expect(response.status()).toBe(200);
        } else {
            throw new Error('No response received');
        }
    });

    test('Timekeeper Route', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/Projects3');
        if (response !== null) {
            expect(response.status()).toBe(200);
        } else {
            throw new Error('No response received');
        }
    });

    test('About Route', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/About');
        if (response !== null) {
            expect(response.status()).toBe(200);
        } else {
            throw new Error('No response received');
        }
    });

    test('Blogs Route', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/Blogs');
        if (response !== null) {
            expect(response.status()).toBe(200);
        } else {
            throw new Error('No response received');
        }
    });

    // test contact page  status
    test('Contact Route', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/Contact');
        if (response !== null) {
            expect(response.status()).toBe(200);
        } else {
            throw new Error('No response received');
        }
    });
});