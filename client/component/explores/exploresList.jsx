import React from 'react';
import styles from './explores.css'
// import Modal from './Modal.jsx'

class ExploresList extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <button className={styles.listbutton} onClick={() => this.props.modalGet(this.props.pic._id)} style={{transform: `translateX(${this.props.translateValue}%)`, transition: 'transform 300ms ease 0s'}} >
        <img className={styles.imgs} src={this.props.pic.image} alt={this.props.pic.user}/>
      </button>

    )
  }

}



export default ExploresList;