/** @format */
import React from "react";
import Pagination from "react-bootstrap/Pagination";

interface PaginationTransactions {
  numberPage: number;
  lastPage: number;
  handlePreviosPage: any;
  handleNumberPage: any;
  handleNextPage: any;
}

const PaginationTableTransactions: React.FC<PaginationTransactions> = ({
  numberPage,
  lastPage,
  handlePreviosPage,
  handleNumberPage,
  handleNextPage,
}) => {
  const pagination: any[] = [];
  pagination.length = lastPage;

  return (
    <Pagination className="d-flex justify-content-center" >
      <Pagination.Prev onClick={handlePreviosPage} disabled={numberPage <= 1} />
      {pagination.fill("num").map((el, i) => {
        const active = numberPage === i + 1 ? "4px solid grey" : "none";
        console.log(active);
        return (
          <Pagination.Item
            key={i}
            style={{ border: active,margin:"2px"}}
            onClick={handleNumberPage}
            disabled={numberPage === i + 1}
          >
            {i + 1}
          </Pagination.Item>
        );
      })}

      <Pagination.Next
        onClick={handleNextPage}
        disabled={numberPage >= lastPage}
      />
    </Pagination>
  );
};

export default PaginationTableTransactions;
