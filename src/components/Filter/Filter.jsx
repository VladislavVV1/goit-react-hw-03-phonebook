import React from "react";

export const Filter = ({value, handleFilterChange}) => (
    <label>
        Find contacts by name
    <input
          type="text"
          name="filter"
          value={value}
          onInput={(e) => handleFilterChange(e)}
        />
  </label>  
  )
