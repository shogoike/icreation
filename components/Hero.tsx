'use client';

import { motion } from 'framer-motion';
import PHImage from '@/components/PHImage';
import { ArrowRight } from 'lucide-react';
import { IMG } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-brand-700 text-white">
      <PHImage
        slot={IMG.hero}
        fill
        priority
        sizes="(max-width: 480px) 100vw, 480px"
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-700/85 via-brand-700/72 to-brand-800/95" />

      <div className="container-mobile relative z-10 flex min-h-[100svh] flex-col">
        <header className="flex items-center justify-between pt-7">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-extrabold italic tracking-tight">
              icreation
            </span>
            <span className="ml-1 inline-block h-[14px] w-px bg-white/30" />
            <span className="text-[10px] tracking-[0.2em] text-white/70">RECRUIT</span>
          </div>
          <a
            href="#cta"
            className="text-[12px] tracking-wider text-white/85 underline underline-offset-4 decoration-white/40 hover:decoration-accent-400"
          >
            無料相談
          </a>
        </header>

        <div className="flex flex-1 flex-col justify-center pb-12 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[12px] italic tracking-[0.18em] text-accent-300"
          >
            Career advisory by icreation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-mincho text-[36px] font-extrabold leading-[1.25] tracking-[-0.01em] text-balance"
          >
            希望条件だけでなく、
            <br />
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              働き方
            </span>
            まで見て
            <br />
            ご紹介します。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-[14px] leading-[2] text-white/85"
          >
            給与・勤務地・人間関係・将来性まで、
            <br />
            転職後を見据えてご提案します。
            <br />
            <span className="text-white/65">毎月30名のサポート、利用者の80%が「相談してよかった」</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="#cta"
              className="group flex items-center justify-between gap-3 rounded-md bg-accent-600 px-6 py-5 font-bold text-white shadow-warm transition active:scale-[0.99]"
            >
              <span className="text-[15px] tracking-wide">無料で転職相談をする</span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <p className="mt-3 text-center text-[11.5px] text-white/70">
              無理な応募・紹介はありません
            </p>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 font-serif text-[11px] italic tracking-[0.4em] text-white/50"
        >
          scroll
        </motion.div>
      </div>
    </section>
  );
}
