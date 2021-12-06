import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../components";
import { Logo } from "./../components/Logo";

function Checkout() {
  const location = useLocation();
  const orders = location.state;
  return (
    <Layout className="flex flex-col">
      <header className="flex justify-center">
        <Logo />
      </header>

      <main className="px-8">
        <div className="text-primary py-4">
          <h1 className="text-6xl">Thank you</h1>
          <h2 className="text-2xl">for your purchase</h2>
        </div>
        <div className="text-on-primary flex divide-x divide-primary">
          <div className="flex-1">
            <ol className="space-y-4">
              {orders.items.map(({ name, sugar, ice }, index) => (
                <li key={name + index} className="">
                  <h3 className="text-lg">
                    {index + 1}. {name}
                  </h3>
                  <p className="text-primary text-xs">
                    Sugar {sugar}%, Ice {ice}%
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="text-4xl">${orders.price}</h2>
            <p className="w-full flex justify-end">
              /{orders.items.length} CUP{orders.items.length > 1 && "S"}
            </p>
          </div>
        </div>
      </main>

      <footer className="px-8 py-4 mt-6">
        <button className="w-full bg-primary text-on-primary px-4 py-2 border-2 border-on-primary text-xl">
          SHARE THE PURCHASE
        </button>
      </footer>
    </Layout>
  );
}

export default Checkout;
