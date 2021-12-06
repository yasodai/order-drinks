import clsx from "clsx";
import React from "react";

export function Logo({ className }) {
  return (
    <h2
      className={clsx(
        "bg-primary text-on-primary ",
        "inline-flex flex-col justify-center items-center",
        "p-4 rounded-b",
        className
      )}
    >
      <span className="font-semibold ">LE BOBOBA</span>
      <span className="">Online System</span>
    </h2>
  );
}
