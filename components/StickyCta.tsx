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
          className="flex items-center justify-between gap-3 rounded-2xl border-[3px] border-pop-ink bg-pop-yellow px-5 py-3.5 font-pop text-pop-ink shadow-comic-lg"
        >
          <span className="text-[14.5px] tracking-wide">無料で転職相談する</span>
          <ArrowRight className="h-4 w-4" strokeWidth={3} />
        </a>
      </div>
    </motion.div>
  );
}
