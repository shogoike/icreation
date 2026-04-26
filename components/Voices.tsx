'use client';

import { motion } from 'framer-motion';

const voices = [
  {
    attr: '20代後半 / 営業職',
    text: '前職での悩みを丁寧に聞いてもらえたことで、条件だけでなく働き方まで整理できました。'
  },
  {
    attr: '30代前半 / 事務職',
    text: '求人を押しつけられる感じがなく、自分のペースで相談できたのが安心でした。'
  },
  {
    attr: '30代後半 / 看護→企画職',
    text: 'まったく違う業界への転職でしたが、強みを丁寧に翻訳してくれて、自信を持って臨めました。'
  }
];

export default function Voices() {
  return (
    <section className="relative bg-brand-700 py-24 text-white">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-300"
        >
          Voices
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5]"
        >
          ご利用者の声。
        </motion.h2>

        <ul className="mt-12 divide-y divide-white/15 border-y border-white/15">
          {voices.map((v, i) => (
            <motion.li
              key={v.attr + i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.08 }}
              className="py-9"
            >
              <div className="font-serif text-[12px] italic tracking-[0.18em] text-accent-300">
                {v.attr}
              </div>
              <blockquote className="mt-3 font-mincho text-[15.5px] leading-[2] text-white/95">
                {v.text}
              </blockquote>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
