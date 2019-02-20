import React from 'react';
import axios from 'axios';
import styles from './explores.css';
import beautyMatch from '../../../Assets/BeautyMatchIcon.png';
import ExploresList from './exploresList.jsx';
import Carousel from '../carouselComponent/carousel.jsx';
import Modal from './Modal.jsx';
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
    modalShow: null,
    modalInfo: [{
      myid: "",
      user: "",
      image: "",
      headerComment : "",
      comments: "",
      date: "",
      productBrand: ""
    }]
  }

    this.fetchData = this.fetchData.bind(this);
    this.openModal = this.openModal.bind(this);
    this.modalGet = this.modalGet.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    let random = (Math.floor(Math.random() * 100));
    console.log(random);
    this.fetchData(random)
  }

  fetchData (random) {
    axios 
      .get('/explores', {params: { id: random}})
      .then((data) => {
        console.log(data)
        this.setState({ lists: data.data })
        })
      .catch((err) => {console.log(err)})
  }

  openModal () {
   this.setState({ modalShow: true })
  }

  closeModal () {
    this.setState({ modalShow: null })
  }

  modalGet (value) {
    axios
      .get(`/explores/id`, {params: {id: value}})
      .then((data) => {this.setState({ modalInfo: data.data}, () => {this.openModal()})})
      .catch(() => {console.log('failed to get id')})
  }


  render () {
    return (
    <div className={styles.exploreContainer} >
        <div className={styles.head0} >Explore This Product</div>
      <div className={styles.container}>
        <div className={styles.head1}>
          <div className={styles.looks}>Looks {this.state.lists.length}</div>
          <div style={{ width: '18px', height: '18px', margin: '3px'}}>
            <Checkbox />
          </div> 
          <span className={styles.showLooks} >Show looks from my</span> 
          <img className={styles.beautyMatch} src={beautyMatch} />
          <div style={{ width: '18px', height: '18px', margin: '3px', alignSelf: 'center' }}>
            <QuestionBubble />            
          </div>
        </div>
        <div className={styles.carouselContainer} >
          <Carousel
          lists={this.state.lists}
          component={ExploresList}
          modalGet={this.modalGet}
          listLength={this.state.lists.length}
          />  
        </div>
      </div>
      <Modal 
      show={this.state.modalShow}
      info={this.state.modalInfo} 
      hideModal={this.closeModal} 
      />
      {this.state.currentIndex}
    </div>
    )
  }
}

export default Explores;