// components/Button.tsx
import React from "react";

type compProps = {
  id: string;
  type?: string;
  label: string;
  placeholder: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<compProps> = ({
  id,
  type,
  label,
  placeholder,
  onchange,
}) => {
  return (
    <div className="mt-2">
      <label
        htmlFor={id}
        className="text-base text-gray-600 text-sm block mb-1"
      >
        {label}
      </label>
      <input
        type={type ?? "text"}
        id={id}
        placeholder={placeholder}
        className="placeholder-gray-200 border border-gray-200 text-sm text-base text-black w-full px-2 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 hover:border-amber-500 focus:ring-amber-500"
        onChange={onchange}
      />
    </div>
  );
};

export default TextField;
