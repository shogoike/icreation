export default function Footer() {
  return (
    <footer className="bg-brand-800 pb-28 pt-16 text-white">
      <div className="container-mobile">
        <div className="font-serif text-base font-extrabold italic tracking-tight">
          icreation
        </div>

        <p className="mt-5 text-[12px] leading-[2] text-white/65">
          株式会社アイクリエーション 人材紹介事業部
          <br />
          有料職業紹介事業許可番号 ◯◯-ユ-◯◯◯◯◯◯
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-y-3 border-t border-white/15 pt-8 text-[12.5px] text-white/80">
          <li><a href="https://icreation-i.com/" target="_blank" rel="noreferrer">会社概要</a></li>
          <li><a href="#cta">お問い合わせ</a></li>
          <li><a href="#">プライバシーポリシー</a></li>
          <li><a href="#">利用規約</a></li>
        </ul>

        <div className="mt-12 text-[10.5px] tracking-wider text-white/45">
          © {new Date().getFullYear()} icreation Co., Ltd.
        </div>
      </div>
    </footer>
  );
}
