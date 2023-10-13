import React from "react";

export const ListItem = ({name, number, del}) => (
          <li><span>{name}</span>: {number} <button onClick={() => del(name)}>Delete</button></li>         
  )
