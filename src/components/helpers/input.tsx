import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClasses?: string;
}

export default function Input(props: InputProps) {
  const {
    label,
    type,
    name,
    placeholder,
    children,
    onChange,
    value,
    className,
    labelClasses = "text-qgray text-[13px] font-normal",
  } = props;

  return (
    <div className="input-com h-full w-full">
      {label && (
        <label
          className={`input-label mb-2 block  capitalize ${labelClasses || ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="input-wrapper relative h-full w-full overflow-hidden border border-qgray-border ">
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input-field text-dark-gray h-full w-full bg-white px-6 text-sm font-normal placeholder:text-sm focus:outline-none focus:ring-0 ${
            className ?? ""
          }`}
          type={type}
          id={name}
        />
        {children && children}
      </div>
    </div>
  );
}
