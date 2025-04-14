import React from "react";
import { useDeleteProductMutation } from "../app/services/dummyData.js";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();
  if (error) {
    return <h1>{error}</h1>;
  }
  if (isLoading) {
    return <h1>Data Loading....</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.log("Not Delete Product", err);
    }
  };

  return (
    <div>
      <h1>{data?.title ? `${data.title} successful Delete` : ""}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};
export default DeleteProduct;
