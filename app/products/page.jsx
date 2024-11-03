"use client";

import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
const Products = () => {
  const { data } = useFetch("https://fakestoreapi.com/products");

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data &&
            data.slice(0, 6).map((_, index) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
                <Link
                  href={`/products/${index}`}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                    width={350}
                    height={250}
                    priority
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
