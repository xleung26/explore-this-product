import React from 'react';
import axios from 'axios';
import styles from './vstyles.css';
import Carousel from '../carouselComponent/carousel.jsx';
import VideoItems from './videoItem.jsx';
import VideoModal from '../videoModal/videoModal.jsx';

class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      modalIndex: null
    }
    this.updateModalIndex = this.updateModalIndex.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  updateModalIndex (index) {
    this.setState({ modalIndex: index })
  }

  closeModal () {
    this.setState({ modalIndex: null })    
  }

  render () {
    return (

      <div>
        {(this.props.lists === "")? <div></div>:
      <div className={styles.outerContainer} >
      <div className={styles.h0} >
        <div className={styles.headerText} >Videos {'(' + this.props.lists.length + ')'}</div>
      </div>  
          <div className={styles.carouselContainer} >
            <Carousel 
            updateModalIndex={this.updateModalIndex}
            lists={this.props.lists}
            component={VideoItems}
            listLength={this.props.lists.length}
            itemDisplay = { 2 }
            compCarouselStyles= {styles}
            imageSize = { -255 }
            translateStart = { -15 }              
            />
          </div>
          <VideoModal 
          lists={this.props.lists}
          modalIndex={this.state.modalIndex} 
          hideModal={this.closeModal} 
          />
    </div>
      }
      </div>

      
    )
  }
}

export default Videos;