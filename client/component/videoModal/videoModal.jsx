import React from 'react';
import styles from './videoModal.styles.css'
import CloseModalSVG from '../svgComponent/closeModal.jsx'

class VideoModal extends React.Component {

  constructor(props) {
    super(props);


  }

  render () {
    const showHideClassName = this.props.modalIndex !== null ? styles.modalDisplayBlock : styles.modalDisplayNone;
    const info = this.props.lists[this.props.modalIndex];
    console.log(info)
    if(this.props.modalIndex === null){
      return <div/>;
    }
    return (
      <div className={showHideClassName}>
        <section className={styles.modalMain}>
          <div className={styles.lightBoxHeader} >
            <span className={styles.mLooks} >{this.props.title}</span>
            <div onClick={this.props.hideModal} className={styles.close} >
                <CloseModalSVG />
            </div>
          </div>
            <div className={styles.mimageHolder} >
              <iframe className={styles.mimg} src={info}></iframe>
            </div>
        </section>
      </div>
    )
    
  }

}

export default VideoModal;