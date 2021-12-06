import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Entry from "./pages/Entry";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import { ProductProvider } from "./contexts/products";
import { OrderProvider } from "./contexts/orders";

import "./server";
function App() {
  return (
    <ProductProvider>
      <OrderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Order />}>
              <Route path=":product" element={<Order />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </OrderProvider>
    </ProductProvider>
  );
}

export default App;
