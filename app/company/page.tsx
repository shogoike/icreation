import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要 | icreation 人材紹介',
  description:
    '株式会社アイクリエーションの会社概要。所在地・代表・事業内容など。'
};

const rows: { k: string; v: React.ReactNode }[] = [
  { k: '会社名', v: '株式会社アイクリエーション' },
  { k: '所在地', v: '〒870-0913 大分県大分市皆春1571-1 ぱせお1階' },
  { k: '代表者', v: '石川 翔太' },
  { k: '電話', v: '097-529-5725' },
  { k: 'FAX', v: '097-529-5728' },
  { k: '受付', v: '電話受付 9:00–18:00（平日）' },
  {
    k: '事業内容',
    v: (
      <ul className="space-y-1">
        <li>・人材紹介事業</li>
        <li>・フランチャイズ事業</li>
        <li>・美容事業（FUWARI〜ふわり〜）</li>
        <li>・子育て支援事業（LIG）</li>
        <li>・広告代理店事業（デザイン・ホームページ制作）</li>
      </ul>
    )
  },
  {
    k: '所属グループ',
    v: (
      <a
        href="https://i-japangroup.com/"
        target="_blank"
        rel="noreferrer"
        className="underline decoration-pop-yellow decoration-[3px] underline-offset-4"
      >
        アイジャパングループ
      </a>
    )
  },
  { k: '設立', v: <span className="text-pop-ink/50">準備中</span> },
  { k: '資本金', v: <span className="text-pop-ink/50">準備中</span> },
  {
    k: '有料職業紹介事業 許可番号',
    v: <span className="text-pop-ink/50">準備中</span>
  },
  {
    k: 'コーポレートサイト',
    v: (
      <a
        href="https://icreation-i.com/"
        target="_blank"
        rel="noreferrer"
        className="underline decoration-pop-yellow decoration-[3px] underline-offset-4"
      >
        icreation-i.com
      </a>
    )
  }
];

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-pop-paper pb-24">
      <div aria-hidden className="absolute inset-0 bg-halftone-blue opacity-10" />

      <div className="container-mobile relative pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-pop-ink bg-white px-3 py-1 font-pop text-[11px] text-pop-ink shadow-comic"
        >
          <ArrowLeft className="h-3 w-3" strokeWidth={3} />
          TOPへもどる
        </Link>

        <div className="mt-6 inline-block -rotate-3 rounded-full border-[3px] border-pop-ink bg-pop-blue px-3 py-1 font-pop text-[11px] tracking-widest text-white shadow-comic">
          ＼ ABOUT US ／
        </div>
        <h1 className="mt-3 font-pop text-[34px] leading-[1.15] text-pop-ink">
          わたしたちのこと、
          <br />
          <span className="marker-yellow">ちょっと紹介。</span>
        </h1>

        <section className="mt-10 overflow-hidden rounded-2xl border-[3px] border-pop-ink bg-white shadow-comic-lg">
          <div className="relative bg-pop-yellow px-5 py-4">
            <div aria-hidden className="absolute inset-0 bg-halftone-ink opacity-15" />
            <div className="relative font-pop text-[18px] text-pop-ink">
              会社概要
            </div>
          </div>
          <dl className="divide-y-[2px] divide-dashed divide-pop-ink/20">
            {rows.map((r) => (
              <div
                key={r.k}
                className="grid grid-cols-[100px_1fr] gap-3 px-5 py-4 text-[13px] leading-[1.85] text-pop-ink"
              >
                <dt className="font-pop text-[11.5px] text-pop-ink/70">
                  {r.k}
                </dt>
                <dd className="font-pop text-[13px] text-pop-ink">{r.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10 rounded-2xl border-[3px] border-pop-ink bg-pop-ink p-5 text-white shadow-comic-lg">
          <div className="inline-block -rotate-2 rounded-md border-[2px] border-pop-ink bg-pop-yellow px-2 py-0.5 font-pop text-[10px] text-pop-ink shadow-comic">
            MISSION
          </div>
          <p className="mt-3 font-pop text-[20px] leading-[1.4]">
            一人ひとりの「働く」に、
            <br />
            <span className="text-pop-yellow">ちゃんと向き合う。</span>
          </p>
          <p className="mt-3 text-[13px] leading-[1.95] text-white/85">
            年収や条件だけで決めない、納得して選べる転職を。
            求人票では見えない雰囲気や働き方まで踏まえて、
            あなたに合う一社を本気で探します。
          </p>
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            href="/#cta"
            className="rounded-full border-[3px] border-pop-ink bg-pop-red px-5 py-2.5 font-pop text-[14px] text-white shadow-comic active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            無料相談はこちら →
          </Link>
        </div>
      </div>
    </main>
  );
}
