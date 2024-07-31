import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}
const PaginationCustomer: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="left-2">
          <PaginationPrevious
            onClick={() => paginate(currentPage - 1)}
            className={`${
              currentPage === 1 ? "pointer-events-none text-gray-500" : "hover:cursor-pointer"
            }`}
          />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem
            key={number}
            className={`page-item ${
              currentPage === number ? "bg-slate-200" : ""
            }`}
          >
            <PaginationLink
              onClick={() => paginate(number)}
              className="page-link cursor-pointer"
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => paginate(currentPage + 1)}
            className={` ${
              currentPage === pageNumbers.length
                ? "pointer-events-none text-gray-500"
                : "hover:cursor-pointer"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationCustomer;
