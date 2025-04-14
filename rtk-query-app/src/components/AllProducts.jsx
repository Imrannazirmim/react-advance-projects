import React from "react";
import { useGetAllProductQuery } from "../app/services/dummyData.js";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();

  if (isError) {
    return <h1>Data Is Not Response Server</h1>;
  }
  if (isLoading) {
    return <h1>Data Loading....</h1>;
  }
  return (
    <div>
      {data?.map((product) => (
        <>
          <span key={product.id}>{product.title}</span>
          <p>{product.description}</p>
        </>
      ))}
    </div>
  );
};
export default AllProducts;
