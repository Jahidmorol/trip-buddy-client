import React from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  setCurrentPage,
}) => {
  const validTotalPage =
    Number.isInteger(totalPage) && totalPage > 0 ? totalPage : 1;
  const pageNumber = Array.from({ length: validTotalPage }, (_, i) => i);

  return (
    <div className="flex items-center justify-center gap-5 mt-8">
      <button
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
        disabled={currentPage <= 1}
        className={`flex items-center gap-1 py-2 px-5 border border-slate-500 rounded-xl ${
          currentPage !== 1
            ? "hover:border-[#0fcda156]"
            : "text-slate-500 btn-disabled"
        }`}
      >
        <LiaAngleLeftSolid />
        <span className="font-medium">Previous</span>
      </button>
      <div className="hidden md:flex items-center gap-5">
        {pageNumber.map((num) => (
          <span
            onClick={() => setCurrentPage(num + 1)}
            key={num}
            className={`font-semibold py-2 px-5 border rounded-xl cursor-pointer flexcode-banner-bg ${
              num + 1 === currentPage
                ? "border-[#0fcda156]"
                : "border-slate-500 hover:border-[#0fcda156]"
            }`}
          >
            {num + 1}
          </span>
        ))}
      </div>
      <button
        onClick={() => {
          if (currentPage < validTotalPage) setCurrentPage(currentPage + 1);
        }}
        className={`flex items-center gap-1 py-2 px-5 border border-slate-500 rounded-xl flexcode-banner-bg ${
          currentPage < validTotalPage
            ? "hover:border-[#0fcda156]"
            : "text-slate-500 btn-disabled"
        }`}
      >
        <span className="font-medium">Next</span>
        <LiaAngleRightSolid />
      </button>
    </div>
  );
};

export default Pagination;
