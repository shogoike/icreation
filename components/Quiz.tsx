'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, RotateCcw } from 'lucide-react';

type Side = 'salary' | 'worklife';

const questions: { q: string; a: { label: string; side: Side }; b: { label: string; side: Side } }[] = [
  {
    q: 'ぶっちゃけ、どっちが嬉しい？',
    a: { label: '年収+100万円', side: 'salary' },
    b: { label: '残業ゼロ', side: 'worklife' }
  },
  {
    q: '理想の朝といえば？',
    a: { label: '気合いで早出', side: 'salary' },
    b: { label: 'ゆっくりコーヒー', side: 'worklife' }
  },
  {
    q: '転職で一番譲れないのは？',
    a: { label: 'やりがい・成長', side: 'salary' },
    b: { label: '人間関係・余白', side: 'worklife' }
  }
];

const results = {
  salary: {
    label: '年収重視派',
    color: 'red' as const,
    icon: '/images/icons/money.png',
    catch: 'バリバリ稼ぐ派！',
    desc: '年収・成長・裁量。あなたには「攻めの転職」がハマる求人を厳選してご紹介します。'
  },
  worklife: {
    label: '働き方重視派',
    color: 'blue' as const,
    icon: '/images/icons/nature.png',
    catch: 'のびのび働く派！',
    desc: '残業・人間関係・通勤。求人票では分からない「中の空気」まで踏まえて提案します。'
  }
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({ salary: 0, worklife: 0 });

  const finished = step >= questions.length;
  const winner: Side =
    score.salary === score.worklife
      ? 'salary'
      : score.salary > score.worklife
      ? 'salary'
      : 'worklife';
  const result = results[winner];

  const choose = (side: Side) => {
    setScore((s) => ({ ...s, [side]: s[side] + 1 }));
    setStep((n) => n + 1);
  };

  const reset = () => {
    setStep(0);
    setScore({ salary: 0, worklife: 0 });
  };

  return (
    <section id="quiz" className="relative overflow-hidden bg-pop-yellow py-16">
      {/* 集中線 */}
      <div aria-hidden className="absolute inset-0 bg-radial-burst-yellow opacity-40" />

      <div className="container-mobile relative">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="inline-block rounded-full border-[3px] border-pop-ink bg-white px-3 py-1 font-pop text-[11px] tracking-widest text-pop-ink shadow-comic"
        >
          ＼ 30秒診断 ／
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.1 }}
          className="mt-3 font-pop text-[32px] leading-[1.2] text-pop-ink"
        >
          あなたの<span className="marker-red">転職タイプ</span>、
          <br />
          一発で当てます。
        </motion.h2>
        <p className="mt-3 text-[12.5px] font-bold text-pop-ink/80">
          ※ 当てます（外しません）
        </p>

        {/* ステップ */}
        <div className="mt-8 flex items-center gap-2">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-2 flex-1 rounded-full border-2 border-pop-ink ${
                step > i ? 'bg-pop-red' : 'bg-white'
              }`}
            />
          ))}
        </div>

        {/* カード */}
        <div className="relative mt-6 min-h-[280px]">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -20, rotate: 2 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border-[3px] border-pop-ink bg-white p-5 shadow-comic-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-pop-ink bg-pop-yellow font-pop text-[14px] text-pop-ink">
                    Q{step + 1}
                  </span>
                  <span className="text-[11px] font-bold text-pop-ink/60">
                    {step + 1} / {questions.length}
                  </span>
                </div>
                <p className="mt-4 font-pop text-[20px] leading-[1.4] text-pop-ink">
                  {questions[step].q}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    onClick={() => choose(questions[step].a.side)}
                    className="group flex items-center justify-between rounded-xl border-[3px] border-pop-ink bg-pop-red px-4 py-4 font-pop text-white shadow-comic active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  >
                    <span className="flex items-center gap-2 text-[15px]">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-pop-red">A</span>
                      {questions[step].a.label}
                    </span>
                    <ArrowRight className="h-4 w-4" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    onClick={() => choose(questions[step].b.side)}
                    className="group flex items-center justify-between rounded-xl border-[3px] border-pop-ink bg-pop-blue px-4 py-4 font-pop text-white shadow-comic active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  >
                    <span className="flex items-center gap-2 text-[15px]">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-pop-blue">B</span>
                      {questions[step].b.label}
                    </span>
                    <ArrowRight className="h-4 w-4" strokeWidth={3} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 180 }}
                className={`relative overflow-hidden rounded-2xl border-[3px] border-pop-ink p-6 shadow-comic-lg ${
                  result.color === 'red' ? 'bg-pop-red text-white' : 'bg-pop-blue text-white'
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 opacity-30 ${
                    result.color === 'red' ? 'bg-halftone-white' : 'bg-halftone-white'
                  }`}
                />
                <div className="relative">
                  <div className="inline-block rotate-[-4deg] rounded-md bg-pop-yellow px-2 py-0.5 font-pop text-[10px] text-pop-ink shadow-comic">
                    診断結果
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border-[3px] border-pop-ink bg-white shadow-comic">
                      <Image
                        src={result.icon}
                        alt=""
                        width={160}
                        height={160}
                        className="h-[58px] w-[58px] object-contain"
                      />
                    </span>
                    <div>
                      <div className="font-pop text-[14px] text-pop-yellow drop-shadow-[2px_2px_0_#1A1A1A]">
                        あなたは…
                      </div>
                      <div className="font-pop text-[28px] leading-tight text-stroke-ink drop-shadow-[3px_3px_0_#1A1A1A]">
                        {result.label}！
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 font-pop text-[18px] leading-tight">{result.catch}</p>
                  <p className="mt-3 text-[13.5px] leading-[1.9]">{result.desc}</p>

                  <div className="mt-5 flex flex-col gap-2">
                    <a
                      href="#cta"
                      className="flex items-center justify-between gap-3 rounded-xl border-[3px] border-pop-ink bg-pop-yellow px-4 py-3.5 font-pop text-pop-ink shadow-comic active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                      <span className="text-[15px]">この派の求人を見る</span>
                      <ArrowRight className="h-5 w-5" strokeWidth={3} />
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="flex items-center justify-center gap-2 rounded-xl border-[2px] border-white/70 px-4 py-2.5 text-[12px] font-bold text-white/90"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      もう一度診断する
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
