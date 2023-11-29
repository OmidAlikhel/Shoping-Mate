import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import "../App.css";

export const Cart = () => {
  useTitle("cart");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ];
  return (
    <main>
      <section className="Cart">
        <h2 className="title-cartCard">Cart Items:{products.length}</h2>
        {products.map((product) => (
          <CartCard product={product} key={product.key} />
        ))}
      </section>
    </main>
  );
};
