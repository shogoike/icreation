'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IMG, Slot } from '@/lib/images';
import PHImage from '@/components/PHImage';

type Case = {
  attr: string;
  before: { role: string; salary: string };
  after: { role: string; salary: string };
  quote: string;
  img: Slot;
};

const cases: Case[] = [
  {
    attr: '20代後半 / 営業',
    before: { role: '人材派遣営業', salary: '420万円' },
    after: { role: 'ITスタートアップ・CS', salary: '560万円' },
    quote: '前職での悩みを丁寧に聞いてもらえたことで、条件だけでなく働き方まで整理できました。',
    img: IMG.case1
  },
  {
    attr: '30代前半 / 事務',
    before: { role: '医療事務', salary: '350万円' },
    after: { role: '医療系SaaS・カスタマーサクセス', salary: '480万円' },
    quote: '求人を押しつけられる感じがなく、自分のペースで相談できたのが安心でした。',
    img: IMG.case2
  },
  {
    attr: '30代後半 / 販売',
    before: { role: '販売職・店長', salary: '450万円' },
    after: { role: '人材コンサル・マネージャー', salary: '620万円' },
    quote: '経験の言語化を一緒にやってくれて、自信を持って面接に臨めました。',
    img: IMG.case3
  }
];

export default function Cases() {
  return (
    <section className="relative bg-cream py-24">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-600"
        >
          Cases
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5] text-brand-700"
        >
          ご利用者の事例。
        </motion.h2>
        <p className="mt-2 text-[12px] text-muted">
          ※プライバシー保護のため一部内容を変更しています
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {cases.map((c, i) => (
          <motion.article
            key={c.attr + i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden">
              <PHImage slot={c.img} fill className="object-cover" sizes="480px" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-800/70 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 text-white">
                <span className="font-serif text-[12px] italic tracking-[0.2em] text-accent-300">
                  Case 0{i + 1}
                </span>
                <p className="mt-1 text-[14px] tracking-wide">{c.attr}</p>
              </div>
            </div>

            <div className="container-mobile mt-7">
              <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
                <div>
                  <div className="font-serif text-[10px] italic tracking-[0.25em] text-muted">
                    Before
                  </div>
                  <div className="mt-1 text-[12px] leading-tight text-muted">
                    {c.before.role}
                  </div>
                  <div className="mt-1.5 font-serif text-[22px] font-extrabold italic text-brand-600">
                    {c.before.salary}
                  </div>
                </div>
                <ArrowRight className="mb-2 h-4 w-4 text-accent-600" />
                <div>
                  <div className="font-serif text-[10px] italic tracking-[0.25em] text-accent-600">
                    After
                  </div>
                  <div className="mt-1 text-[12px] leading-tight text-brand-700">
                    {c.after.role}
                  </div>
                  <div className="mt-1.5 font-serif text-[22px] font-extrabold italic text-accent-600">
                    {c.after.salary}
                  </div>
                </div>
              </div>

              <blockquote className="mt-7 border-l-2 border-accent-500 pl-4 font-mincho text-[14.5px] leading-[2] text-brand-700">
                {c.quote}
              </blockquote>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
