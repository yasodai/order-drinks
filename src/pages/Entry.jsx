import React from "react";
import { Link } from "react-router-dom";
import { Layout, Logo, Circle } from "./../components";

function Entry() {
  return (
    <Layout className="flex flex-col">
      <header className="flex justify-center z-10">
        <Logo />
      </header>
      <main className="flex-1 flex flex-col">
        <h1 className="text-primary text-center font-semibold text-7xl mt-16">
          LE BOBOBA
        </h1>
        <div className="flex justify-center mt-52">
          <Link to="/products">
            <Circle
              className="text-on-primary flex items-center text-center text-lg leading-5"
              type="solid"
              size="lg"
            >
              Order Now
            </Circle>
          </Link>
        </div>
      </main>

      <footer className="text-primary text-lg flex justify-center py-4 ">
        <p>Traditional Flavor - Classic Heritage</p>
      </footer>
    </Layout>
  );
}

export default Entry;
