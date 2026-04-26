'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const voices = [
  {
    attr: '20代後半 / 営業職',
    text: '条件だけじゃなくて、働き方まで整理できた！',
    icon: '/images/icons/person-smile.png',
    color: 'bg-pop-red'
  },
  {
    attr: '30代前半 / 事務職',
    text: '押しつけ感ゼロで、自分のペースで進められた。',
    icon: '/images/icons/person-card.png',
    color: 'bg-pop-blue'
  },
  {
    attr: '30代後半 / 看護→企画',
    text: '異業種でも強みを翻訳してくれて自信つきました。',
    icon: '/images/icons/person-point.png',
    color: 'bg-pop-ink'
  }
];

export default function Voices() {
  return (
    <section className="relative overflow-hidden bg-pop-blue py-20 text-white">
      <div aria-hidden className="absolute inset-0 bg-halftone-white opacity-25" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-yellow px-3 py-1 font-pop text-[11px] tracking-widest text-pop-ink shadow-comic"
        >
          ＼ リアルな声 ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-stroke-thick drop-shadow-[3px_3px_0_#1A1A1A]"
        >
          利用者さんの
          <br />
          <span className="text-pop-yellow">ナマの声。</span>
        </motion.h2>

        <ul className="mt-12 space-y-7">
          {voices.map((v, i) => {
            const tilt = i % 2 === 0 ? '-rotate-2' : 'rotate-2';
            const align = i % 2 === 0 ? 'mr-auto' : 'ml-auto';
            const tail = i % 2 === 0 ? '' : 'speech-bubble-r';
            return (
              <motion.li
                key={v.attr + i}
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 140 }}
                className={`relative max-w-[92%] ${align} ${tilt}`}
              >
                <div className={`speech-bubble ${tail} rounded-2xl border-[3px] border-pop-ink bg-white px-4 py-4 text-pop-ink shadow-comic-lg`}>
                  <div className="flex items-center gap-2">
                    <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border-[3px] border-pop-ink bg-pop-yellow shadow-comic">
                      <Image
                        src={v.icon}
                        alt=""
                        width={120}
                        height={120}
                        className="h-[44px] w-[44px] object-contain"
                      />
                    </span>
                    <div className="font-pop text-[11px] text-pop-ink/60">
                      {v.attr}
                    </div>
                  </div>
                  <p className="mt-3 font-pop text-[15.5px] leading-tight">
                    {v.text}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
