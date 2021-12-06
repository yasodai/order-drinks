import clsx from "clsx";
import React from "react";
import { BlueLine } from "./Shape";

export function Layout({ className, children }) {
  return (
    <div className="overflow-hidden relative">
      <div className="h-screen bg-background font-heiti py-4 flex flex-col overflow-auto">
        <div className="space-y-2">
          <BlueLine className="border-b-4" />
          <BlueLine className="border-b-8" />
        </div>

        <div className={clsx("flex-1", className)}>{children}</div>

        <div className="space-y-2">
          <BlueLine className="border-b-8" />
          <BlueLine className="border-b-4" />
        </div>
      </div>
    </div>
  );
}
