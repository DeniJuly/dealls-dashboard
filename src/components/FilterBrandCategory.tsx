import React, { ChangeEventHandler } from "react";

interface Props {
  handleCategory: ChangeEventHandler<HTMLSelectElement>;
  dataCategory: string[];
  handleBrand: ChangeEventHandler<HTMLSelectElement>;
  dataBrand: string[];
}
const FilterBrandCategory = ({
  dataBrand,
  dataCategory,
  handleBrand,
  handleCategory,
}: Props) => {
  return (
    <div className="flex w-full lg:w-fit">
      <div className="w-full lg:w-[180px]">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-black"
        >
          Category
        </label>
        <select
          id="category"
          onChange={handleCategory}
          className="bg-grey-60 border border-grey-70 text-black text-sm rounded-l-lg focus:ring-purple-10 focus:border-purple-10 focus-visible:outline-purple block w-full p-2.5"
        >
          <option value="">View All</option>
          {dataCategory?.map((item) => (
            <option value={item} key={item}>
              {item.replaceAll("-", " ").toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full lg:w-[180px]">
        <label
          htmlFor="brand"
          className="block mb-2 text-sm font-medium text-black"
        >
          Brand
        </label>
        <select
          id="brand"
          onChange={handleBrand}
          className="bg-grey-60 border border-grey-70 text-black text-sm rounded-r-lg focus:ring-purple-10 focus:border-purple-10 focus-visible:outline-purple block p-2.5 w-full"
        >
          <option value="">View All</option>
          {dataBrand?.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBrandCategory;
