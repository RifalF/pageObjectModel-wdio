const assert = require('assert');

describe('kasirAja Test',  () => {
  it('should open kasirAja.com and assert the URL', async () => {
    // Buka URL
    await browser.url('https://kasirdemo.belajarqa.com/login');

    // Lakukan assertion pada URL
    const currentURL = await browser.getUrl();
    const expectedURL = 'https://kasirdemo.belajarqa.com/login';

    await assert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
  });
});