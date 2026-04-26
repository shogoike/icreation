'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* 斜めスプリット背景 */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-pop-red clip-diagonal-l" />
        <div className="absolute inset-0 bg-pop-blue clip-diagonal-r" />
        {/* ハーフトーン */}
        <div className="absolute inset-0 bg-halftone-white opacity-40" />
        {/* 集中線 */}
        <div className="absolute inset-x-0 top-[34%] h-[36%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.0)_30%,rgba(255,255,255,0.0)_31%,transparent_32%)]" />
      </div>

      {/* 装飾エモジ／スパーク */}
      <span aria-hidden className="absolute left-4 top-24 text-[28px] animate-sparkle">✦</span>
      <span aria-hidden className="absolute right-6 top-36 text-[22px] animate-floaty">⚡</span>
      <span aria-hidden className="absolute left-8 bottom-40 text-[26px] animate-sparkle [animation-delay:0.5s]">✦</span>
      <span aria-hidden className="absolute right-5 bottom-56 text-[24px] animate-floaty [animation-delay:0.8s]">🔥</span>

      <div className="container-mobile relative z-10 flex min-h-[100svh] flex-col text-white">
        {/* Header */}
        <header className="flex items-center justify-between pt-7">
          <div className="flex items-center gap-2">
            <span className="font-pop text-lg tracking-tight drop-shadow-[2px_2px_0_#1A1A1A]">
              icreation
            </span>
            <span className="ml-1 inline-block rounded-full bg-pop-yellow px-1.5 py-0.5 text-[9px] font-black tracking-[0.18em] text-pop-ink shadow-comic">
              RECRUIT
            </span>
          </div>
          <a
            href="#cta"
            className="rounded-full border-2 border-white bg-pop-ink px-3 py-1 text-[11px] font-bold tracking-wider text-white shadow-[3px_3px_0_#FFD400]"
          >
            無料相談
          </a>
        </header>

        {/* どっち派？タイトル */}
        <div className="relative mt-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.6 }}
            className="font-pop text-[14px] tracking-widest text-pop-yellow drop-shadow-[2px_2px_0_#1A1A1A]"
          >
            ＼ 転職、 ／
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 110 }}
            className="font-pop mt-2 text-center text-[44px] leading-[1.05] tracking-tight text-white text-stroke-thick drop-shadow-[4px_4px_0_#1A1A1A]"
          >
            あなたは
            <br />
            どっち派<span className="text-pop-yellow">？</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="mt-2 inline-block rotate-[6deg] rounded-full bg-pop-yellow px-3 py-1 font-pop text-[11px] tracking-widest text-pop-ink shadow-comic"
          >
            キャンペーン
          </motion.div>
        </div>

        {/* VS 構図 */}
        <div className="relative mt-8 flex flex-1 items-center justify-center pb-44">
          {/* 左：年収重視派 */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -12 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="relative -mr-2 flex w-[44%] flex-col items-center"
          >
            <div className="relative flex h-[110px] w-[110px] items-center justify-center overflow-hidden rounded-2xl border-[3px] border-pop-ink bg-white shadow-comic-lg">
              <div className="absolute inset-1 rounded-xl bg-halftone-red" />
              <Image
                src="/images/icons/money.gif"
                alt=""
                width={200}
                height={200}
                unoptimized
                className="relative h-[88px] w-[88px] object-contain"
              />
              <span className="absolute -right-2 -top-2 inline-block rotate-[12deg] rounded-md bg-pop-yellow px-1.5 py-0.5 font-pop text-[9px] text-pop-ink shadow-comic">
                MAX!!
              </span>
            </div>
            <div className="mt-3 text-center">
              <div className="font-pop text-[12px] tracking-wider text-white drop-shadow-[2px_2px_0_#1A1A1A]">
                年収重視派
              </div>
              <div className="font-pop text-[18px] leading-tight text-pop-yellow drop-shadow-[2px_2px_0_#1A1A1A]">
                Salary
              </div>
            </div>
          </motion.div>

          {/* 中央 VS */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.85, type: 'spring', stiffness: 180 }}
            className="relative z-20 mx-1 grid h-[88px] w-[88px] place-items-center"
          >
            <div className="absolute inset-0 animate-spin-slow bg-radial-burst-yellow badge-burst" />
            <span className="relative font-pop text-[40px] font-black italic tracking-tighter text-pop-ink">
              VS
            </span>
          </motion.div>

          {/* 右：働き方重視派 */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="relative -ml-2 flex w-[44%] flex-col items-center"
          >
            <div className="relative flex h-[110px] w-[110px] items-center justify-center overflow-hidden rounded-2xl border-[3px] border-pop-ink bg-white shadow-comic-lg">
              <div className="absolute inset-1 rounded-xl bg-halftone-blue" />
              <Image
                src="/images/icons/nature.png"
                alt=""
                width={200}
                height={200}
                className="relative h-[88px] w-[88px] object-contain"
              />
              <span className="absolute -left-2 -top-2 inline-block rotate-[-12deg] rounded-md bg-pop-yellow px-1.5 py-0.5 font-pop text-[9px] text-pop-ink shadow-comic">
                CHILL!!
              </span>
            </div>
            <div className="mt-3 text-center">
              <div className="font-pop text-[12px] tracking-wider text-white drop-shadow-[2px_2px_0_#1A1A1A]">
                働き方重視派
              </div>
              <div className="font-pop text-[18px] leading-tight text-pop-yellow drop-shadow-[2px_2px_0_#1A1A1A]">
                Worklife
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA + キャッチ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="absolute inset-x-0 bottom-0 px-5 pb-8"
        >
          <div className="mx-auto max-w-[420px] rounded-2xl border-[3px] border-pop-ink bg-white px-4 py-4 shadow-comic-lg">
            <p className="text-center font-pop text-[15px] leading-[1.6] text-pop-ink">
              <span className="marker-yellow">どっちも捨てがたい？</span>
              <br />
              ぶっちゃけ、<span className="text-pop-red">両取りできます。</span>
            </p>
            <a
              href="#quiz"
              className="group mt-3 flex items-center justify-between gap-3 rounded-xl border-[3px] border-pop-ink bg-pop-yellow px-5 py-3.5 font-pop text-pop-ink shadow-comic active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <span className="text-[15px] tracking-wide">どっち派か診断する</span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" strokeWidth={3} />
            </a>
            <p className="mt-2 text-center text-[10.5px] font-bold text-pop-ink/70">
              ↓ 30秒でわかる！押しつけ・勧誘ナシ
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
