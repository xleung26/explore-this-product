import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import styles from './explores.css';
import BeautyMatch from '../../../Assets/BeautyMatch.svg';
import leftArrow from '../../../Assets/leftArrow.svg';
import rightArrow from '../../../Assets/rightArrow.svg';
import ExploresList from './exploresList.jsx';
import RightArrow from './exploreArrowRight.jsx'
import LeftArrow from './exploreArrowLeft.jsx'


class Explores extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lists: [{image: "", user: ""}],
            currentIndex: 0,
            translateValue: -7
        }
        this.fetchData = this.fetchData.bind(this);
        this.leftSlide = this.leftSlide.bind(this);
        this.rightSlide = this.rightSlide.bind(this);
    }
    
    componentDidMount () {
        this.fetchData()
    }

    fetchData () {
        axios 
          .get('/explores')
          .then((data) => {
              this.setState({
                  lists: data.data
              }, console.log(data.data))
          })
          .catch((err) => {console.log(err)})
    }

    leftSlide () {
        this.setState({ translateValue: -7 })
    }

    rightSlide () {
        this.setState({
            translateValue: -107
        })
    }

    slideWidth () {
        return document.querySelector('#flexContainer').clientWidth;
    }

    render () {
        return (
            <div className={styles.container}>
                <span style={{display: 'flex'}}>
                    <div className={styles.head1} >Looks ({this.state.lists.length})
                    </div>
                    <input type="checkbox" /> Show looks from my
                    <img className={styles.BeautyMatch} src={BeautyMatch} />
                    Beauty Matches<br/>
                </span>
                <div className={styles.flexContainer}>
                    <LeftArrow direction={leftArrow} leftSlide={this.leftSlide} />
                    <div className={styles.innercontainer} >
                        <div id="flexContainer" className={styles.flexContainer}>
                            {this.state.lists.map( (pic, key) =>
                            {return <ExploresList pic={pic} translateValue={this.state.translateValue} />}
                            )}
                        </div>
                    </div>
                    <RightArrow direction={rightArrow} rightSlide={this.rightSlide} />
                </div>
                {this.state.currentIndex}
            </div>
        )
    }
}

export default Explores;