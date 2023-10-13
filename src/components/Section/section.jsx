import React from "react";

export const Section = ({title, children}) => (
    <section>
        <h2>{title}</h2>
            {children}
    </section>
  );