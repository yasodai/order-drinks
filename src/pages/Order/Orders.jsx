import React from "react";
import { useOrderDispatch } from "./../../contexts/orders";
import { X, Circle, Range } from "../../components";
function Order({ title, onCancel, sugar, ice, onSugarChange, onIceChange }) {
  return (
    <section className="py-4 text-primary px-2">
      <header className="flex justify-between items-center">
        <h3 className="text-on-primary text-lg">{title}</h3>
        <div className="flex items-center gap-x-2">
          <span className="text-xs">Drag to build your drink</span>
          <button
            onClick={onCancel}
            type="button"
            className="w-5 text-on-primary"
          >
            <X />
          </button>
        </div>
      </header>

      <ul>
        <li>
          <div className="flex items-center ">
            <Circle
              className="flex items-center justify-center"
              type="outline"
              size="md"
            >
              糖
            </Circle>
            <Range
              max={100}
              step={25}
              value={sugar}
              onChange={(event) => onSugarChange(Number(event.target.value))}
            />
          </div>
        </li>
        <li>
          <div className="flex items-center ">
            <Circle
              className="flex items-center justify-center"
              type="outline"
              size="md"
            >
              冰
            </Circle>
            <Range
              max={100}
              step={25}
              value={ice}
              onChange={(event) => onIceChange(Number(event.target.value))}
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
function Orders({ orders }) {
  const dispatch = useOrderDispatch();

  const orderList = Object.entries(orders)
    .map(([name, orders]) => orders.map((order) => ({ ...order, name })))
    .flat();

  const onCancel = ({ id, name }) => {
    dispatch({ type: "remove", payload: { name, id } });
  };
  const onChange = ({ name, id, sugar, ice }) => {
    dispatch({ type: "update", payload: { name, id, sugar, ice } });
  };

  return (
    <ol className="divide-y-8 divide-primary ">
      {orderList.map((order, index) => (
        <li key={order.id}>
          <Order
            title={`${index + 1}.${order.name}`}
            onCancel={() => onCancel(order)}
            sugar={order.sugar}
            onSugarChange={(sugar) => onChange({ ...order, sugar })}
            ice={order.ice}
            onIceChange={(ice) => onChange({ ...order, ice })}
          />
        </li>
      ))}
    </ol>
  );
}

export default Orders;
