import React from 'react';
import styles from './explores.css'

const RightArrow = (props) => (
  <div>
    <button onClick={props.rightSlide} className={styles.button} role="button" data-slide="prev">
      <img className={styles.arrows} src={props.direction} />
      </button>
  </div>

)

export default RightArrow;