import React from 'react';
import axios from 'axios';
import styles from './explores.css';
import beautyMatch from '../../../Assets/BeautyMatchIcon.png';
import ExploresList from './exploresList.jsx';
import Carousel from '../carouselComponent/carousel.jsx';
import Modal from '../modal/Modal.jsx';
import Checkbox from '../svgComponent/checkbox.jsx';
import QuestionBubble from '../svgComponent/questionBubble.jsx';

class Explores extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
    lists: [{
      myid: "",
      user: "",
      image: "",
      headerComment : "",
      comments: "",
      date: "",
      productBrand: ""
    }],
    modalIndex: null
  }

    this.fetchData = this.fetchData.bind(this);
    this.updateModalIndex = this.updateModalIndex.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    let random = (Math.floor(Math.random() * 100));
    this.fetchData(random)
  }

  fetchData (random) {
    axios 
      .get('/explores', {params: { id: random}})
      .then((data) => {
        this.setState({ lists: data.data })
        })
      .catch((err) => {console.log(err)})
  }

  updateModalIndex(index){
    this.setState({modalIndex: index});
  }

  closeModal () {
    this.setState({ modalIndex: null })
  }

  render () {
    return (
    <div className={styles.exploreContainer} >
        <div className={styles.head0} >Explore This Product</div>
      <div className={styles.container}>
        <div className={styles.head1}>
          <div className={styles.looks}>Looks {'(' + this.state.lists.length + ')'}</div>
          <div style={{ width: '18px', height: '18px', alignSelf: 'center'}}>
            <Checkbox />
          </div> 
          <div className={styles.showLooks} >Show looks from my</div> 
          <img className={styles.beautyMatch} src={beautyMatch} />
          <div style={{ width: '18px', height: '18px', margin: '3px', alignSelf: 'center' }}>
            <QuestionBubble />
          </div>
        </div>
        <div className={styles.carouselContainer} >
          <Carousel
          updateModalIndex={this.updateModalIndex}
          lists={this.state.lists}
          component={ExploresList}
          listLength={this.state.lists.length}
          itemDisplay = { 5 }
          compCarouselStyles= {styles}
          imageSize = { -190 }
          translateStart = { -25 }
          />  
        </div>
      </div>
      <Modal 
      lists={this.state.lists}
      modalIndex={this.state.modalIndex} 
      hideModal={this.closeModal} 
      />
      {this.state.currentIndex}
    </div>
    )
  }
}

export default Explores;