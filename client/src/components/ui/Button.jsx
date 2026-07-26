import { Link } from "react-router-dom";

function Button({
  children,
  to,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {

  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const defaultClasses =
    "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105";

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${defaultClasses} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${defaultClasses} ${className} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;