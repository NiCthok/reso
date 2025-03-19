export default function Input({ label, placeholder, type, id, onChange ,required, autoComplete}) {
  return (
    <div className=" py-1 flex flex-col justify-center">
      <label className="text-zinc-100 " htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete?autoComplete:"off"}
        name={type}
        onChange={onChange}
        required={required}
        autoCapitalize="none"
        autoCorrect="off"
        className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-800 px-4 py-3 text-sm font-medium  focus:outline-0  bg-transparent text-white placeholder:text-zinc-400"
      />
    </div>
  );
}
