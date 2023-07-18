import React, { ChangeEventHandler } from "react";

interface Props {
  min: number;
  max: number;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}
const FilterPrice = ({ handleChange, max, min }: Props) => {
  return (
    <div className="flex w-full lg:w-fit">
      <div className="w-full lg:max-w-[180px]">
        <label
          htmlFor="min"
          className="block mb-2 text-sm font-medium text-black"
        >
          Min Price
        </label>
        <input
          value={min || ""}
          onChange={handleChange}
          id="min"
          name="min"
          type="number"
          className="bg-grey-60 border border-grey-70 text-black text-sm rounded-l-lg focus:ring-purple-10 focus:border-purple-10 focus-visible:outline-purple block p-2.5 w-full"
          placeholder="ex: $0"
        />
      </div>
      <div className="w-full lg:max-w-[180px]">
        <label
          htmlFor="max"
          className="block mb-2 text-sm font-medium text-black"
        >
          Max Price
        </label>
        <input
          value={max || ""}
          onChange={handleChange}
          id="max"
          name="max"
          type="number"
          className="bg-grey-60 border border-grey-70 text-black text-sm rounded-r-lg focus:ring-purple-10 focus:border-purple-10 focus-visible:outline-purple block p-2.5 w-full"
          placeholder="ex: $100"
        />
      </div>
    </div>
  );
};

export default FilterPrice;
