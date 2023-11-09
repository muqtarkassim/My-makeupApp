import React from "react";

function PaginationControls({ currentPage, totalPages, onPageChange }) {
    const handlePageChange = (newPage) => {
     
      if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    };
  
    return (
      <div>
        <button className="btn btn-dark btn-lg "onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button className="btn btn-dark btn-lg"onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    );
  }
  export default PaginationControls