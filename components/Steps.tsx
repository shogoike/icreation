'use client';

import { motion } from 'framer-motion';

const steps = [
  { n: '01', title: '無料相談', desc: '現状や希望をオンラインでヒアリング' },
  { n: '02', title: '求人提案', desc: 'あなたの条件と適性に合う求人をご紹介' },
  { n: '03', title: '応募・面接', desc: '書類添削・想定問答まで徹底サポート' },
  { n: '04', title: '内定・入職', desc: '年収交渉・退職交渉のアドバイスまで' }
];

export default function Steps() {
  return (
    <section id="flow" className="relative bg-offwhite py-24">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-600"
        >
          Flow
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5] text-brand-700"
        >
          相談から内定まで、
          <br />
          すべて無料。
        </motion.h2>

        <ol className="relative mt-14">
          <span aria-hidden className="absolute left-[34px] top-2 bottom-2 w-px bg-brand-100" />
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.08 }}
              className="relative flex items-baseline gap-7 pb-10 last:pb-0"
            >
              <span className="relative grid h-[68px] w-[68px] shrink-0 place-items-center bg-offwhite">
                <span className="font-serif text-[20px] italic font-extrabold text-accent-600 tabular-nums">
                  {s.n}
                </span>
              </span>
              <div className="flex-1 pt-2">
                <h3 className="font-mincho text-[18px] font-bold text-brand-700">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
