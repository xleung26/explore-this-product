import React from 'react';
import styles from './explores.css'
import leftArrow from '../../../Assets/leftArrow.svg';

const LeftArrow = (props) => (
  <div>
    <button onClick={props.leftSlide} className={styles.button} role="button" data-slide="prev">
      <img className={styles.arrows} src={leftArrow} />
      </button>
  </div>

)

export default LeftArrow;