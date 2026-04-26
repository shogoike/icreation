// 画像プレースホルダー（Unsplash）。採用LPテーマに沿うようキュレート済み。
// 本番は public/images/ または Cloudinary URL に差し替え。
//
// Cloudinary接続後の置換例:
//   hero: 'https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto,w_1080/icreation/hero'

const u = (id: string, w = 1080) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Slot = { src: string; label: string; alt?: string };

export const IMG: Record<string, Slot> = {
  // ヒーロー：自然光・静かなBP・後ろ姿〜横顔
  hero: { src: u('photo-1573497019940-1c28c88b4f3e', 1200), label: 'HERO', alt: '' },
  // 共感：窓辺・物思い
  concerns: { src: u('photo-1531058020387-3be344556be6', 1000), label: 'CONCERNS', alt: '' },
  // 強み:
  // 01 希望を整理する → ノート＋コーヒーの相談シーン
  strength1: { src: u('photo-1517842645767-c639042777db', 900), label: 'STRENGTH 01', alt: '' },
  // 02 合う職場を提案する → 落ち着いたオフィス窓辺
  strength2: { src: u('photo-1497366811353-6870744d04b2', 900), label: 'STRENGTH 02', alt: '' },
  // 03 入職まで伴走する → 朝の都市・通勤
  strength3: { src: u('photo-1444723121867-7a241cacace9', 900), label: 'STRENGTH 03', alt: '' },
  // アドバイザー：1人の落ち着いた人物（面談中）
  advisorMain: { src: u('photo-1494790108377-be9c29b29330', 1200), label: 'ADVISOR', alt: '' },
  // 事例：シーン写真（特定人物の煽りすぎ写真を避ける）
  case1: { src: u('photo-1517245386807-bb43f82c33c4', 900), label: 'CASE 01', alt: '' },
  case2: { src: u('photo-1483058712412-4245e9b90334', 900), label: 'CASE 02', alt: '' },
  case3: { src: u('photo-1497366216548-37526070297c', 900), label: 'CASE 03', alt: '' },
  // CTA背景：朝の自然光・静かなオフィス
  ctaBg: { src: u('photo-1497366754035-f200968a6e72', 1200), label: 'CTA BG', alt: '' }
};
