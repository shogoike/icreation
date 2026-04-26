import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | icreation 人材紹介',
  description:
    '株式会社アイクリエーションの個人情報保護方針（プライバシーポリシー）です。'
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. 基本方針',
    body: (
      <p>
        株式会社アイクリエーション（以下「当社」）は、人材紹介サービスの提供にあたり、
        ご利用者・求職者・取引先の個人情報を適切に取り扱うことが社会的責務であると認識し、
        個人情報の保護に関する法律その他関係法令を遵守し、本ポリシーに基づいて取り扱います。
      </p>
    )
  },
  {
    title: '2. 取得する個人情報',
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>氏名、生年月日、性別、住所、電話番号、メールアドレスなどの連絡先情報</li>
        <li>学歴・職歴・資格・スキル・希望条件などの転職活動に関する情報</li>
        <li>面談・選考過程で取得する内容、応募書類の記載事項</li>
        <li>当ウェブサイトの閲覧情報（Cookie・アクセスログ等）</li>
      </ul>
    )
  },
  {
    title: '3. 利用目的',
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>人材紹介サービス（求人紹介・選考支援・条件交渉）の提供</li>
        <li>ご本人の同意のうえでの、求人企業への情報提供</li>
        <li>サービスに関するご連絡、アンケート、各種情報のご案内</li>
        <li>サービス品質の向上、新サービス開発のための分析</li>
        <li>法令に基づく対応、不正利用の防止</li>
      </ul>
    )
  },
  {
    title: '4. 第三者提供',
    body: (
      <p>
        当社は、ご本人の同意を得ずに個人情報を第三者へ提供することはありません。
        ただし、法令に基づく場合、または人の生命・身体・財産の保護のために必要があり、
        ご本人の同意を得ることが困難な場合はこの限りではありません。
      </p>
    )
  },
  {
    title: '5. 委託',
    body: (
      <p>
        利用目的の達成に必要な範囲で、個人情報の取り扱いを外部に委託する場合があります。
        その際は、十分な保護水準を備えた委託先を選定し、契約等により適切な管理を行います。
      </p>
    )
  },
  {
    title: '6. 安全管理',
    body: (
      <p>
        当社は、個人情報の漏えい、滅失または毀損を防止するため、
        組織的・人的・物理的・技術的な安全管理措置を講じます。
        従業員に対しても継続的な教育を行い、適切な取り扱いを徹底します。
      </p>
    )
  },
  {
    title: '7. 開示・訂正・削除等のご請求',
    body: (
      <p>
        ご本人から個人情報の開示・訂正・追加・削除・利用停止・第三者提供の停止等のご請求があった場合、
        ご本人であることを確認のうえ、合理的な範囲で速やかに対応いたします。
        お問い合わせ窓口までご連絡ください。
      </p>
    )
  },
  {
    title: '8. Cookie等の利用',
    body: (
      <p>
        当ウェブサイトでは、サービス品質向上およびアクセス解析のためにCookieを利用することがあります。
        Cookieの使用はブラウザの設定により無効化できますが、その場合一部機能がご利用いただけない可能性があります。
      </p>
    )
  },
  {
    title: '9. 改定',
    body: (
      <p>
        当社は、法令の変更やサービス内容の見直し等に応じて、本ポリシーを改定することがあります。
        改定後のポリシーは当ウェブサイトに掲載した時点で効力を生じます。
      </p>
    )
  },
  {
    title: '10. お問い合わせ窓口',
    body: (
      <div className="space-y-1">
        <div>株式会社アイクリエーション 個人情報保護担当</div>
        <div>〒870-0913 大分県大分市皆春1571-1 ぱせお1階</div>
        <div>TEL: 097-529-5725（受付：平日 9:00–18:00）</div>
      </div>
    )
  }
];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-pop-paper pb-24">
      <div aria-hidden className="absolute inset-0 bg-halftone-red opacity-10" />

      <div className="container-mobile relative pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-pop-ink bg-white px-3 py-1 font-pop text-[11px] text-pop-ink shadow-comic"
        >
          <ArrowLeft className="h-3 w-3" strokeWidth={3} />
          TOPへもどる
        </Link>

        <div className="mt-6 inline-block -rotate-3 rounded-full border-[3px] border-pop-ink bg-pop-red px-3 py-1 font-pop text-[11px] tracking-widest text-white shadow-comic">
          ＼ PRIVACY POLICY ／
        </div>
        <h1 className="mt-3 font-pop text-[30px] leading-[1.2] text-pop-ink">
          プライバシー
          <br />
          <span className="marker-yellow">ポリシー</span>
        </h1>

        <p className="mt-6 text-[12.5px] leading-[1.95] text-pop-ink/80">
          制定日：2025年4月1日 / 最終改定：2026年4月1日
        </p>

        <div className="mt-8 space-y-5">
          {sections.map((s) => (
            <section
              key={s.title}
              className="rounded-2xl border-[3px] border-pop-ink bg-white p-5 shadow-comic"
            >
              <h2 className="font-pop text-[16px] leading-tight text-pop-ink">
                {s.title}
              </h2>
              <div className="mt-3 text-[13px] leading-[1.95] text-pop-ink/85">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="rounded-full border-[3px] border-pop-ink bg-pop-yellow px-5 py-2.5 font-pop text-[14px] text-pop-ink shadow-comic active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            TOPへもどる
          </Link>
        </div>
      </div>
    </main>
  );
}
