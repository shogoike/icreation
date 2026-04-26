'use client';

import { motion } from 'framer-motion';
import PHImage from '@/components/PHImage';
import { IMG } from '@/lib/images';

const items = [
  {
    n: '01',
    title: '希望を整理する',
    desc: '給与・勤務地だけでなく、働き方や将来像まで丁寧に伺います。初回90分のヒアリングで、転職の軸を一緒に言語化します。',
    img: IMG.strength1
  },
  {
    n: '02',
    title: '合う職場を提案する',
    desc: '求人票だけでは分からない雰囲気や相性も踏まえてご紹介。業種を問わず、一人ひとりに合う一社を選びます。',
    img: IMG.strength2
  },
  {
    n: '03',
    title: '入職まで伴走する',
    desc: '応募・面接・条件確認まで、必要な場面でサポート。年収交渉も担当者が代行し、あなたの市場価値を引き出します。',
    img: IMG.strength3
  }
];

export default function Strengths() {
  return (
    <section className="relative bg-offwhite py-24">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-600"
        >
          What we do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5] text-brand-700"
        >
          条件ではなく、
          <br />
          働き方から探す。
        </motion.h2>
      </div>

      <div className="mt-16 space-y-24">
        {items.map((s, i) => (
          <motion.article
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <PHImage slot={s.img} fill className="object-cover" sizes="480px" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-800/40" />
              <span className="absolute left-5 top-5 font-serif text-[13px] italic tracking-[0.2em] text-white/90">
                {s.n}
              </span>
            </div>
            <div className="container-mobile mt-8">
              <h3 className="font-mincho text-[24px] font-extrabold leading-[1.45] text-brand-700">
                {s.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[2] text-brand-600">
                {s.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
