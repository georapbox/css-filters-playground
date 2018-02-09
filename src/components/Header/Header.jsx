import React from 'react';
import B from 'bootstrap/dist/css/bootstrap.css';
import styles from './Header.css';

const Header = () => (
  <div className={`${styles.Header} ${B['mt-3']} ${B['mb-4']}`}>
    <h1 className={`${styles.Header__Title} ${B.h2}`}>CSS Filters Playground</h1>
  </div>
);

export default Header;
