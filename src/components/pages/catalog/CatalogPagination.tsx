import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

interface ICatalogPaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const CatalogPagination: React.FunctionComponent<ICatalogPaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="ghost" disabled={currentPage === 1}>
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
          </Button>
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <PaginationItem key={page} className=" cursor-pointer">
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" disabled={currentPage === totalPages}>
            <PaginationNext
              href="#"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CatalogPagination;
