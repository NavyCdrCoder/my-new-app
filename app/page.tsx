export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        Pipeline verified ✓
      </h1>
      <p className="mt-4 text-lg text-zinc-400 sm:text-xl">
        Claude Code → GitHub → Vercel
      </p>
    </main>
  );
}
