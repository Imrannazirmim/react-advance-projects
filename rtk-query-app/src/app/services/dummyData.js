import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/products",
    }),
    getAllProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/product/add`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: (id, updatedProduct) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetAllProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;

