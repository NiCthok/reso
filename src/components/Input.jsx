import { useState } from "react";

export default function Input({
  label,
  placeholder,
  type,
  id,
  onChange,
  required = false,
  autoComplete = "off",
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused("");

  return (
    <div className="relative w-full pt-4">
      <label
        htmlFor={id}
        className={`absolute left-0 text-gray-400 transition-all 
        ${
          isFocused || value
            ? "top-1 text-sm text-blue-500"
            : "top-6 text-base text-zinc-100"
        }`}
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete={autoComplete}
        required={required}
        autoCapitalize="none"
        autoCorrect="off"
        className="w-full border-0 border-b-2 border-zinc-800 bg-transparent px-2 py-3 text-white text-sm focus:outline-none focus:border-blue-500 placeholder-transparent"
      />
    </div>
  );
}