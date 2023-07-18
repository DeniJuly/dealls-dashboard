import React, { ChangeEventHandler } from "react";

interface Props {
  search?: string;
  handleSearch: ChangeEventHandler<HTMLInputElement>;
}
const Search = ({ handleSearch, search }: Props) => {
  return (
    <div className="w-full lg:max-w-sm">
      <label
        htmlFor="search"
        className="block mb-2 text-sm font-medium text-black"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </div>
        <input
          id="search"
          name="search"
          type="text"
          className="bg-grey-60 border border-grey-70 text-black text-sm rounded-lg focus:ring-purple-10 focus:border-purple-10 focus-visible:outline-purple block  pl-10 p-2.5 w-full"
          placeholder="Search Product..."
          onChange={handleSearch}
          value={search}
        />
      </div>
    </div>
  );
};

export default Search;
