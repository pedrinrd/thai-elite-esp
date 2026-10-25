/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { BonusSection } from './components/BonusSection.tsx';
import { OfferSection } from './components/OfferSection.tsx';
import { GuaranteeFaqSection } from './components/GuaranteeFaqSection.tsx';
import { UpgradeModal } from './components/UpgradeModal.tsx';
import {
  CheckoutNoticeModal,
  CheckoutState,
} from './components/CheckoutNoticeModal.tsx';
import { Footer } from './components/Footer.tsx';
import { OFFER_CONFIG } from './config/offer.ts';
import {
  initMetaPixel,
  trackMetaEvent,
  buildTrackedCheckoutUrl,
} from './utils/metaPixel.ts';

export default function App() {
  // Upgrade Modal state (triggered only on Basic plan button click)
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  // Active checkout notification state
  const [activeCheckout, setActiveCheckout] = useState<CheckoutState | null>(
    null
  );

  // Initialize Meta / LowTrack Pixel on page mount
  useEffect(() => {
    initMetaPixel();
  }, []);

  // Smooth scroll to offer section
  const handleScrollToOffer = () => {
    trackMetaEvent('ViewContent', {
      content_name: 'Thai Elite — Sección de Oferta',
      content_category: 'Entrenamiento Digital',
    });
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // User clicked Basic Plan -> Triggers the Upgrade Modal
  const handleSelectBasic = () => {
    trackMetaEvent('ViewContent', {
      content_name: 'Pop-up de Upgrade Thai Elite',
      value: OFFER_CONFIG.prices.upgrade,
      currency: OFFER_CONFIG.currency,
    });
    setIsUpgradeModalOpen(true);
  };

  // User clicked Complete Plan -> Direct to Complete Checkout
  const handleSelectPro = () => {
    const targetUrl = buildTrackedCheckoutUrl(OFFER_CONFIG.checkouts.pro);
    trackMetaEvent('InitiateCheckout', {
      content_name: 'Thai Elite Completo',
      value: OFFER_CONFIG.prices.pro,
      currency: OFFER_CONFIG.currency,
    });
    setActiveCheckout({
      planId: 'pro',
      planName: 'Thai Elite Completo',
      price: OFFER_CONFIG.prices.pro,
      url: targetUrl,
    });
    try {
      window.open(targetUrl, '_blank');
    } catch {
      // fallback to modal
    }
  };

  // In modal: User accepted upgrade
  const handleConfirmUpgrade = () => {
    const targetUrl = buildTrackedCheckoutUrl(
      OFFER_CONFIG.checkouts.proUpgrade
    );
    trackMetaEvent('InitiateCheckout', {
      content_name: 'Thai Elite Completo (Oferta Especial de Upgrade)',
      value: OFFER_CONFIG.prices.upgrade,
      currency: OFFER_CONFIG.currency,
    });
    setIsUpgradeModalOpen(false);
    setActiveCheckout({
      planId: 'pro-upgrade',
      planName: 'Thai Elite Completo (Oferta Especial de Upgrade)',
      price: OFFER_CONFIG.prices.upgrade,
      url: targetUrl,
    });
    try {
      window.open(targetUrl, '_blank');
    } catch {
      // fallback to modal
    }
  };

  // In modal: User declined upgrade
  const handleDeclineToBasic = () => {
    const targetUrl = buildTrackedCheckoutUrl(OFFER_CONFIG.checkouts.basic);
    trackMetaEvent('InitiateCheckout', {
      content_name: 'Thai Elite Esencial',
      value: OFFER_CONFIG.prices.basic,
      currency: OFFER_CONFIG.currency,
    });
    setIsUpgradeModalOpen(false);
    setActiveCheckout({
      planId: 'basic',
      planName: 'Thai Elite Esencial',
      price: OFFER_CONFIG.prices.basic,
      url: targetUrl,
    });
    try {
      window.open(targetUrl, '_blank');
    } catch {
      // fallback to modal
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col selection:bg-[#E50914] selection:text-white">
      <main className="flex-1">
        {/* SEÇÃO 1: HERO + VSL */}
        <HeroSection onCtaClick={handleScrollToOffer} />

        {/* SEÇÃO 2: BENEFÍCIOS + CARROSSEL ANIMADO EXCLUSIVO DE VÍDEOS DE TREINOS (9:16 REELS) */}
        <BenefitsSection onCtaClick={handleScrollToOffer} />

        {/* SEÇÃO 4: 5 BÔNUS EXCLUSIVOS */}
        <BonusSection onCtaClick={handleScrollToOffer} />

        {/* SEÇÃO 5: OFERTA */}
        <OfferSection
          onSelectBasic={handleSelectBasic}
          onSelectPro={handleSelectPro}
        />

        {/* SEÇÃO 6: GARANTIA (7 DIAS) + FAQ + FINAL CTA */}
        <GuaranteeFaqSection onCtaClick={handleScrollToOffer} />
      </main>

      {/* POP-UP DE UPGRADE (Gatilho: Exclusivamente no clique do Pacote Básico) */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onConfirmUpgrade={handleConfirmUpgrade}
        onDeclineToBasic={handleDeclineToBasic}
      />

      {/* Checkout notice & link modal */}
      <CheckoutNoticeModal
        checkoutState={activeCheckout}
        onClose={() => setActiveCheckout(null)}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
