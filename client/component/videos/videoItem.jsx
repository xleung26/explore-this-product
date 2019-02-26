import React from 'react';
import styles from './vstyles.css';
import VideoPlayButton from '../svgComponent/videoPlayButton.jsx';

const VideoItems = (props) => {

  return (
    <div onClick={() => props.updateModalIndex( props.id )} className={styles.videoItemContainer} style={{transform: `translateX(${props.translateValue}px)`, transition: 'transform 300ms ease 0s', cursor: 'pointer', zIndex: 0}}>
      <div style={{ width: '234px', height: '132px'}}>
        <VideoPlayButton />
        <img className={styles.videoItem} src={props.list.videosThumbnail}/>
      </div>
      <div className={styles.videoTitle} >
          {props.list.videoTitle}
      </div>
    </div>
  )
}

export default VideoItems;