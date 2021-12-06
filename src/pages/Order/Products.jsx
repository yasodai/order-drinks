import clsx from "clsx";
import { clamp } from "ramda";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSwipe from "../../hooks/useSwipe";
import { Number } from "../../components";
import { useOrderDispatch } from "../../contexts/orders";
import { BlueLine } from "./../../components/Shape";

function Title({ name, price }) {
  return (
    <div className="py-2">
      <h1 className="text-primary text-5xl">{name}</h1>
      <h2 className="text-on-primary text-2xl">${price}</h2>
    </div>
  );
}
function Product({ className, style, isFocus, onClick, img, name }) {
  return (
    <div
      className={clsx(
        "w-1/3 select-none",
        "duration-300 ease-out-expo",
        isFocus ? "scale-100" : "scale-60",
        className
      )}
      style={{
        willChange: "transform",
        ...style,
      }}
      onClick={onClick}
    >
      <img src={img} alt={name} draggable={false} />
    </div>
  );
}

function Products({ products, orders }) {
  const { product = "私藏古法茶" } = useParams();
  const { direction, onPressStart, onPressEnd } = useSwipe();
  const dispatch = useOrderDispatch();

  const [focus, setFocus] = useState(0);

  const display = products.filter(({ type }) => type === product);
  const name = display[focus]?.name;
  const price = display[focus]?.price;
  const value = orders[name]?.length || 0;

  useEffect(() => {
    setFocus(0);
  }, [product]);

  useEffect(() => {
    setFocus((focus) => clamp(0, display.length - 1, direction + focus));
  }, [direction]);

  const onChange = (newValue) => {
    const type = newValue - value > 0 ? "add" : "remove";
    dispatch({ type, payload: { name } });
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col  items-center py-4">
        <Title name={name} price={price} />

        <div
          className="relative w-full"
          onMouseDown={onPressStart}
          onMouseUp={onPressEnd}
          onTouchStart={onPressStart}
          onTouchEnd={onPressEnd}
        >
          <div
            className="flex flex-nowrap duration-300 transform"
            style={{
              willChange: "transform",
              "--tw-translate-x": `calc(100vw * (${1 - focus}) / 3)`,
            }}
          >
            {display.map((product, index) => (
              <Product
                key={index}
                isFocus={index === focus}
                className="flex-shrink-0"
                onClick={() => setFocus(index)}
                {...product}
              />
            ))}
          </div>
        </div>
        <nav className="flex w-full justify-center gap-x-2 py-4">
          {display.map((product, index) => (
            <button
              type="button"
              key={index}
              className={clsx(
                "bg-primary w-3 h-3 rounded-full",
                index === focus || "scale-80 opacity-50"
              )}
              onClick={() => setFocus(index)}
            ></button>
          ))}
        </nav>
        <div className="">
          <Number
            onChange={onChange}
            value={value}
            unit={`CUP${value > 1 ? "S" : ""}`}
          />
        </div>
      </div>
      <BlueLine className="mt-2 h-2"></BlueLine>
    </div>
  );
}

export default Products;
