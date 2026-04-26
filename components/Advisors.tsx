'use client';

import { motion } from 'framer-motion';

export default function Advisors() {
  return (
    <section className="relative overflow-hidden bg-pop-paper py-20">
      <div aria-hidden className="absolute inset-0 bg-halftone-blue opacity-10" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-blue px-3 py-1 font-pop text-[11px] tracking-widest text-white shadow-comic"
        >
          ＼ 担当アドバイザー ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink"
        >
          最初から最後まで、
          <br />
          <span className="marker-yellow">同じ人</span>が併走。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ type: 'spring', stiffness: 140 }}
          className="relative mt-12"
        >
          <div className="relative overflow-hidden rounded-2xl border-[3px] border-pop-ink bg-white shadow-comic-lg">
            {/* アバター部分 */}
            <div className="relative bg-pop-blue p-6">
              <div aria-hidden className="absolute inset-0 bg-halftone-white opacity-25" />
              <div className="relative flex items-center gap-4">
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border-[3px] border-pop-ink bg-pop-yellow text-[56px] shadow-comic">
                  👩‍💼
                </div>
                <div className="text-white">
                  <div className="font-pop text-[11px] text-pop-yellow drop-shadow-[1px_1px_0_#1A1A1A]">
                    Senior Advisor
                  </div>
                  <div className="mt-0.5 font-pop text-[24px] leading-tight text-stroke-ink drop-shadow-[2px_2px_0_#1A1A1A]">
                    佐藤 美咲
                  </div>
                  <div className="mt-1 text-[11px] opacity-90">キャリアコンサルタント</div>
                </div>
              </div>
              <span className="absolute -right-2 -top-2 inline-block rotate-[8deg] rounded-md border-[2px] border-pop-ink bg-pop-yellow px-2 py-0.5 font-pop text-[10px] text-pop-ink shadow-comic">
                10年選手
              </span>
            </div>

            {/* メッセージ */}
            <div className="p-5">
              <p className="font-pop text-[14.5px] leading-[1.9] text-pop-ink">
                急がせない、押しつけない。<br />
                <span className="marker-yellow">あなたのペース</span>で一緒に考えます。
              </p>
              <ul className="mt-5 space-y-2 border-t-[2px] border-dashed border-pop-ink/30 pt-4 text-[12.5px] text-pop-ink">
                <li className="flex items-center justify-between">
                  <span className="font-bold text-pop-ink/60">経歴</span>
                  <span className="font-pop">大手人材会社・10年</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-bold text-pop-ink/60">資格</span>
                  <span className="font-pop">国家資格キャリアコンサルタント</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-bold text-pop-ink/60">担当</span>
                  <span className="font-pop">IT・SaaS・スタートアップ</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
