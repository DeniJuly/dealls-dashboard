import Link from "next/link";
import React from "react";

interface Props {
  page: number;
  totalPage: number;
  handleNext: () => void;
  handlePrev: () => void;
}
const Pagination = ({ handleNext, handlePrev, page, totalPage }: Props) => {
  let disabledNext = page === totalPage;
  let disabledPrev = page === 1;
  return (
    <div className="flex mt-4 justify-end items-center gap-2">
      <button
        disabled={disabledPrev}
        onClick={handlePrev}
        className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-grey bg-white border border-grey-70 rounded-md hover:bg-grey-60 ${
          disabledPrev ? "bg-grey-60 text-gray-300" : ""
        }`}
      >
        <svg
          className="w-3.5 h-3.5 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </button>
      <p className="text-medium text-grey border-grey-70 border rounded-md h-8 text-center px-2 flex items-center">
        {page}/{totalPage}
      </p>
      <button
        disabled={disabledNext}
        onClick={handleNext}
        className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-grey bg-white border border-grey-70 rounded-md hover:bg-grey-60 ${
          disabledNext ? "bg-grey-60 text-gray-300" : ""
        }`}
      >
        Next
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
