/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Play,
  FileText,
  Target,
  Dumbbell,
  Timer,
  BarChart3,
  Shield,
  Crosshair,
  Brain,
  BookOpen,
  Compass,
  Star,
  Heart,
  Zap,
  Activity,
  Gift,
  ChevronRight,
} from 'lucide-react';
import { OFFER_CONFIG, formatMXN } from '../config/offer.ts';

interface BonusSectionProps {
  onCtaClick: () => void;
}

export function BonusSection({ onCtaClick }: BonusSectionProps) {
  return (
    <section
      id="bonus"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1a1a1a] overflow-hidden relative"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#E50914]/10 rounded-full blur-[130px] pointer-events-none -z-10"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          <span className="text-[#E50914] font-bold">5 BONOS EXCLUSIVOS</span>
          <span className="text-[#666]">•</span>
          <span className="text-white/90">
            ¡COMPLEMENTA TU APRENDIZAJE CON ESTOS 5 BONOS!
          </span>
        </div>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
          Con THAI ELITE COMPLETO, además de la biblioteca principal de entrenamientos, recibes{' '}
          <strong className="text-white font-semibold">
            cinco materiales adicionales
          </strong>{' '}
          para ampliar tus conocimientos sobre técnicas, fundamentos, defensas y preparación física.
        </p>
      </motion.div>

      {/* ROW 1: BONO 01 (Wide 7 cols) + BONO 02 (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* BONO 01 — 20 COMBINACIONES DE ATAQUE PROFESIONALES */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -5 }}
          className="lg:col-span-7 relative bg-[#0e0e0e] border border-[#262626] hover:border-[#E50914]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-2xl transition-colors duration-300 min-h-[360px]"
        >
          {/* Background Live Video Preview on Right with Dark Gradient Mask */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-full sm:w-3/5 opacity-35 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
          >
            <video
              src={OFFER_CONFIG.bonuses[0].previewVideoSrc}
              className="w-full h-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/60" />
          </div>

          {/* Diagonal Red Slash Accent */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -left-10 w-44 h-44 bg-[#E50914]/15 rotate-45 blur-2xl pointer-events-none"
          />

          <div className="relative z-10 max-w-md">
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BONO 01
            </span>

            <div className="mb-5">
              <span className="block font-headline font-black text-6xl sm:text-7xl text-[#E50914] leading-[0.85] tracking-tight">
                20
              </span>
              <h3 className="font-headline font-black text-2xl sm:text-3xl text-white uppercase leading-[0.98] mt-1">
                COMBINACIONES
                <br />
                DE ATAQUE
                <br />
                PROFESIONALES
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#D4D4D8] mb-5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#E50914] shrink-0">
                  <Play className="w-3 h-3 fill-current" />
                </span>
                <span>Conoce diferentes combinaciones de golpes.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#E50914] shrink-0">
                  <FileText className="w-3 h-3" />
                </span>
                <span>Descubre secuencias de puños y patadas.</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#E50914] shrink-0">
                  <Target className="w-3 h-3" />
                </span>
                <span>Amplía tus conocimientos de ataque.</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="w-8 h-0.5 bg-[#E50914] mb-2" />
              <p className="text-xs text-[#A1A1AA] max-w-xs leading-relaxed">
                Explora combinaciones de Muay Thai y descubre nuevas secuencias para practicar.
              </p>
            </div>

            <button
              type="button"
              onClick={onCtaClick}
              className="self-start sm:self-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-xs font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn shrink-0"
            >
              <span className="w-6 h-6 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-3 h-3 fill-current translate-x-0.5" />
              </span>
              <span>VER BONO</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>

        {/* BONO 02 — 50 ENTRENAMIENTOS FÍSICOS PARA MUAY THAI */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -5 }}
          className="lg:col-span-5 relative bg-[#0e0e0e] border border-[#262626] hover:border-[#E50914]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-2xl transition-colors duration-300 min-h-[360px]"
        >
          {/* Background Video Preview */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-1/2 opacity-30 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"
          >
            <video
              src={OFFER_CONFIG.bonuses[1].previewVideoSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-transparent" />
          </div>

          <div className="relative z-10">
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BONO 02
            </span>

            <div className="mb-5">
              <span className="block font-headline font-black text-6xl text-[#E50914] leading-[0.85] tracking-tight">
                50
              </span>
              <h3 className="font-headline font-black text-2xl text-white uppercase leading-[0.98] mt-1">
                ENTRENAMIENTOS
                <br />
                FÍSICOS PARA
                <br />
                MUAY THAI
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-[#D4D4D8] mb-4">
              <li className="flex items-start gap-2.5">
                <Dumbbell className="w-4 h-4 text-[#A1A1AA] shrink-0 mt-0.5" />
                <span>Ejercicios de fuerza.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Timer className="w-4 h-4 text-[#A1A1AA] shrink-0 mt-0.5" />
                <span>Resistencia y acondicionamiento.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <BarChart3 className="w-4 h-4 text-[#A1A1AA] shrink-0 mt-0.5" />
                <span>Preparación física complementaria.</span>
              </li>
            </ul>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              Conoce ejercicios que pueden ayudarte a complementar tu preparación física para practicar Muay Thai.
            </p>
          </div>

          <div className="relative z-10 flex justify-end pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-[11px] font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            >
              <span className="w-5 h-5 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </span>
              <span>CONOCER BONO</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ROW 2: BONO 03, BONO 04 (Red Highlighted Border), BONO 05 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* BONO 03 — 50 TÉCNICAS DE DEFENSA Y CONTRAATAQUE */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -5 }}
          className="relative bg-[#0e0e0e] border border-[#262626] hover:border-[#E50914]/60 rounded-2xl p-6 flex flex-col justify-between overflow-hidden group shadow-xl transition-colors duration-300"
        >
          <div>
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BONO 03
            </span>

            <div className="mb-5 pb-4 border-b border-[#1f1f1f]">
              <span className="block font-headline font-black text-5xl sm:text-6xl text-[#E50914] leading-[0.85] tracking-tight">
                50
              </span>
              <h3 className="font-headline font-black text-xl sm:text-2xl text-white uppercase leading-[1.02] mt-1">
                TÉCNICAS
                <br />
                DE DEFENSA Y
                <br />
                CONTRAATAQUE
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-[#D4D4D8] mb-4">
              <li className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Conoce diferentes técnicas defensivas.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Crosshair className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Aprende sobre movimientos de contraataque.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Brain className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Amplía tus conocimientos técnicos.</span>
              </li>
            </ul>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              Descubre recursos de defensa y contraataque para comprender mejor los movimientos utilizados en el Muay Thai.
            </p>
          </div>

          <div className="flex justify-end pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-[11px] font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            >
              <span className="w-5 h-5 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </span>
              <span>CONOCER BONO</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>

        {/* BONO 04 — GUÍA DE FUNDAMENTOS DEL MUAY THAI (Featured Red Border) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -5 }}
          className="relative bg-[#0e0e0e] border-2 border-[#E50914] shadow-[0_0_35px_rgba(229,9,20,0.18)] rounded-2xl p-6 flex flex-col justify-between overflow-hidden group transition-all duration-300"
        >
          <div>
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BONO 04
            </span>

            <div className="mb-5 pb-4 border-b border-[#E50914]/30">
              <span className="block font-headline font-black text-5xl sm:text-6xl text-[#E50914] leading-[0.85] tracking-tight">
                GUÍA
              </span>
              <h3 className="font-headline font-black text-xl sm:text-2xl text-white uppercase leading-[1.02] mt-1">
                DE FUNDAMENTOS
                <br />
                DEL MUAY THAI
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-white/90 mb-4">
              <li className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Postura y guardia.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Desplazamientos básicos.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Fundamentos esenciales.</span>
              </li>
            </ul>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              Conoce los principios básicos del Muay Thai y refuerza tus conocimientos desde el inicio.
            </p>
          </div>

          <div className="flex justify-end pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-[11px] font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            >
              <span className="w-5 h-5 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </span>
              <span>CONOCER BONO</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>

        {/* BONO 05 — GUÍA DE RECUPERACIÓN MUSCULAR */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -5 }}
          className="relative bg-[#0e0e0e] border border-[#262626] hover:border-[#E50914]/60 rounded-2xl p-6 flex flex-col justify-between overflow-hidden group shadow-xl transition-colors duration-300"
        >
          <div>
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BONO 05
            </span>

            <div className="mb-5 pb-4 border-b border-[#1f1f1f]">
              <span className="block font-headline font-black text-5xl sm:text-6xl text-[#E50914] leading-[0.85] tracking-tight">
                GUÍA
              </span>
              <h3 className="font-headline font-black text-xl sm:text-2xl text-white uppercase leading-[1.02] mt-1">
                DE RECUPERACIÓN
                <br />
                MUSCULAR
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-[#D4D4D8] mb-4">
              <li className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Cuidados después del entrenamiento.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Descanso y recuperación.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Recomendaciones para tu rutina.</span>
              </li>
            </ul>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              Descubre conceptos importantes sobre descanso y recuperación muscular para complementar tus entrenamientos.
            </p>
          </div>

          <div className="flex justify-end pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-[11px] font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            >
              <span className="w-5 h-5 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </span>
              <span>CONOCER BONO</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM VALUE ANCHOR BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        onClick={onCtaClick}
        className="max-w-4xl mx-auto bg-gradient-to-r from-[#0c0c0c] via-[#130909] to-[#1a0708] border border-dashed border-[#E50914]/75 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 cursor-pointer hover:border-[#E50914] transition-all shadow-2xl relative overflow-hidden"
      >
        {/* Left: Gift Icon + Total Value Strikethrough */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 flex items-center justify-center text-[#E50914] shrink-0">
            <Gift className="w-7 h-7" />
          </div>
          <div className="text-left">
            <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-white uppercase">
              VALOR DE LOS 5 BONOS
            </span>
            <div className="relative inline-block mt-0.5">
              <span className="font-headline font-black text-4xl sm:text-5xl text-[#E50914] tracking-tight tabular-nums">
                {formatMXN(OFFER_CONFIG.prices.bonusTotalValue)}
              </span>
              {/* Crisp horizontal red/white strike bar */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-white/85 rounded-full shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Vertical Divider on Desktop */}
        <div
          aria-hidden="true"
          className="hidden md:block w-px h-14 bg-[#E50914]/40"
        />

        {/* Right: Included in Complete Package */}
        <div className="text-center md:text-left">
          <span className="block text-xs sm:text-sm font-bold tracking-[0.15em] text-[#E50914] uppercase mb-1">
            INCLUIDOS SIN COSTO ADICIONAL EN THAI ELITE COMPLETO
          </span>
          <p className="text-xs sm:text-sm text-[#D4D4D8] max-w-sm leading-relaxed mb-3">
            Recibe los{' '}
            <strong className="text-white font-semibold">
              cinco bonos exclusivos
            </strong>{' '}
            junto con la biblioteca principal de entrenamientos de Muay Thai.
          </p>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E50914] text-white text-xs font-headline font-bold uppercase tracking-wider shadow-md">
            ¡QUIERO TODOS LOS BONOS!
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
