import React from 'react';
import styles from './explores.css'
import rightArrow from '../../../Assets/rightArrow.svg';

const RightArrow = (props) => (
  <div>
    <button onClick={props.rightSlide} className={styles.button} role="button" data-slide="prev">
      <img className={styles.arrows} src={rightArrow} />
      </button>
  </div>

)

export default RightArrow;