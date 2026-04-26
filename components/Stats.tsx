'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

function Counter({ to, suffix = '', float = false }: { to: number; suffix?: string; float?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => (float ? v.toFixed(1) : Math.round(v).toLocaleString()));

  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 1.6, ease: 'easeOut' });
      return () => c.stop();
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const items = [
  {
    n: 80,
    suf: '%',
    label: '相談者の満足度',
    sub: '「相談してよかった」と回答',
    bg: 'bg-pop-red',
    sticker: 'すごい',
    icon: '/images/icons/thumbs-up.png'
  },
  {
    n: 30,
    suf: '名',
    label: '毎月のご紹介実績',
    sub: '業種を問わず幅広く対応',
    bg: 'bg-pop-blue',
    sticker: '毎月!!',
    icon: null
  },
  {
    n: 1.2,
    suf: '倍',
    label: '平均年収アップ率',
    sub: '内定者ベース／2025年実績',
    float: true,
    bg: 'bg-pop-ink',
    sticker: 'UP↑',
    icon: null
  }
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-pop-paper py-20">
      <div aria-hidden className="absolute inset-0 bg-halftone-red opacity-10" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-yellow px-3 py-1 font-pop text-[11px] tracking-widest text-pop-ink shadow-comic"
        >
          ＼ 数字でドン ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink"
        >
          選ばれる<span className="marker-red">ワケ</span>、
          <br />
          数字で証明します。
        </motion.h2>

        <div className="mt-12 space-y-6">
          {items.map((s, i) => {
            const tilt = i % 2 === 0 ? '-rotate-1' : 'rotate-1';
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-12%' }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 140 }}
                className={`relative ${tilt}`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl border-[3px] border-pop-ink ${s.bg} p-5 text-white shadow-comic-lg`}
                >
                  <div aria-hidden className="absolute inset-0 bg-halftone-white opacity-25" />
                  <div className="relative flex items-end justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {s.icon && (
                          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border-[2px] border-pop-ink bg-white shadow-comic">
                            <Image
                              src={s.icon}
                              alt=""
                              width={80}
                              height={80}
                              className="h-[28px] w-[28px] object-contain"
                            />
                          </span>
                        )}
                        <div className="font-pop text-[14px] tracking-wide">
                          {s.label}
                        </div>
                      </div>
                      <div className="mt-1 text-[11.5px] leading-relaxed opacity-90">
                        {s.sub}
                      </div>
                    </div>
                    <div className="font-pop text-[64px] leading-none text-pop-yellow drop-shadow-[3px_3px_0_#1A1A1A]">
                      <Counter to={s.n} float={s.float} />
                      <span className="ml-0.5 text-[26px] text-white">{s.suf}</span>
                    </div>
                  </div>
                  <span className="absolute -right-2 -top-2 inline-block rotate-[10deg] rounded-md border-[2px] border-pop-ink bg-pop-yellow px-2 py-0.5 font-pop text-[10px] text-pop-ink shadow-comic">
                    {s.sticker}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
