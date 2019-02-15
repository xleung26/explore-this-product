import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import styles from './explores.css';
import BeautyMatch from '../../../Assets/BeautyMatch.svg';
import ExploresList from './exploresList.jsx';
import Carousel from '../carouselComponent/carousel.jsx';
import Modal from './Modal.jsx';
import Checkbox from '../svgComponent/checkbox.jsx';

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
    modalShow: false,
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
    this.modalStatus = this.modalStatus.bind(this);
    this.modalGet = this.modalGet.bind(this);
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    axios 
      .get('/explores')
      .then((data) => {
        this.setState({ lists: data.data })
        })
      .catch((err) => {console.log(err)})
  }

  modalStatus () {
   this.setState({ modalShow: !this.state.modalShow })
  }

  modalGet (value) {
    axios
      .get(`/explores/id`, {params: {id: value}})
      .then((data) => {this.setState({ modalInfo: data.data}, () => {this.modalStatus()})})
      .catch(() => {console.log('failed to get id')})
  }


  render () {
    return (
    <div className={styles.exploreContainer} >
        <div className={styles.head0} >Explore This Product</div>
      <div className={styles.container}>
        <div className={styles.head1}>
          <div className={styles.looks}>Looks ({this.state.lists.length})</div>
          <Checkbox /> 
          <span className={styles.showLooks} >Show looks from my</span> 
          <img className={styles.BeautyMatch} src={BeautyMatch} />
          Beauty Matches
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
      info={this.state.modalInfo} 
      show={this.state.modalShow} 
      hideModal={this.modalStatus} 
      />
      {this.state.currentIndex}
    </div>
    )
  }
}

export default Explores;