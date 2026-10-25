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
    '/assets/aistudio/Video_Project_6_afb3c956.mp4'
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

test('FAQ covers all localized es-MX questions with proper ¿ and ? marks', () => {
  assert.equal(OFFER_CONFIG.faq.length, 5);
  assert.equal(OFFER_CONFIG.faq[0].question, '¿Cómo recibo mi acceso?');
  assert.equal(OFFER_CONFIG.faq[1].question, '¿Puedo acceder desde mi celular?');
  assert.equal(OFFER_CONFIG.faq[2].question, '¿Es un pago único?');
  assert.equal(OFFER_CONFIG.faq[3].question, '¿Tengo garantía?');
  assert.equal(
    OFFER_CONFIG.faq[4].question,
    '¿Cuál es la diferencia entre Thai Elite Esencial y Completo?'
  );
});

test('UTMify Pixel ID and UTM forwarding are preserved', async () => {
  const { UTMIFY_PIXEL_ID, UTMIFY_SCRIPT_SRC, buildTrackedCheckoutUrl } =
    await import('../utils/metaPixel.ts');
  assert.equal(UTMIFY_PIXEL_ID, '6abf39dabeae388a564376b3');
  assert.equal(UTMIFY_SCRIPT_SRC, 'https://cdn.utmify.com.br/scripts/pixel/pixel.js');
  assert.equal(
    buildTrackedCheckoutUrl(OFFER_CONFIG.checkouts.pro),
    'https://xpag.global/pay/mJLWrn52'
  );
});
