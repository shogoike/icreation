'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  { q: '相談だけでも利用できますか？', a: 'もちろん可能です。「転職するか決めていない」段階のご相談を歓迎しています。無理な勧誘は一切いたしません。' },
  { q: '料金はかかりますか？', a: '求職者の方からは一切費用をいただきません。すべてのサポートを無料でご利用いただけます。' },
  { q: '対応エリアは？', a: '全国対応。オンライン面談を中心に、関東・関西は対面でのご相談も可能です。' },
  { q: '未経験の業種にも転職できますか？', a: '可能です。実際に異業種への転職事例も多数。あなたの強みを別の文脈で活かす提案を得意としています。' },
  { q: '在職中でも相談できますか？', a: 'むしろ在職中のご相談が大多数です。平日夜・土日もご対応しております。' },
  { q: '個人情報の取り扱いは？', a: 'ご本人の同意なしに企業へ情報を共有することはありません。プライバシーマーク取得済みです。' }
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-offwhite py-24">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-600"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5] text-brand-700"
        >
          よくあるご質問。
        </motion.h2>

        <ul className="mt-12 divide-y divide-brand-100 border-y border-brand-100">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-serif text-[14px] italic font-semibold text-accent-600">Q.</span>
                    <span className="text-[14.5px] font-bold text-brand-700">{f.q}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="mt-1 text-brand-500"
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="flex items-baseline gap-3 pb-6 pl-7">
                        <p className="text-[13.5px] leading-[2] text-muted">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
