import React from 'react';
import styles from './cstyles.css';

const Toggle = (props) => {
  let toggleColor ={
    backgroundColor: 'rgb(204, 204, 204)'
  }

  if (JSON.stringify(props.currentIndex) === props.id){
    toggleColor.backgroundColor = 'rgb(0, 0, 0)'
  }

  return (
      <div id={props.id} style={toggleColor} className={styles.toggleButton} onClick={(e) => props.handleToggle(e.target.id)}></div>
  )
}

export default Toggle;