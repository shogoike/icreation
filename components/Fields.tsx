'use client';

import { motion } from 'framer-motion';

const fields = [
  'IT・Web', 'SaaS', 'メーカー', '医療・ヘルスケア', '人材', 'コンサル',
  '広告・マーケ', '金融', '飲食・サービス', '物流', '不動産', '小売',
  'EC', '製造', '建設', '教育', 'スタートアップ', '士業', 'メディア', 'スポーツ'
];

export default function Fields() {
  return (
    <section className="relative bg-offwhite py-24">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-600"
        >
          Fields
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5] text-brand-700"
        >
          業種を問いません。
        </motion.h2>
        <p className="mt-3 text-[13px] leading-relaxed text-muted">
          記載のない業種・職種もご相談ください。
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-brand-100 pt-7"
        >
          {fields.map((f) => (
            <span key={f} className="text-[13.5px] text-brand-600">
              {f}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
