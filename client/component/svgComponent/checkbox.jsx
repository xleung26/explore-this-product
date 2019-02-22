import React from 'react';
import styles from './svgstyles.css';

const Checkbox = (props) => {
  return (
      <svg
      viewBox={"0 0 32 32"}
      className={styles.checkBox}
      >
        <path d={"M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"}></path>
      </svg>
  )
}

export default Checkbox;