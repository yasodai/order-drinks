import React, { useEffect } from "react";
import { Layout } from "./../../components/Layout";
import { useProducts } from "../../contexts/products";
import { useOrderState } from "../../contexts/orders";

import Tabs from "./Tabs";
import Products from "./Products";
import Orders from "./Orders";
import Checkout from "./Checkout";
function Order() {
  const products = useProducts();
  const orders = useOrderState();

  return (
    <Layout>
      <form className="flex flex-col">
        <header className="">
          <div className="bg-primary text-on-primary pt-1 pb-2 px-2">
            <Tabs products={products} />
          </div>
          <Products products={products} orders={orders} />
        </header>

        <main className="flex-1 ">
          <Orders orders={orders} />
        </main>
        <footer className="">
          <Checkout products={products} orders={orders} />
        </footer>
      </form>
    </Layout>
  );
}

export default Order;
