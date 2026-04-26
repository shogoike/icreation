import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-offwhite px-6">
      <div className="text-center">
        <p className="font-serif text-[14px] italic tracking-[0.28em] text-accent-600">
          404
        </p>
        <h1 className="mt-3 font-mincho text-2xl font-extrabold text-brand-700">
          ページが見つかりません
        </h1>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-brand-700 px-6 py-3 text-[14px] font-bold text-white"
        >
          トップに戻る
        </Link>
      </div>
    </main>
  );
}
