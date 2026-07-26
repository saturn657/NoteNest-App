function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-3 text-slate-600">
          {subtitle}
        </p>

        <div className="mt-8">

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;