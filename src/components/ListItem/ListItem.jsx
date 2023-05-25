import React from "react";
import PropTypes from 'prop-types';
export const ListItem = ({name, number, del}) => (
          <li><span>{name}</span>: {number} <button onClick={() => del(name)}>Delete</button></li>         
  )
ListItem.propTypes = {
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            del: PropTypes.func
}