'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyCta() {
  const { scrollY } = useScroll();
  const [shown, setShown] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => {
    setShown(v > 720);
  });

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={shown ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-x-0 bottom-0 z-50"
    >
      <div className="container-mobile pb-3 pt-2">
        <a
          href="#cta"
          className="flex items-center justify-between gap-3 rounded-md bg-brand-700 px-5 py-4 font-bold text-white shadow-[0_-8px_30px_rgba(11,42,74,0.18)]"
        >
          <span className="text-[14px] tracking-wide">無料で転職相談をする</span>
          <ArrowRight className="h-4 w-4 text-accent-300" />
        </a>
      </div>
    </motion.div>
  );
}
