'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
  { n: 80, suf: '%', label: '相談者の満足度', sub: '「相談してよかった」と回答' },
  { n: 30, suf: '名', label: '毎月のご紹介実績', sub: '業種を問わず幅広く対応' },
  { n: 1.2, suf: '倍', label: '平均年収アップ率', sub: '内定者ベース／2025年実績', float: true }
];

export default function Stats() {
  return (
    <section className="relative bg-offwhite py-24">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-600"
        >
          Numbers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5] text-brand-700"
        >
          選ばれている、理由。
        </motion.h2>

        <div className="mt-14">
          {items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="border-t border-brand-100 py-9 last:border-b"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex-1">
                  <div className="text-[13px] font-bold tracking-wide text-brand-500">
                    {s.label}
                  </div>
                  <div className="mt-1.5 text-[12px] leading-relaxed text-muted">
                    {s.sub}
                  </div>
                </div>
                <div className="font-serif text-[68px] font-extrabold italic leading-none tracking-tight text-brand-700">
                  <Counter to={s.n} float={s.float} />
                  <span className="ml-0.5 text-[26px] font-semibold not-italic text-accent-600">
                    {s.suf}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
