import React from "react";
import clsx from "clsx";

export function BlueLine({ className, children }) {
  return (
    <div
      className={clsx(
        "block w-full border border-primary bg-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
export function Circle({ type, size, className, children }) {
  return (
    <div
      className={clsx(
        "border-primary rounded-full p-0.5",
        { md: "border", lg: "border-6" }[size]
      )}
    >
      <div
        className={clsx(
          "rounded-full",
          {
            solid: "bg-primary",
            outline: "border-primary border-2",
          }[type],
          { md: "w-8 h-8", lg: "w-18 h-18" }[size],
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function Plus() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

export function Minus() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  );
}

export function X() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
