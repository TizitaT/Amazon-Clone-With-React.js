import React from "react";
import { useStateValue } from "../../dataLayer/StateProvider";
import "./product.css";
import GradeIcon from "@mui/icons-material/Grade";
const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  function truncate(str, strLength) {
    return str?.length > strLength ? str.substring(0, strLength) + "..." : str;
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{truncate(title, 70)}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <GradeIcon className="product__rating__icon" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="Amazon products" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
