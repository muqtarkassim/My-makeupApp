import React from "react";

function PaginationControls({ currentPage, totalPages, onPageChange }) {
    const handlePageChange = (newPage) => {
      // Ensure the new page is within bounds
      if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    };
  
    return (
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    );
  }
  export default PaginationControls