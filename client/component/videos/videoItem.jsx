import React from 'react';
import styles from './vstyles.css';
import VideoPlayButton from '../svgComponent/videoPlayButton.jsx';

const VideoItems = (props) => {

  return (
    <div onClick={() => props.updateModalIndex( props.id )} style={{transform: `translateX(${props.translateValue}px)`, transition: 'transform 300ms ease 0s', cursor: 'pointer', zIndex: 0}}>
      <div>
        <VideoPlayButton />
        <img className={styles.videoItem} src={props.list} />
      </div>
      <div className={styles.videoTitle} >{props.title}</div>
    </div>
  )
}

export default VideoItems;