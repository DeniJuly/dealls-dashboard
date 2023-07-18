"use client";
import { FilterBrandCategory, Pagination } from "@/components";
import FilterPrice from "@/components/FilterPrice";
import Search from "@/components/Search";
import { ProductType } from "@/types";
import { formatPrice } from "@/utils/formatNumber";
import { ChangeEventHandler, useEffect, useState } from "react";

import React from "react";

const itemsPerPage = 10;
const Content = () => {
  const [allProduct, setAllProduct] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dataBrand, setDataBrand] = useState<string[]>([]);
  const [dataCategory, setDataCategory] = useState<string[]>([]);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState({
    min: 0,
    max: 0,
  });
  const getData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((res) => {
        let products: ProductType[] = res?.products;
        setLoading(false);
        setAllProduct(products);
        setDataProduct(products);
        const brands = Array.from(
          new Set(products.map((product) => product.brand))
        );
        setDataBrand(brands);
        const categorys = Array.from(
          new Set(products.map((product) => product.category))
        );
        setDataCategory(categorys);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDataProduct(
      allProduct.filter((product) => {
        const checkName =
          !search || product.title.toLowerCase().includes(search.toLowerCase());
        const checkBrand = !brand || product.brand === brand;
        const checkCategory = !category || product.category === category;
        const checkPrice =
          (!price.min || product.price >= price.min) &&
          (!price.max || product.price <= price.max);
        return checkName && checkBrand && checkCategory && checkPrice;
      })
    );
  }, [search, brand, price]);

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
  };

  const handleBrand: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;
    setBrand(value);
    setPage(1);
  };

  const handleCategory: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;
    setCategory(value);
    setPage(1);
  };

  const handlePrice: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, name },
  }) => {
    setPrice((pref) => ({
      ...pref,
      [name]: parseInt(value) <= 0 ? 0 : value,
    }));
    setPage(1);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <main className="p-4 sm:ml-64 mt-14">
      <div className="flex justify-end mt-6 gap-3 flex-wrap">
        <FilterPrice
          handleChange={handlePrice}
          max={price.max}
          min={price.min}
        />
        <FilterBrandCategory
          dataBrand={dataBrand}
          dataCategory={dataCategory}
          handleBrand={handleBrand}
          handleCategory={handleCategory}
        />
        <Search handleSearch={handleSearch} search={search} />
      </div>

      <div className="relative overflow-x-auto mt-6 sm:rounded-lg">
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
            ) : dataProduct.length <= 0 ? (
              <tr className="bg-white border-b border-b-grey-70 hover:bg-grey-60">
                <td colSpan={5} className="px-6 py-4 text-center">
                  Product is empty
                </td>
              </tr>
            ) : (
              dataProduct?.slice(startIndex, endIndex)?.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b border-b-grey-70 hover:bg-grey-60"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    {item.title}
                  </td>
                  <td className="px-6 py-4">{item.brand}</td>
                  <td className="px-6 py-4">{formatPrice(item.price)}</td>
                  <td className="px-6 py-4">{item.stock}</td>
                  <td className="px-6 py-4 capitalize">
                    {item.category?.replaceAll("-", " ")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        page={page}
        totalPage={Math.max(Math.round(dataProduct.length / itemsPerPage), 1)}
      />
    </main>
  );
};

export default Content;
