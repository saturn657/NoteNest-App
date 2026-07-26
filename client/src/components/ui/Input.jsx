function Input({
  label,
  type="text",
  placeholder,
  value,
  onChange,
  name,
}) {

  return(

    <div className="mb-5">

      <label className="mb-2 block font-medium text-slate-700">

        {label}

      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />

    </div>

  );

}

export default Input;