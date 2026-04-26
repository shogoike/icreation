export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pop-ink pb-32 pt-16 text-white">
      <div aria-hidden className="absolute inset-0 bg-halftone-white opacity-15" />

      <div className="container-mobile relative">
        <div className="flex items-center gap-2">
          <span className="font-pop text-[20px] tracking-tight drop-shadow-[2px_2px_0_#E81E2C]">
            icreation
          </span>
          <span className="rounded-full bg-pop-yellow px-2 py-0.5 font-pop text-[9px] tracking-widest text-pop-ink">
            RECRUIT
          </span>
        </div>

        <p className="mt-5 text-[12px] leading-[1.9] text-white/70">
          株式会社アイクリエーション 人材紹介事業部
          <br />
          有料職業紹介事業許可番号 ◯◯-ユ-◯◯◯◯◯◯
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-y-3 border-t-[2px] border-dashed border-white/30 pt-8 font-pop text-[13px] text-white/85">
          <li><a href="/company">会社概要</a></li>
          <li><a href="#cta">お問い合わせ</a></li>
          <li><a href="/privacy">プライバシーポリシー</a></li>
          <li><a href="https://icreation-i.com/" target="_blank" rel="noreferrer">コーポレートサイト</a></li>
        </ul>

        <div className="mt-12 text-[10.5px] tracking-wider text-white/45">
          © {new Date().getFullYear()} icreation Co., Ltd.
        </div>
      </div>
    </footer>
  );
}
