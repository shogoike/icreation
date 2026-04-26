'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  { q: '相談だけでも使える？', a: 'もちろんOK！「転職するか決めてない」段階のご相談、むしろ歓迎です。無理な勧誘ゼロ。' },
  { q: 'お金、かかる？', a: '求職者の方は完全無料。サポート全部タダで使えます。' },
  { q: '対応エリアは？', a: '全国対応。オンライン中心、関東・関西は対面もOK。' },
  { q: '未経験の業種は無理？', a: 'ぜんぜんイケます。実際、異業種転職の事例多数。強みを別文脈で活かす提案が得意。' },
  { q: '在職中でも相談できる？', a: 'むしろ在職中が多数派。平日夜・土日も対応してます。' },
  { q: '個人情報、大丈夫？', a: '同意なしに企業へ情報を流すことは絶対にナシ。Pマーク取得済み。' }
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-pop-paper py-20">
      <div aria-hidden className="absolute inset-0 bg-halftone-red opacity-10" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-red px-3 py-1 font-pop text-[11px] tracking-widest text-white shadow-comic"
        >
          ＼ よくある質問 ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink"
        >
          みんなの<span className="marker-yellow">疑問</span>、
          <br />
          ぜんぶ答えます。
        </motion.h2>

        <ul className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <div className="rounded-2xl border-[3px] border-pop-ink bg-white shadow-comic">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-2.5">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-[2px] border-pop-ink bg-pop-red font-pop text-[12px] text-white">
                        Q
                      </span>
                      <span className="font-pop text-[14.5px] leading-tight text-pop-ink">
                        {f.q}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border-[2px] border-pop-ink bg-pop-yellow text-pop-ink"
                    >
                      <Plus className="h-3.5 w-3.5" strokeWidth={3} />
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
                        <div className="border-t-[2px] border-dashed border-pop-ink/30 px-4 pb-4 pt-3">
                          <div className="flex items-baseline gap-2.5">
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-[2px] border-pop-ink bg-pop-blue font-pop text-[12px] text-white">
                              A
                            </span>
                            <p className="text-[13.5px] leading-[1.85] text-pop-ink/85">{f.a}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
