import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

export default function Button({ children, ...restProps }) {
  return (
    <div id="btn">
      <button {...restProps} >{children}</button>
    </div>
  );
}
