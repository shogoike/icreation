'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  {
    n: '01',
    title: '希望、まるっと整理',
    desc: '給与・勤務地だけじゃ足りない。働き方も将来像も、初回90分でぜんぶ言語化。',
    icon: '/images/icons/notebook-pen.png',
    bg: 'bg-pop-red',
    badge: 'まずココ'
  },
  {
    n: '02',
    title: '空気まで読んで提案',
    desc: '求人票では分からない雰囲気・相性・社内のリアル。中の人のクセまで踏まえてご紹介。',
    icon: '/images/icons/tray-serve.png',
    bg: 'bg-pop-blue',
    badge: 'ここが本気'
  },
  {
    n: '03',
    title: '入職まで併走',
    desc: '応募・面接・条件交渉・退職交渉まで丸ごとサポート。年収交渉も担当者が代行。',
    icon: '/images/icons/person-smile.png',
    bg: 'bg-pop-yellow',
    badge: '最後まで'
  }
];

export default function Strengths() {
  return (
    <section className="relative overflow-hidden bg-pop-cream py-20">
      <div aria-hidden className="absolute inset-0 bg-halftone-blue opacity-10" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-blue px-3 py-1 font-pop text-[11px] tracking-widest text-white shadow-comic"
        >
          ＼ icreationの3本柱 ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink"
        >
          条件で選ばない。
          <br />
          <span className="marker-blue">働き方</span>から探す。
        </motion.h2>
      </div>

      <div className="container-mobile mt-12 space-y-7">
        {items.map((s, i) => {
          const tilt = i % 2 === 0 ? '-rotate-1' : 'rotate-1';
          const isYellow = s.bg === 'bg-pop-yellow';
          const textColor = isYellow ? 'text-pop-ink' : 'text-white';
          return (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 22, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 140 }}
              className={`relative ${tilt}`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl border-[3px] border-pop-ink ${s.bg} ${textColor} p-5 shadow-comic-lg`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 opacity-20 ${
                    isYellow ? 'bg-halftone-ink' : 'bg-halftone-white'
                  }`}
                />
                <div className="relative flex items-start gap-3">
                  <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border-[3px] border-pop-ink bg-white shadow-comic">
                    <Image
                      src={s.icon}
                      alt=""
                      width={120}
                      height={120}
                      className="h-[58px] w-[58px] object-contain"
                    />
                  </span>
                  <div className="flex-1 pt-0.5">
                    <div className={`font-pop text-[12px] ${isYellow ? 'opacity-70' : 'opacity-80'}`}>
                      {s.n}
                    </div>
                    <h3 className="font-pop text-[22px] leading-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className={`mt-4 text-[13.5px] leading-[1.9] ${isYellow ? 'text-pop-ink/85' : 'text-white/90'}`}>
                  {s.desc}
                </p>
                <span className="absolute -right-2 -top-2 inline-block rotate-[8deg] rounded-md border-[2px] border-pop-ink bg-pop-yellow px-2 py-0.5 font-pop text-[10px] text-pop-ink shadow-comic">
                  {s.badge}
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
