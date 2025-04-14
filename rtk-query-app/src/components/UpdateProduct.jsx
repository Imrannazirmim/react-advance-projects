import React from "react";
import { useUpdateProductMutation } from "../app/services/dummyData.js";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (error) {
    return <h1>{error}</h1>;
  }
  if (isLoading) {
    return <h1>Data Loading.....</h1>;
  }

  const handlUpdateProduct = async () => {
    try {
      const updateProductData = {
        title: "Title Added New Product",
      };
      await updateProduct({
        id: productId,
        updatedProduct: updateProductData,
      });
    } catch (err) {
      console.log("Error Updating Product", err);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handlUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;
