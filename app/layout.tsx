import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Shippori_Mincho_B1, Fraunces, RocknRoll_One } from 'next/font/google';
import './globals.css';

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto',
  display: 'swap'
});
const zen = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-zen',
  display: 'swap'
});
const mincho = Shippori_Mincho_B1({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-mincho',
  display: 'swap'
});
const serif = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap'
});
const pop = RocknRoll_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pop',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'icreation 人材紹介 | あなたの一歩に、寄り添う転職サポート',
  description:
    'icreationの人材紹介サービス。月30名のご紹介実績、利用者の80%が満足。業種を問わず、あなたのキャリアに誠実に向き合います。',
  openGraph: {
    title: 'icreation 人材紹介',
    description: 'あなたの一歩に、寄り添う転職サポート',
    type: 'website'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#E81E2C'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${noto.variable} ${zen.variable} ${mincho.variable} ${serif.variable} ${pop.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
