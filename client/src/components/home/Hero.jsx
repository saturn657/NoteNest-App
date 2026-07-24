import { ArrowRight, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            🚀 Organize your life smarter
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Capture Ideas.
            <br />
            Stay Organized.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600">
            NoteNest helps you organize thoughts, manage notes,
            and stay productive with a beautiful, fast and secure workspace.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white transition hover:bg-indigo-700">

              Get Started

              <ArrowRight size={20} />

            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">

              <PlayCircle size={20} />

              Watch Demo

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;