import React from "react";
import PropTypes from 'prop-types';
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
Filter.propTypes = {
    value: PropTypes.string,
    handleFilterChange: PropTypes.func
}