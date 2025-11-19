import React from "react";
import "./Input.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onFocusChange"
> & {
  isFocused?: boolean;
  onFocusChange?: (isFocused: boolean) => void;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ isFocused, onFocusChange, className, ...props }, ref) => {
    const focusedClass = isFocused ? "input--focused" : "";
    const finishedClassName = `${focusedClass} ${className || ""}`;
    // onFocusChange исключается из пропсов, которые попадают в DOM
    return <input ref={ref} {...props} className={finishedClassName} />;
  },
);

Input.displayName = "Input";

export default Input;
