import React from "react";

function Filter({ searchName, handleSearchTerm }) {
  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      filter shown with <input value={searchName} onChange={handleSearchTerm} />
    </div>
  );
}

export default Filter;
