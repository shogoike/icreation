'use client';

import { motion } from 'framer-motion';
import PHImage from '@/components/PHImage';
import { ArrowRight, Clock } from 'lucide-react';
import { IMG } from '@/lib/images';

export default function FinalCta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-brand-700 py-28 text-white"
    >
      <PHImage
        slot={IMG.ctaBg}
        fill
        className="object-cover opacity-25"
        sizes="480px"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-700/85 via-brand-800/85 to-brand-800/95" />

      <div className="container-mobile relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-300"
        >
          Get started
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[28px] font-extrabold leading-[1.5] text-balance"
        >
          納得できる転職を、
          <br />
          一人で悩まない。
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-[14px] leading-[2] text-white/85"
        >
          経験や希望を丁寧に伺い、
          <br />
          あなたに合う職場探しをサポートします。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.2 }}
          className="mt-12 space-y-3"
        >
          <a
            href="#"
            className="group flex items-center justify-between gap-3 rounded-md bg-accent-600 px-6 py-5 font-bold text-white shadow-warm transition active:scale-[0.99]"
          >
            <span className="text-[15px] tracking-wide">無料で転職相談をする</span>
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="flex items-center justify-between gap-3 rounded-md border border-white/30 bg-transparent px-6 py-5 font-medium text-white"
          >
            <span className="text-[14px]">LINEで気軽に相談する</span>
            <ArrowRight className="h-4 w-4 opacity-70" />
          </a>
          <p className="pt-2 text-center text-[12px] text-white/70">
            無理な応募・紹介はありません
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-2 border-t border-white/15 pt-8 text-[12px] text-white/70"
        >
          <Clock className="h-3.5 w-3.5" />
          受付：平日 10:00–20:00 / 土日 10:00–18:00
        </motion.div>
      </div>
    </section>
  );
}
