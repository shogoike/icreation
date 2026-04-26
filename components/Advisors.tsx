'use client';

import { motion } from 'framer-motion';
import PHImage from '@/components/PHImage';
import { IMG } from '@/lib/images';

export default function Advisors() {
  return (
    <section className="relative bg-offwhite py-24">
      <div className="container-mobile">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          className="font-serif text-[13px] italic tracking-[0.28em] text-accent-600"
        >
          Advisor
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-mincho text-[26px] font-extrabold leading-[1.5] text-brand-700"
        >
          担当者が、最初から
          <br />
          最後まで伴走します。
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.7 }}
        className="relative mt-12 aspect-[4/5] w-full overflow-hidden"
      >
        <PHImage slot={IMG.advisorMain} fill className="object-cover" sizes="480px" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-800/65 via-brand-800/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 text-white">
          <div className="font-serif text-[12px] italic tracking-[0.2em] text-accent-300">
            Senior Career Advisor
          </div>
          <div className="mt-1 font-mincho text-[22px] font-bold tracking-tight">
            佐藤 美咲
          </div>
        </div>
      </motion.div>

      <div className="container-mobile mt-10">
        <p className="font-mincho text-[15px] leading-[2.1] text-brand-700">
          転職の不安や希望を丁寧に伺い、応募前の整理から入職までサポートします。
          急がせない、押しつけない。あなたのペースで一緒に考える。それが、私たちの仕事です。
        </p>
        <ul className="mt-8 space-y-3 border-t border-brand-100 pt-6 text-[13px] text-brand-600">
          <li className="flex justify-between">
            <span className="text-muted">経歴</span>
            <span>大手人材会社・10年</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted">資格</span>
            <span>国家資格キャリアコンサルタント</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted">担当領域</span>
            <span>IT・SaaS・スタートアップ全般</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
