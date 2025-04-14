import React from "react";
import { useAddNewProductMutation } from "../app/services/dummyData.js";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isError) {
    return <h1>Data Not Response My Server</h1>;
  }
  if (isLoading) {
    return <h1>Data Loading.....</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing Computer",
        description: "This is one of the most popular computer in the world",
      };
      await addNewProduct(newProductData);
    } catch (err) {
      console.error("Error adding new Product", err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};
export default AddNewProduct;
