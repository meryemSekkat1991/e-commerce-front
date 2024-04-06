import React from "react";

const Products = (props) => {
  const { title, image, price, description, category } = props;

  // Assuming there's a field called "url" in the "image" object
  const imageUrl = image ? image : null;

  return (
    <div className="Card">
      <img src={imageUrl} className="card_img" alt="product_card" />
      <div className="card_body">
        <h5 className="card_title">{title}</h5>
        <p className="card_text">
          Description: {description}
        </p>
        <p className="card_text">
          Category: {category}
        </p>
        <p className="card_text">
          <del aria-hidden="true">
            <span className="woocommerce-Price-amount amount">
              ${price}&nbsp;<span className="woocommerce-Price-currencySymbol">DH</span>
            </span>
          </del>
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Products;
