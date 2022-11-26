import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

// desturcture props object into react component
const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
