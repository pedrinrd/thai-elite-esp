import test from 'node:test';
import assert from 'node:assert/strict';
import {
  OFFER_CONFIG,
  calculateUpgradeSavings,
  calculateUpgradeDelta,
  formatMXN,
} from './offer.ts';

test('Offer pricing matches exact Mexico strategy ($100, $219, $149 MXN)', () => {
  assert.equal(OFFER_CONFIG.currency, 'MXN');
  assert.equal(OFFER_CONFIG.prices.basic, 100);
  assert.equal(OFFER_CONFIG.prices.pro, 219);
  assert.equal(OFFER_CONFIG.prices.upgrade, 149);
  assert.equal(
    OFFER_CONFIG.vslVideoSrc,
    '/assets/aistudio/vsl_esp_nv_5e7c703f.mp4'
  );
});

test('Upgrade savings calculation is exactly $70 MXN', () => {
  const savings = calculateUpgradeSavings(
    OFFER_CONFIG.prices.pro,
    OFFER_CONFIG.prices.upgrade
  );
  assert.equal(savings, 70);
});

test('Upgrade delta over Esencial is exactly $49 MXN', () => {
  const delta = calculateUpgradeDelta(
    OFFER_CONFIG.prices.upgrade,
    OFFER_CONFIG.prices.basic
  );
  assert.equal(delta, 49);
});

test('Product name is Thai Elite', () => {
  assert.equal(OFFER_CONFIG.productName, 'Thai Elite');
});

test('Checkout URLs are configured to Xpag Global links', () => {
  const { basic, pro, proUpgrade } = OFFER_CONFIG.checkouts;
  assert.equal(basic, 'https://xpag.global/pay/3toN68D3');
  assert.equal(pro, 'https://xpag.global/pay/mJLWrn52');
  assert.equal(proUpgrade, 'https://xpag.global/pay/hfsz9Toi');
});

test('5 Exclusive Bonuses are localized in es-MX', () => {
  assert.equal(OFFER_CONFIG.bonuses.length, 5);
  assert.equal(OFFER_CONFIG.bonuses[0].badge, 'BONO 01');
  assert.equal(OFFER_CONFIG.bonuses[3].featuredBorder, true);
});

test('Drill clips and Testimonials carousels have complete items', () => {
  assert.ok(OFFER_CONFIG.drillClips.length >= 6);
  assert.ok(OFFER_CONFIG.testimonials.length >= 6);
});

test('Mexican Peso ($XX MXN) format helper formats values properly', () => {
  assert.equal(formatMXN(100), '$100 MXN');
  assert.equal(formatMXN(149), '$149 MXN');
  assert.equal(formatMXN(219), '$219 MXN');
  assert.equal(formatMXN(49), '$49 MXN');
  assert.equal(formatMXN(70), '$70 MXN');
});

test('FAQ covers all 6 localized es-MX beginner questions with proper ¿ and ? marks', () => {
  assert.equal(OFFER_CONFIG.faq.length, 6);
  assert.equal(
    OFFER_CONFIG.faq[0].question,
    '¿PUEDO EMPEZAR SI NUNCA HE PRACTICADO MUAY THAI?'
  );
  assert.equal(OFFER_CONFIG.faq[1].question, '¿PUEDO APRENDER DESDE CASA?');
  assert.equal(
    OFFER_CONFIG.faq[2].question,
    '¿NECESITO EQUIPO PARA COMENZAR?'
  );
  assert.equal(OFFER_CONFIG.faq[3].question, '¿CÓMO RECIBO MI ACCESO?');
  assert.equal(OFFER_CONFIG.faq[4].question, '¿EL PAGO ES ÚNICO?');
  assert.equal(
    OFFER_CONFIG.faq[5].question,
    '¿CUÁL ES LA DIFERENCIA ENTRE LOS PLANES?'
  );
});

test('LowTrack and UTMify Pixel IDs and UTM forwarding are preserved', async () => {
  const {
    UTMIFY_PIXEL_ID,
    UTMIFY_SCRIPT_SRC,
    LOWTRACK_PIXEL_ID,
    LOWTRACK_SCRIPT_SRC,
    buildTrackedCheckoutUrl,
  } = await import('../utils/metaPixel.ts');
  assert.equal(LOWTRACK_PIXEL_ID, 'lt_px_97899de67751');
  assert.equal(LOWTRACK_SCRIPT_SRC, 'https://lowtrack.com.br/pixel.js');
  assert.equal(UTMIFY_PIXEL_ID, '6abf39dabeae388a564376b3');
  assert.equal(UTMIFY_SCRIPT_SRC, 'https://cdn.utmify.com.br/scripts/pixel/pixel.js');
  assert.equal(
    buildTrackedCheckoutUrl(OFFER_CONFIG.checkouts.pro),
    'https://xpag.global/pay/mJLWrn52'
  );
});
