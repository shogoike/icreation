'use client';

import Image, { ImageProps } from 'next/image';
import { Slot } from '@/lib/images';

type Props = Omit<ImageProps, 'src' | 'alt'> & {
  slot: Slot;
  alt?: string;
  showLabel?: boolean;
};

/**
 * 仮置き画像ラッパー。
 * - <Image>で画像を表示しつつ、左上に小さな「PLACEHOLDER · LABEL」バッジを重ねる
 * - 本番ではこのラッパーを <Image> に戻すか showLabel={false} に
 */
export default function PHImage({
  slot,
  alt,
  showLabel = true,
  className = '',
  ...rest
}: Props) {
  return (
    <>
      <Image src={slot.src} alt={alt ?? slot.alt ?? ''} className={className} {...rest} />
      {showLabel && (
        <span
          aria-hidden
          className="pointer-events-none absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-0.5 text-[9px] font-bold tracking-widest text-white/90 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          {slot.label}
        </span>
      )}
    </>
  );
}
