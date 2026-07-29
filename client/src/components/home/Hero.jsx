import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-cyan-50">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 py-24 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1">

          <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
            🚀 Your Digital Productivity Workspace
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
            Capture Ideas.
            <br />
            Stay Organized.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Organize your notes, manage your ideas and stay productive with
            a fast, secure and modern workspace.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button to="/signup" className="flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-indigo-700">

              Get Started

              <ArrowRight size={20} />

            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold transition hover:bg-slate-100">

              <PlayCircle size={20} />
              Watch Demo
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex-1">

          <div className="rounded-3xl bg-white p-6 shadow-2xl">

            <h3 className="mb-5 text-2xl font-bold text-slate-800">
              📘 My Notes
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">

                <CheckCircle2 className="text-emerald-500" />

                <span>Complete React Project</span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">

                <CheckCircle2 className="text-emerald-500" />

                <span>Revise DSA Arrays</span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">

                <CheckCircle2 className="text-emerald-500" />

                <span>Prepare for CodeChef Contest</span>

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <div className="absolute -left-10 top-10 hidden rounded-2xl bg-white p-4 shadow-xl lg:block">

            <p className="text-sm font-semibold text-slate-700">
              📝 New Note
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Ideas are saved instantly.
            </p>

          </div>

          <div className="absolute -right-8 bottom-8 hidden rounded-2xl bg-indigo-600 p-5 text-white shadow-xl lg:block">

            <p className="text-3xl font-bold">
              120+
            </p>

            <p className="text-sm">
              Notes Created
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;