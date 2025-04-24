import { twMerge } from "tailwind-merge";

export default function Button({ children, className }) {
  return (
    <button
      className={twMerge(
        "py-3 px-6 bg-black text-whitesmoke font-inter tracking-tight cursor-pointer rounded-full border border-transparent hover:bg-transparent hover:border-night hover:text-night duration-300",
        className
      )}
    >
      {children}
    </button>
  );
}
