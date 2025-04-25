import * as React from "react";
import { Input } from "./input";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, id, value, onChange, className, ...props }, ref) => {
    const hasValue = !!value;
    return (
      <div className="relative w-full mt-4">
        <Input
          id={id}
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`peer bg-gray-100 h-[56px] rounded-none border-0 border-b-[1px] border-b-gray-300 focus-visible:ring-0 placeholder-transparent ${className}`}
          {...props}
        />
        <label
          htmlFor={id}
          className={`
            absolute left-0 top-1/2 text-gray-500 text-sm transition-all duration-200
            -translate-y-1/2 
            ${!hasValue ? "peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0" : "kaka"}
            peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-500
            ${hasValue ? "top-1 text-sm text-gray-500 -translate-y-0" : "jaja"}
          `}
        //   className={`
        //     absolute left-0 top-1/2 text-gray-500 text-sm transition-all duration-200
        //     peer-placeholder-shown:top-[30%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        //     peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-gray-500
        //     -translate-y-1/2 peer-placeholder-shown:translate-y-0
        //   `}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export { FloatingInput }
