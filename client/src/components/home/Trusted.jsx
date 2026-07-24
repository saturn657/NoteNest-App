function Trusted() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Trusted by students, developers and creators
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h2 className="text-5xl font-black text-indigo-600">
              10K+
            </h2>

            <p className="mt-3 text-slate-600">
              Notes Created
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h2 className="text-5xl font-black text-indigo-600">
              5K+
            </h2>

            <p className="mt-3 text-slate-600">
              Active Users
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h2 className="text-5xl font-black text-indigo-600">
              99.9%
            </h2>

            <p className="mt-3 text-slate-600">
              Uptime
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h2 className="text-5xl font-black text-indigo-600">
              24/7
            </h2>

            <p className="mt-3 text-slate-600">
              Secure Access
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Trusted;