import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import styles from './explores.css';
import BeautyMatch from '../../../Assets/BeautyMatch.svg';
import ExploresList from './exploresList.jsx';
// import RightArrow from './exploreArrowRight.jsx'
// import LeftArrow from './exploreArrowLeft.jsx'
import Carousel from './carousel.jsx';
import Modal from './Modal.jsx';

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
    // currentIndex: 0,
    // translateValue: -7,
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
//   this.leftSlide = this.leftSlide.bind(this);
//   this.rightSlide = this.rightSlide.bind(this);
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

//   leftSlide () {
//     this.setState({ translateValue: -7 })
//   }

//   rightSlide () {
//     this.setState({ translateValue: -107 })
//   }

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
    <div className={styles.container}>
      <span style={{display: 'flex'}}>
        <div className={styles.head1} >Looks ({this.state.lists.length})</div>
        <input type="checkbox" /> Show looks from my
        <img className={styles.BeautyMatch} src={BeautyMatch} />
          Beauty Matches<br/>
      </span>
      <Carousel
      lists={this.state.lists}
      component={ExploresList}
      modalGet={this.modalGet}
      />
      {/* <div className={styles.flexContainer}>
        <LeftArrow 
        leftSlide={this.leftSlide} 
        /> */}
        {/* <div className={styles.innercontainer} >
          <div id="flexContainer" className={styles.flexContainer}>
            {this.state.lists.map( (pic, key) => {
            return <ExploresList 
            key={key} 
            pic={pic} 
            modalGet={this.modalGet} 
            translateValue={this.state.translateValue} 
            />})}
          </div>
        </div> */}
        {/* <RightArrow 
        rightSlide={this.rightSlide} 
        />
      </div> */}
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