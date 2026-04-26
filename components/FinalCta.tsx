'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

export default function FinalCta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24"
    >
      {/* スプリット背景 */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-pop-red clip-diagonal-l" />
        <div className="absolute inset-0 bg-pop-blue clip-diagonal-r" />
        <div className="absolute inset-0 bg-halftone-white opacity-30" />
      </div>

      {/* 装飾 */}
      <span aria-hidden className="absolute left-5 top-12 text-[24px] animate-sparkle">✦</span>
      <span aria-hidden className="absolute right-6 top-20 text-[28px] animate-floaty">⚡</span>
      <span aria-hidden className="absolute left-8 bottom-32 text-[22px] animate-sparkle [animation-delay:0.4s]">🔥</span>
      <span aria-hidden className="absolute right-7 bottom-40 text-[24px] animate-floaty [animation-delay:0.6s]">✦</span>

      <div className="container-mobile relative text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-yellow px-3 py-1 font-pop text-[11px] tracking-widest text-pop-ink shadow-comic"
        >
          ＼ FINAL CALL ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 140 }}
          className="mt-4 font-pop text-[36px] leading-[1.15] text-stroke-thick drop-shadow-[4px_4px_0_#1A1A1A]"
        >
          納得の転職、
          <br />
          <span className="text-pop-yellow">ひとりで悩まない。</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-5 font-pop text-[14px] leading-[1.9] drop-shadow-[2px_2px_0_#1A1A1A]"
        >
          経験も希望も丁寧に伺って、
          <br />
          あなたに合う一社、本気で探します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.2 }}
          className="mt-10 space-y-3"
        >
          <a
            href="#"
            className="group flex items-center justify-between gap-3 rounded-2xl border-[3px] border-pop-ink bg-pop-yellow px-5 py-5 font-pop text-pop-ink shadow-comic-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="text-[17px] tracking-wide">無料で転職相談する</span>
            <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" strokeWidth={3} />
          </a>
          <a
            href="#"
            className="flex items-center justify-between gap-3 rounded-2xl border-[3px] border-pop-ink bg-white px-5 py-4 font-pop text-pop-ink shadow-comic"
          >
            <span className="text-[14px]">LINEで気軽に相談</span>
            <ArrowRight className="h-4 w-4 opacity-70" strokeWidth={3} />
          </a>
          <p className="pt-2 text-center font-pop text-[12px] text-white drop-shadow-[1px_1px_0_#1A1A1A]">
            無理な応募・紹介はナシ！
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-2 rounded-2xl border-[3px] border-pop-ink bg-pop-ink px-4 py-3 text-[12px] text-white shadow-comic"
        >
          <Clock className="h-3.5 w-3.5 text-pop-yellow" strokeWidth={3} />
          受付：平日 10:00–20:00 / 土日 10:00–18:00
        </motion.div>
      </div>
    </section>
  );
}
