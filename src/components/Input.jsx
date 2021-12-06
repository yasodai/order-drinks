import clsx from "clsx";
import { clamp } from "ramda";
import React from "react";
import { Plus, Minus } from "./Shape";

function digits(number) {
  return (number + "").replace(".", "").length;
}
export function Number({
  value,
  unit,
  onChange,
  max = 10 ** digits(value),
  min = 0,
}) {
  return (
    <div className="bg-primary text-on-primary text-lg flex items-center px-2 py-1 space-x-2">
      <button
        onClick={() => onChange(clamp(min, max, value + 1))}
        type="button"
        className="w-8"
      >
        <Plus />
      </button>
      <div className="flex items-center">
        <input
          className="bg-transparent text-3xl text-center"
          type="number"
          value={value}
          max={max}
          min={min}
          readOnly
        />
        <span className="">{unit}</span>
      </div>
      <button
        onClick={() => onChange(clamp(min, max, value - 1))}
        type="button"
        className={clsx(
          "w-8",
          value <= min && "opacity-50 pointer-events-none"
        )}
      >
        <Minus />
      </button>
    </div>
  );
}

export function Range({ value, max, min = 0, step, onChange }) {
  return (
    <div className="relative w-full flex flex-col py-10 ">
      <div className="relative border border-primary mx-2.5  pointer-events-none">
        <div className="absolute -top-8 w-full flex  justify-between text-xs">
          <span className="-translate-x-1/2">0%</span>
          <span className="translate-x-2">50%</span>
          <span className="translate-x-1/2">100%</span>
        </div>
        <div className="absolute -top-1 w-full flex justify-between pointer-events-none">
          <div className="bg-primary w-2 h-2 rounded-full -translate-x-1/2"></div>
          <div className="border border-primary h-4 -translate-y-1 -translate-x-1"></div>
          <div className="border border-primary h-4 -translate-y-1 "></div>
          <div className="border border-primary h-4 -translate-y-1 translate-x-1"></div>
          <div className="bg-primary w-2 h-2 rounded-full translate-x-1/2"></div>
        </div>
      </div>

      <input
        className={clsx(
          "top-8 w-full bg-transparent absolute",
          "appearance-none slider-thumb"
        )}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
