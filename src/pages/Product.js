import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  return (
    <div>
      <h3>{productId}번 상품 페이지입니다.</h3>
    </div>
  );
};

export default Product;
