"use client";
import { Pagination } from "@/components";
import { ProductType } from "@/types";
import { formatRupiah } from "@/utils/formatNumber";
import { ChangeEventHandler, useEffect, useState } from "react";

import React from "react";

const itemsPerPage = 10;
const Home = () => {
  const [allProduct, setAllProduct] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const getData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setAllProduct(res.products);
        setDataProduct(res.products);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePrev = () => {
    setPage((pref) => pref - 1);
  };

  const handleNext = () => {
    setPage((pref) => pref + 1);
  };

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setSearch(value);
    setPage(1);
    setDataProduct(
      allProduct.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <main className="p-4 sm:ml-64 mt-14">
      <div className="flex justify-end mt-6">
        <input
          name="search"
          type="text"
          className="bg-grey-60 border border-grey-70 text-black text-sm rounded-lg focus:ring-purple-10 focus:border-purple-10 focus-visible:outline-purple block p-2.5 w-full max-w-xs"
          placeholder="Search Product..."
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-black uppercase bg-grey-60">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="bg-white border-b border-b-grey-70 hover:bg-grey-60">
                <td
                  colSpan={5}
                  className="px-6 py-4 font-medium text-black whitespace-nowrap text-center"
                >
                  Loading...
                </td>
              </tr>
            ) : (
              dataProduct?.slice(startIndex, endIndex)?.map((item) => (
                <tr className="bg-white border-b border-b-grey-70 hover:bg-grey-60">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    {item.title}
                  </td>
                  <td className="px-6 py-4">{item.brand}</td>
                  <td className="px-6 py-4">{formatRupiah(item.price)}</td>
                  <td className="px-6 py-4">{item.stock}</td>
                  <td className="px-6 py-4 capitalize">
                    {item.category?.replaceAll("-", " ")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          page={page}
          totalPage={Math.max(Math.round(dataProduct.length / itemsPerPage), 1)}
        />
      </div>
    </main>
  );
};

export default Home;
