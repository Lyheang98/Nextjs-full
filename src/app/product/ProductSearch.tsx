'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Product } from "@/type/type";

interface ProductSearchProps {
  products: Product[];
}

export default function ProductSearch({ products }: ProductSearchProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  if (filteredProducts.length === 0 && searchQuery) {
    return (
      <section className="w-[90%] mx-auto mt-10 py-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No products found for "{searchQuery}"
          </h2>
          <p className="text-gray-600 mb-8">
            Try searching for different keywords or browse all products.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product: Product) => (
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
                <p className="mt-3 mb-4 text-[#0A2025] dark:text-white text-xs font-normal font-Montserrat line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <span className="text-[#3e9d26] font-bold">
                    ${product.price}
                  </span>
                  <button className="text-[#3e9d26] text-sm font-semibold font-Montserrat hover:underline">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-[90%] mx-auto mt-10 py-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-[#0A2025] p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
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
            <p className="mt-3 mb-4 text-[#0A2025] dark:text-white text-xs font-normal font-Montserrat line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between w-full mt-auto">
              <span className="text-[#3e9d26] font-bold">
                ${product.price}
              </span>
              <button className="text-[#3e9d26] text-sm font-semibold font-Montserrat hover:underline">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
