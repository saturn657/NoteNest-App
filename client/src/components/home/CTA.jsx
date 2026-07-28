import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="bg-linear-to-r from-indigo-600 to-violet-600 py-24">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-bold text-white">

          Ready to organize your ideas?

        </h2>

        <p className="mt-6 text-lg text-indigo-100">

          Join NoteNest today and keep every thought,
          task and idea in one secure place.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button to="/signup" className="rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 transition hover:scale-105">

            Get Started

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-indigo-700">

            Learn More

            <ArrowRight size={18}/>

          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;