import { ShieldCheck, Search, NotebookPen } from "lucide-react";

const features = [
  {
    icon: NotebookPen,
    title: "Smart Notes",
    description: "Create and organize notes in a clean workspace."
  },
  {
    icon: Search,
    title: "Quick Search",
    description: "Find your notes instantly with powerful search."
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description: "JWT authentication keeps your data protected."
  }
];

function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Everything You Need to Stay Productive          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A modern workspace packed with features to help you capture ideas, organize notes and focus on what matters.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-indigo-200 hover:shadow-2xl"              >

                <div className="mb-6 inline-flex rounded-2xl bg-linear-to-br from-indigo-100 to-cyan-100 p-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;