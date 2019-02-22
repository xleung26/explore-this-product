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
      lists: [{
        video: [],
        videoTitle: ""
      }],
      modalIndex: null
    }
    this.fetchVideo = this.fetchVideo.bind(this);
    this.updateModalIndex = this.updateModalIndex.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    let random = (Math.floor(Math.random() * 100));
    this.fetchVideo(random)
  }

  fetchVideo (random) {
    axios
      .get('/videos', { params: { id: random } })
      .then((data) => {
        console.log(data.data) 
        this.setState({ lists: data.data}) 
      })
      .catch((err) => {console.log('err')})
  }

  updateModalIndex (index) {
    this.setState({ modalIndex: index })
  }

  closeModal () {
    this.setState({ modalIndex: null })    
  }

  render () {
    return (
      <div className={styles.outerContainer} >
        <div className={styles.h0} >
          <div className={styles.headerText} >Videos {'(' + this.state.lists[0].video.length + ')'}</div>
        </div>  
            <div className={styles.carouselContainer} >
              <Carousel 
              updateModalIndex={this.updateModalIndex}
              lists={this.state.lists[0].video}
              title={this.state.lists[0].videoTitle}
              component={VideoItems}
              listLength={this.state.lists[0].video.length}
              itemDisplay = { 2 }
              compCarouselStyles= {styles}
              imageSize = { -258 }
              translateStart = { -15 }              
              />
            </div>
            <VideoModal 
            lists={this.state.lists[0].video}
            title={this.state.lists[0].videoTitle}
            modalIndex={this.state.modalIndex} 
            hideModal={this.closeModal} 
            />
      </div>
    )
  }
}

export default Videos;