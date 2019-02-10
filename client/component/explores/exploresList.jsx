import React from 'react';
import styles from './explores.css'

const ExploresList = (props) => (

    <span style={{transform: `translateX(${props.translateValue}%)`, transition: 'transform 300ms ease 0s'}} >
       <img className={styles.imgs} src={props.pic.image} alt={props.pic.user}/>
    </span>
)


export default ExploresList;