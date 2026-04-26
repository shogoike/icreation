'use client';

import { motion } from 'framer-motion';

const fields = [
  { label: 'IT・Web', color: 'bg-pop-red' },
  { label: 'SaaS', color: 'bg-pop-blue' },
  { label: 'メーカー', color: 'bg-pop-yellow' },
  { label: '医療・ヘルスケア', color: 'bg-pop-blue' },
  { label: '人材', color: 'bg-pop-red' },
  { label: 'コンサル', color: 'bg-pop-ink' },
  { label: '広告・マーケ', color: 'bg-pop-red' },
  { label: '金融', color: 'bg-pop-blue' },
  { label: '飲食・サービス', color: 'bg-pop-yellow' },
  { label: '物流', color: 'bg-pop-blue' },
  { label: '不動産', color: 'bg-pop-red' },
  { label: '小売', color: 'bg-pop-ink' },
  { label: 'EC', color: 'bg-pop-yellow' },
  { label: '製造', color: 'bg-pop-blue' },
  { label: '建設', color: 'bg-pop-red' },
  { label: '教育', color: 'bg-pop-yellow' },
  { label: 'スタートアップ', color: 'bg-pop-red' },
  { label: '士業', color: 'bg-pop-blue' },
  { label: 'メディア', color: 'bg-pop-ink' },
  { label: 'スポーツ', color: 'bg-pop-yellow' }
];

export default function Fields() {
  return (
    <section className="relative overflow-hidden bg-pop-cream py-20">
      <div aria-hidden className="absolute inset-0 bg-halftone-ink opacity-10" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-yellow px-3 py-1 font-pop text-[11px] tracking-widest text-pop-ink shadow-comic"
        >
          ＼ 業界フリースタイル ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink"
        >
          業種、<span className="marker-red">問いません。</span>
        </motion.h2>
        <p className="mt-3 text-[12.5px] font-bold text-pop-ink/70">
          記載のない業種・職種もぜんぜんOK！
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {fields.map((f, i) => {
            const tilt = i % 3 === 0 ? '-rotate-2' : i % 3 === 1 ? 'rotate-1' : '-rotate-1';
            const isYellow = f.color === 'bg-pop-yellow';
            return (
              <motion.span
                key={f.label}
                initial={{ opacity: 0, scale: 0.6, y: 6 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, type: 'spring', stiffness: 200 }}
                className={`${tilt} ${f.color} ${
                  isYellow ? 'text-pop-ink' : 'text-white'
                } inline-block rounded-md border-[2px] border-pop-ink px-2.5 py-1 font-pop text-[12.5px] shadow-comic`}
              >
                {f.label}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
