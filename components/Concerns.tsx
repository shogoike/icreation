'use client';

import { motion } from 'framer-motion';

const items = [
  '今の職場を続けるべきか迷っている',
  '自分に合う求人が分からない',
  '転職したいが、失敗が怖い',
  '条件だけで選んで後悔したくない',
  '忙しくて求人を探す時間がない'
];

export default function Concerns() {
  return (
    <section className="relative bg-cream py-24">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-600"
        >
          Worries
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5] text-brand-700"
        >
          こんな悩みを、
          <br />
          一人で抱えていませんか？
        </motion.h2>

        <ul className="mt-12 divide-y divide-brand-100 border-y border-brand-100">
          {items.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.06 }}
              className="flex items-baseline gap-4 py-5"
            >
              <span className="font-serif text-[14px] italic font-semibold text-accent-600 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] leading-relaxed text-brand-700">{t}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 font-mincho text-[18px] leading-[2] text-brand-700"
        >
          ひとつでも当てはまったら、
          <br />
          まず話してみませんか。
        </motion.p>
        <p className="mt-2 text-[12.5px] text-muted">
          相談だけでもOK。無理な勧誘はいたしません。
        </p>
      </div>
    </section>
  );
}
