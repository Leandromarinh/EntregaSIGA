import React from "react";

import "./styles.css";

export default function List({ mat1, hr1, mat2, hr2, mat3, hr3 }) {
  return (
    <div className="list">
      <ul>
        <li>{mat1}</li>
        <li>{hr1}</li>
        <li>{mat2}</li>
        <li>{hr2}</li>
        <li>{mat3}</li>
        <li>{hr3}</li>
      </ul>
    </div>
  );
}
