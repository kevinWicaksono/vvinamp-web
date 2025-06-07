// components/Button.tsx
import React from "react";

type compProps = {
  label: string;
  onclick?: () => void;
};

const TextButton: React.FC<compProps> = ({ label, onclick }) => {
  return (
    <div>
      <button
        type="button"
        className="cursor-pointer border-3 block border-amber-500 bg-amber-500 text-white text-md px-4 py-2 rounded-sm mt-4 w-full hover:bg-white hover:border-amber-500 hover:text-amber-500 focus:outline-none font-semibold"
        onClick={onclick}
      >
        {label}
      </button>
    </div>
  );
};

export default TextButton;
