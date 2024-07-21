import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
  inputLabelClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputLabel, inputLabelClassName, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-3">
        {inputLabel && (
          <label
            className={cn(
              "font-raleway font-medium text-xl text-subText",
              inputLabelClassName
            )}
          >
            {inputLabel}
          </label>
        )}
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
