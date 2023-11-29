import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="cartcard">
      <img src={image} alt="headphone" />
      <p className="productname">{name}</p>
      <span className="productprice">${price}</span>
      <button>Remove</button>
    </div>
  );
};
