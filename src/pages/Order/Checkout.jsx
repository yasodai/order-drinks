import clsx from "clsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useOrderDispatch, SubmitAction } from "../../contexts/orders";

function Checkout({ orders, products }) {
  const dispatch = useOrderDispatch();
  const navigate = useNavigate();
  const { total, count } = Object.entries(orders).reduce(
    ({ total, count }, [name, orders]) => {
      const { price } = products.find((product) => product.name === name);
      return {
        total: total + orders.length * price,
        count: count + orders.length,
      };
    },
    { total: 0, count: 0 }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(SubmitAction(orders)).then((orders) => {
      navigate("/checkout", { state: orders });
    });
  };

  if (count <= 0) return <></>;
  return (
    <div
      className={clsx(
        "text-on-primary flex justify-between items-center",
        "border-t-8 border-primary py-4 px-8"
      )}
    >
      <div className="">
        <span className="text-4xl">${total}</span>
        <span className="">
          /{count} CUP{count > 1 && "S"}
        </span>
      </div>
      <button
        type="button"
        onClick={onSubmit}
        className={clsx(
          "flex flex-col items-center bg-primary",
          "border border-on-primary",
          "px-4 py-2"
        )}
      >
        <span className="text-xl">PLACE</span>
        <span>the order</span>
      </button>
    </div>
  );
}

export default Checkout;
