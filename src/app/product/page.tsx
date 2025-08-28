// this page is for server component
import React from 'react'
import { Product } from "@/type/type";
import { Suspense } from 'react';
import ProductSearch from './ProductSearch';

// Function to fetch products from the API
// This function uses the fetch API to retrieve product data from a dummyjson endpoint
async function fetchProduct(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}product`);
  const data = await res.json();
  return data.products;
}

// asynchronous function to fetch products from the API
// using the fetch API to get product data from the dummyjson endpoint
export default async function CardProductPage() {
  const products = await fetchProduct();

  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductSearch products={products} />
    </Suspense>
  );
}
