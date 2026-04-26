'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  { n: '01', title: '無料相談', desc: '現状や希望をオンラインでヒアリング', icon: '/images/icons/person-laptop.png', color: 'bg-pop-red' },
  { n: '02', title: '求人提案', desc: '条件と適性に合う求人をご紹介', icon: '/images/icons/person-point.png', color: 'bg-pop-blue' },
  { n: '03', title: '応募・面接', desc: '書類添削・想定問答まで徹底サポート', icon: '/images/icons/person-card.png', color: 'bg-pop-red' },
  { n: '04', title: '内定・入職', desc: '年収交渉・退職交渉のアドバイスまで', icon: '/images/icons/confetti.gif', color: 'bg-pop-blue' }
];

export default function Steps() {
  return (
    <section id="flow" className="relative overflow-hidden bg-pop-paper py-20">
      <div aria-hidden className="absolute inset-0 bg-halftone-ink opacity-10" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-yellow px-3 py-1 font-pop text-[11px] tracking-widest text-pop-ink shadow-comic"
        >
          ＼ 流れはこんな感じ ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink"
        >
          相談から内定まで、
          <br />
          <span className="marker-yellow">ぜーんぶ無料。</span>
        </motion.h2>

        <ol className="relative mt-12 space-y-8">
          {steps.map((s, i) => {
            const tilt = i % 2 === 0 ? '-rotate-1' : 'rotate-1';
            return (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16, scale: 0.92 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 140 }}
                className={`relative ${tilt}`}
              >
                <div
                  className={`relative flex items-center gap-4 rounded-2xl border-[3px] border-pop-ink ${s.color} p-4 text-white shadow-comic-lg`}
                >
                  <div aria-hidden className="absolute inset-0 rounded-2xl bg-halftone-white opacity-20" />
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border-[3px] border-pop-ink bg-white shadow-comic">
                    <Image
                      src={s.icon}
                      alt=""
                      width={120}
                      height={120}
                      unoptimized={s.icon.endsWith('.gif')}
                      className="h-[50px] w-[50px] object-contain"
                    />
                  </span>
                  <div className="relative flex-1">
                    <div className="font-pop text-[12px] text-pop-yellow drop-shadow-[1px_1px_0_#1A1A1A]">
                      STEP {s.n}
                    </div>
                    <h3 className="font-pop text-[20px] leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-white/90">
                      {s.desc}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div aria-hidden className="my-1 flex justify-center">
                    <span className="font-pop text-[24px] text-pop-ink animate-bounce-pop">↓</span>
                  </div>
                )}
              </motion.li>
            );
          })}
        </ol>

        <div className="mt-10 rounded-2xl border-[3px] border-pop-ink bg-white p-4 text-center shadow-comic">
          <p className="font-pop text-[15px] text-pop-ink">
            <span className="marker-yellow">ぜんぶ無料</span>。やめたくなったらいつでもストップOK。
          </p>
        </div>
      </div>
    </section>
  );
}
