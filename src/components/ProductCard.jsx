const ProductCard = ({ image, title, subtitle, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-card__info">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__subtitle">{subtitle}</p>
        <p className="product-card__price">{price.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default ProductCard;