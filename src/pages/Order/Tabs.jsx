import anime from "animejs";
import clsx from "clsx";
import { equals } from "ramda";
import React from "react";
import { Link, useParams } from "react-router-dom";

function Tabs({ products }) {
  const { product } = useParams();
  const types = [...new Set(products.map(({ type }) => type))];
  const isActive = equals(product);

  return (
    <nav className=" flex flex-nowrap gap-x-2 items-end overflow-auto">
      {types.map((item) => (
        <Link
          className={clsx(
            "h-full whitespace-nowrap px-2 py-1 text-2xl",
            "ease-out-expo duration-300 border-b-2 border-primary",
            isActive(item) ? "scale-100 border-white" : "scale-75"
          )}
          style={{ transformOrigin: "50% 75%" }}
          key={item}
          to={item}
          onClick={({ target }) =>
            anime({
              targets: target.parentElement,
              scrollLeft: target.offsetLeft - 10,
              easing: "easeOutCirc",
              duration: 350,
            })
          }
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}

export default Tabs;
