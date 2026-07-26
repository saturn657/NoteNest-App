import { UserPlus, NotebookPen, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create an Account",
    description: "Sign up securely and access your workspace from anywhere."
  },
  {
    icon: NotebookPen,
    title: "Create Notes",
    description: "Write, edit and organize your notes effortlessly."
  },
  {
    icon: Rocket,
    title: "Stay Productive",
    description: "Manage your ideas and never lose an important thought."
  }
];

function HowItWorks() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Get started in just three simple steps.
          </p>

        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">

          {steps.map((step,index)=>{

            const Icon=step.icon;

            return(

              <div
                key={index}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white">

                  <Icon size={32}/>

                </div>

                <h3 className="text-2xl font-semibold text-slate-900">

                  {step.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-600">

                  {step.description}

                </p>

                <div className="absolute right-6 top-6 text-6xl font-black text-slate-100">

                  0{index+1}

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;