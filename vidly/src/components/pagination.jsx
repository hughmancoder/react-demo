import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  // destructure props object
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log("current page", currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  console.log("pageCount is", pagesCount);
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a
              className="page-link"
              onClick={() => onPageChange(page)}
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
