// this page is for server component
import React from 'react'
import Image from 'next/image'
import { Product } from "@/type/type";

// Function to fetch products from the API
// This function uses the fetch API to retrieve product data from a dummyjson endpoint
async function fetchProduct(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
}

// asynchronous function to fetch products from the API
// using the fetch API to get product data from the dummyjson endpoint
export default async function CardProductPage() {
  const products = await fetchProduct();

  return (
    // rendering the product cards
    <section className="w-[90%] mx-auto mt-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-[#0A2025] p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <Image
              className="mb-4 rounded"
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
              objectFit="contain"
            />
            <h3 className="text-[#0A2025] dark:text-white text-xl font-bold font-Montserrat">
              {product.title}
            </h3>
            <p className="mt-3 mb-4 text-[#0A2025] dark:text-white text-xs font-normal font-Montserrat
             line-clamp-2">
              {product.description}
            </p>
            <button className="text-[#3e9d26] text-sm font-semibold font-Montserrat hover:underline">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
