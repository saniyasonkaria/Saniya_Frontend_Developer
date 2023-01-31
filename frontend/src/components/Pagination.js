import React, { useState } from "react";

function Pagination(props) {
  const [currentPageNumber, setCurrentPageNumber] = useState(props.currentPage);
  const pageNumbers = [];
  const handlePageChange = (newPageNumber) => {
    setCurrentPageNumber(newPageNumber);
    props.onPageChange(newPageNumber);
  };
 for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
 }
 let totalPages =Math.ceil(props.totalItems / props.itemsPerPage);
  return (
    <div className="flex justify-center py-2">
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <ul className="flex pl-0 rounded list-none flex-wrap">
            <li>
              <button
                disabled={currentPageNumber === 1}
                onClick={() => handlePageChange(currentPageNumber - 1)}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span>Previous</span>
              </button>
              {pageNumbers?.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={
                    currentPageNumber === number
                      ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  }
                >
                  {number}
                </button>
              ))}
              <button
                disabled={currentPageNumber === totalPages}
                onClick={() => handlePageChange(currentPageNumber + 1)}
                aria-disabled={true}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span>Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
