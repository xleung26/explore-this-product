import React from 'react';
import styles from './astyles.css'

class Articles extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            hoverOver: false
        }

    }

    render () {

        return (

            <div>
                {
                    (this.props.lists === "")?<div></div>:
                    <div className={styles.outerContainer} >
              <div className={styles.h0} >
                <div className={styles.headerText} >Articles {'(' + this.props.lists[0].image.length + ')'}</div>
                
                <div className={styles.hoverDiv} >              
                    <div  >
                        <img className={styles.articlesImage} src={this.props.lists[0].image} />
                    </div>
                    <div className={styles.articlesTitle} >{this.props.lists[0].title}</div>
                </div>
              
              </div>  
            </div>
                }
            </div>

            
          )
    }
}

export default Articles;