import React from "react";
import { useGetAllProductByIdQuery } from "../app/services/dummyData.js";

const UniqueProduct = () => {
  const { data, isError, isLoading } = useGetAllProductByIdQuery(10);

  if (isError) {
    return <h1>Ohh, Not Response Server</h1>;
  }
  if (isLoading) {
    return <h1>Data Loading.....</h1>;
  }
  return (
    <div>
      <h1>{data?.brand}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
};
export default UniqueProduct;
