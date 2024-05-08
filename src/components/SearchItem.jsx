import React from "react";

function SearchItem({search,setSearch}) {
  return (
    <>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
        className="search"
          id="search"
          type="text"
          role="searchBox"
          placeholder="Searching Items"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </form>
    </>
  );
}

export default SearchItem;
