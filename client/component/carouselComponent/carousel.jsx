import React from 'react';
import styles from '../explores/explores.css';
import RightArrow from './exploreArrowRight.jsx'
import LeftArrow from './exploreArrowLeft.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      translateValue: -25,
      currentIndex: 0
    }
    
    this.leftSlide = this.leftSlide.bind(this);
    this.rightSlide = this.rightSlide.bind(this);
  }

  leftSlide () {

    let x = (this.props.listLength - (this.props.listLength % 5)) / 5;
    
    if (this.state.currentIndex === 1){
      this.setState({ translateValue: -25 }, () => this.setState((prevState) => ({ currentIndex: prevState.currentIndex -1 })))
    }
    if ( (this.state.currentIndex > 0) && (this.state.currentIndex !== 1)) {
      this.setState({ translateValue: ((x-1) * 5 * -190) }, () => this.setState((prevState) => ({ currentIndex: prevState.currentIndex -1 })))
    }

  }

  rightSlide () {
    
    let x = (this.props.listLength - (this.props.listLength % 5)) / 5;
      
      if ( (this.state.currentIndex <= (x-1)) && (this.props.listLength % 5 !== 0)) {
        if (this.state.currentIndex < (x-1)){
          this.setState({ translateValue: ((this.state.currentIndex + 1) * 5 * -190)}, () => {this.setState((prevState)=> ({ currentIndex: prevState.currentIndex + 1 }))})
        } else if (this.state.currentIndex === (x-1)) {
          this.setState({ translateValue: ( ((this.props.listLength % 5) + (5 * this.state.currentIndex)) * -190) }, () => {this.setState((prevState)=> ({ currentIndex: prevState.currentIndex + 1 }) )}) 
        }
      } 
      if ((this.state.currentIndex < (x-1)) && (this.props.listLength % 5 === 0)) {
          this.setState({ translateValue: ((this.state.currentIndex + 1) * 5 * -189)}, () => {this.setState((prevState)=> ({ currentIndex: prevState.currentIndex + 1 }))})
      }
  }

  render () {
    return (
      <div>  
        <div className={styles.innercontainer}>
          <LeftArrow 
          leftSlide={this.leftSlide} 
          />
            <div className={styles.flexContainer}>
            {this.props.lists.map( (list, key) => {
            return <this.props.component 
            key={key} 
            list={list} 
            modalGet={this.props.modalGet} 
            translateValue={this.state.translateValue} 
            />})}
            </div>
          <RightArrow 
          rightSlide={this.rightSlide} 
          />
        </div>
        <div className={styles.toggleContainer}>
            <div id="0" className={styles.toggleButton} ></div>
            <div id="1" className={styles.toggleButton} ></div>
        </div>
        <div>{this.state.currentIndex}</div>
      </div>
    )
  }
}

export default Carousel;