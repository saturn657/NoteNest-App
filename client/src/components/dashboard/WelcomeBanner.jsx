import { Sparkles } from "lucide-react";

function WelcomeBanner() {
  return (
    <section className="mb-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">

            Welcome Back 👋

          </h1>

          <p className="mt-3 text-indigo-100">

            Organize your ideas and boost your productivity.

          </p>

        </div>

        <Sparkles size={70}/>

      </div>

    </section>
  );
}

export default WelcomeBanner;