import React from 'react';
import B from 'bootstrap/dist/css/bootstrap.css';

const FilterLabel = props => (
  <label className={B['mb-0']}>
    <code>
      {props.method}({props.values})
      </code>
  </label>
);

export default FilterLabel;
