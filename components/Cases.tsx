'use client';

import { motion } from 'framer-motion';

type Case = {
  attr: string;
  before: { role: string; salary: string };
  after: { role: string; salary: string };
  quote: string;
  side: 'salary' | 'worklife';
  emoji: string;
};

const cases: Case[] = [
  {
    attr: '20代後半 / 営業',
    before: { role: '人材派遣営業', salary: '420万' },
    after: { role: 'ITスタートアップ・CS', salary: '560万' },
    quote: '条件だけじゃなくて、働き方まで整理できた。',
    side: 'worklife',
    emoji: '🚀'
  },
  {
    attr: '30代前半 / 事務',
    before: { role: '医療事務', salary: '350万' },
    after: { role: 'SaaSカスタマーサクセス', salary: '480万' },
    quote: '押しつけ感がなくて自分のペースで進めた。',
    side: 'salary',
    emoji: '💡'
  },
  {
    attr: '30代後半 / 販売',
    before: { role: '販売職・店長', salary: '450万' },
    after: { role: '人材コンサル・マネージャー', salary: '620万' },
    quote: '強みを言語化してくれて、自信を持って面接に。',
    side: 'salary',
    emoji: '🏆'
  }
];

export default function Cases() {
  return (
    <section className="relative overflow-hidden bg-pop-cream py-20">
      <div aria-hidden className="absolute inset-0 bg-halftone-red opacity-10" />

      <div className="container-mobile relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-pop-red px-3 py-1 font-pop text-[11px] tracking-widest text-white shadow-comic"
        >
          ＼ ガチ事例 ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink"
        >
          こんな転職、
          <br />
          <span className="marker-red">叶ってます。</span>
        </motion.h2>
        <p className="mt-2 text-[11.5px] font-bold text-pop-ink/60">
          ※プライバシー保護のため一部内容を変更
        </p>
      </div>

      <div className="container-mobile mt-12 space-y-8">
        {cases.map((c, i) => {
          const tilt = i % 2 === 0 ? '-rotate-1' : 'rotate-1';
          const cardBg = c.side === 'salary' ? 'bg-pop-red' : 'bg-pop-blue';
          return (
            <motion.article
              key={c.attr + i}
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 140 }}
              className={`relative ${tilt}`}
            >
              <div className="relative overflow-hidden rounded-2xl border-[3px] border-pop-ink bg-white shadow-comic-lg">
                {/* ヘッダー */}
                <div className={`relative ${cardBg} p-4 text-white`}>
                  <div aria-hidden className="absolute inset-0 bg-halftone-white opacity-20" />
                  <div className="relative flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border-[3px] border-pop-ink bg-white text-[24px] shadow-comic">
                      {c.emoji}
                    </span>
                    <div>
                      <div className="font-pop text-[11px] text-pop-yellow drop-shadow-[1px_1px_0_#1A1A1A]">
                        Case {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="font-pop text-[16px]">{c.attr}</div>
                    </div>
                    <span className="ml-auto rotate-[6deg] rounded-md border-[2px] border-pop-ink bg-pop-yellow px-2 py-0.5 font-pop text-[10px] text-pop-ink shadow-comic">
                      {c.side === 'salary' ? '年収UP↑' : '働き方UP↑'}
                    </span>
                  </div>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 p-4">
                  <div className="rounded-xl border-[2px] border-pop-ink bg-pop-paper p-3">
                    <div className="font-pop text-[10px] text-pop-ink/60">Before</div>
                    <div className="mt-1 text-[11px] text-pop-ink/80">{c.before.role}</div>
                    <div className="mt-1.5 font-pop text-[20px] leading-none text-pop-ink/70 line-through decoration-pop-red decoration-[3px]">
                      {c.before.salary}
                    </div>
                  </div>
                  <span className="font-pop text-[28px] text-pop-red animate-bounce-pop">→</span>
                  <div className="rounded-xl border-[3px] border-pop-ink bg-pop-yellow p-3 shadow-comic">
                    <div className="font-pop text-[10px] text-pop-ink">After</div>
                    <div className="mt-1 text-[11px] text-pop-ink">{c.after.role}</div>
                    <div className="mt-1.5 font-pop text-[22px] leading-none text-pop-red drop-shadow-[1px_1px_0_#1A1A1A]">
                      {c.after.salary}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="border-t-[3px] border-pop-ink bg-pop-paper p-4">
                  <p className="font-pop text-[14px] leading-[1.7] text-pop-ink">
                    <span className="text-pop-red">「</span>{c.quote}<span className="text-pop-red">」</span>
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
