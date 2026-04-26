'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  { text: '今の職場、続けるべき…？', icon: '/images/icons/person-point.png' },
  { text: '自分に合う求人、わからん！', icon: '/images/icons/notebook-pen.png' },
  { text: '転職、失敗が怖すぎ…', icon: '/images/icons/person-card.png' },
  { text: '条件だけで決めて後悔したくない', icon: '/images/icons/money.png' },
  { text: '忙しすぎて求人見る時間ない！', icon: '/images/icons/person-laptop.png' }
];

export default function Concerns() {
  return (
    <section className="relative overflow-hidden bg-pop-cream py-20">
      <div aria-hidden className="absolute inset-0 bg-halftone-ink opacity-15" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-red px-3 py-1 font-pop text-[11px] tracking-widest text-white shadow-comic"
        >
          ＼ 心の叫び ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink"
        >
          こんな悩み、
          <br />
          <span className="marker-yellow">抱えてないですか？</span>
        </motion.h2>

        {/* 吹き出しリスト */}
        <ul className="mt-12 space-y-7">
          {items.map((item, i) => {
            const tilt = i % 2 === 0 ? '-rotate-2' : 'rotate-2';
            const ml = i % 2 === 0 ? 'mr-auto' : 'ml-auto';
            const tail = i % 2 === 0 ? '' : 'speech-bubble-r';
            return (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 150 }}
                className={`relative flex max-w-[88%] items-center gap-3 ${ml} ${tilt}`}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border-[3px] border-pop-ink bg-white shadow-comic">
                  <Image
                    src={item.icon}
                    alt=""
                    width={120}
                    height={120}
                    className="h-[40px] w-[40px] object-contain"
                  />
                </span>
                <div
                  className={`speech-bubble ${tail} flex-1 rounded-2xl border-[3px] border-pop-ink bg-white px-4 py-3 font-pop text-[15px] leading-tight text-pop-ink shadow-comic`}
                >
                  {item.text}
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* オチ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14"
        >
          <div className="rounded-2xl border-[3px] border-pop-ink bg-pop-ink px-5 py-5 text-center text-white shadow-comic-lg">
            <p className="font-pop text-[20px] leading-tight">
              ぜんぶ、<span className="text-pop-yellow">icreation</span>に
            </p>
            <p className="mt-1 font-pop text-[26px] leading-tight">
              <span className="marker-red">投げてください。</span>
            </p>
          </div>
          <p className="mt-3 text-center text-[12px] font-bold text-pop-ink/70">
            相談だけでもOK・無理な勧誘ナシ
          </p>
        </motion.div>
      </div>
    </section>
  );
}
