function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 inline-flex w-fit rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-200">
          One-page app starter
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Ship a polished single-page app on GitHub Pages
        </h1>

        <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
          Built with React, TypeScript, Vite, and Tailwind CSS. This starter is
          optimized for static hosting and easy CI deployment.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://vite.dev/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400"
          >
            Vite Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
          >
            Tailwind Docs
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
