"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const HeaveyComp = dynamic(() => import("../../components/HeaveyComp"), {
  loading: () => <p>Loading...</p>,
});

const LazyLoading = () => {
  const session = null;
  useEffect(() => {
    if (!session) {
      throw new Error("Must be login to access resources");
    }
  }, [session]);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Speed up your Website with Next.js Dynamic Import Lazy Loading
            </h1>
            <HeaveyComp />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LazyLoading;
