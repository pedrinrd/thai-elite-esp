/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap, Gift } from 'lucide-react';
import { OFFER_CONFIG, formatMXN, formatPriceNumber } from '../config/offer.ts';

interface OfferSectionProps {
  onSelectBasic: () => void;
  onSelectPro: () => void;
}

export function OfferSection({
  onSelectBasic,
  onSelectPro,
}: OfferSectionProps) {
  return (
    <section
      id="oferta"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#1a1a1a] overflow-hidden"
    >
      {/* Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E50914] mb-2 block">
          ELIGE TU PLAN
        </span>
        <h2
          className="font-headline font-black text-3xl sm:text-5xl text-white tracking-tight mb-3"
          style={{ textWrap: 'balance' }}
        >
          ELIGE CÓMO QUIERES COMENZAR TU ENTRENAMIENTO.
        </h2>
        <p className="text-base sm:text-lg text-[#A1A1AA]">
          Un solo pago. Acceso digital a tus materiales de Muay Thai.
        </p>
      </motion.div>

      {/* Grid of Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {/* CARD 1: THAI ELITE ESENCIAL */}
        <motion.div
          initial={{ opacity: 0, x: -35, y: 25 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="bg-[#181818] border border-[#262626] rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative shadow-lg"
        >
          <div>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wider text-[#A1A1AA] font-semibold">
                PLAN ESENCIAL
              </span>
              <h3 className="font-headline font-bold text-3xl text-white tracking-wide mt-1">
                THAI ELITE ESENCIAL
              </h3>
            </div>

            {/* Price Box */}
            <div className="py-4 border-y border-[#262626] my-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline font-black text-5xl sm:text-6xl text-white tracking-tight tabular-nums">
                  ${formatPriceNumber(OFFER_CONFIG.prices.basic)}
                </span>
                <span className="text-sm font-bold text-[#A1A1AA] uppercase">
                  {OFFER_CONFIG.currency}
                </span>
              </div>
              <span className="text-xs text-[#A1A1AA] font-medium block mt-1">
                Pago único • Sin mensualidades
              </span>
            </div>

            {/* Benefits List */}
            <ul className="space-y-3.5 mb-8">
              {[
                'Biblioteca principal de entrenamientos',
                'Entrenamientos en video',
                'Combinaciones y ejercicios organizados',
                'Consulta desde celular o computadora',
                'Acceso digital inmediato',
                'Garantía de 7 días',
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#CCCCCC]"
                >
                  <Check className="w-4 h-4 text-[#A1A1AA] mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button
              type="button"
              onClick={onSelectBasic}
              className="w-full py-4 min-h-[48px] bg-[#222222] hover:bg-[#2c2c2c] active:scale-[0.99] border border-[#333333] hover:border-[#444444] text-white text-sm sm:text-base font-semibold tracking-wider uppercase rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              QUIERO EL PLAN ESENCIAL — {formatMXN(OFFER_CONFIG.prices.basic, true)}
            </button>
            <p className="text-[11px] text-center text-[#71717A] mt-2">
              Recibe acceso digital después de confirmar tu pago.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: THAI ELITE COMPLETO */}
        <motion.div
          initial={{ opacity: 0, x: 35, y: 25 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="bg-[#111111] border-2 border-[#E50914] rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative shadow-2xl shadow-[#E50914]/20"
        >
          {/* Gold Seal Banner */}
          <div className="absolute -top-3.5 right-6 bg-[#D4AF37] text-black text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded shadow-md flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>MÁS COMPLETO</span>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wider text-[#E50914] font-semibold">
                EXPERIENCIA COMPLETA
              </span>
              <h3 className="font-headline font-bold text-3xl text-white tracking-wide mt-1">
                THAI ELITE COMPLETO
              </h3>
            </div>

            {/* Price Box */}
            <div className="py-4 border-y border-[#262626] my-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline font-black text-5xl sm:text-6xl text-[#E50914] tracking-tight tabular-nums">
                  ${formatPriceNumber(OFFER_CONFIG.prices.pro)}
                </span>
                <span className="text-sm font-bold text-[#A1A1AA] uppercase">
                  {OFFER_CONFIG.currency}
                </span>
              </div>
              <span className="text-xs text-[#A1A1AA] font-medium block mt-1">
                Pago único • Incluye los 5 bonos ({formatMXN(OFFER_CONFIG.prices.bonusTotalValue)} de valor) sin costo adicional
              </span>
            </div>

            {/* Benefits List */}
            <ul className="space-y-3.5 mb-6">
              {[
                'Todo lo incluido en Thai Elite Esencial',
                'Bono 01: 20 Combinaciones de Ataque Profesionales',
                'Bono 02: 50 Entrenamientos Físicos para Muay Thai',
                'Bono 03: 50 Técnicas de Defensa y Contraataque',
                'Bono 04: Guía de Fundamentos del Muay Thai',
                'Bono 05: Guía de Recuperación Muscular',
                'Garantía de 7 días',
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white font-medium"
                >
                  {i >= 1 && i <= 5 ? (
                    <Gift className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  ) : (
                    <Check className="w-4 h-4 text-[#E50914] mt-0.5 shrink-0" />
                  )}
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs font-headline font-bold uppercase tracking-wider text-[#D4AF37] text-center mb-6">
              ¡LLÉVATE LOS 5 BONOS Y COMPLEMENTA TU ENTRENAMIENTO!
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={onSelectPro}
              className="w-full py-4 min-h-[48px] bg-[#E50914] hover:bg-[#C40812] active:scale-[0.99] text-white text-base sm:text-lg font-headline font-bold tracking-wider uppercase rounded-lg shadow-lg shadow-[#E50914]/30 border border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            >
              QUIERO THAI ELITE COMPLETO — {formatMXN(OFFER_CONFIG.prices.pro)}
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A1A1AA] mt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Compra protegida con garantía de 7 días.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
