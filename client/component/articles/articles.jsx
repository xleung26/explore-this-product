import React from 'react';
import axios from 'axios';
import styles from './astyles.css'

class Articles extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            lists: [{
                image: "",
                articleTitle: ""
            }],
            hoverOver: false
        }
        this.fetchArticles = this.fetchArticles.bind(this)
    }

    componentDidMount () {
        let random = (Math.floor(Math.random() * 100));
        this.fetchArticles(random)
      }
    
    fetchArticles (random) {
    console.log(random)
    axios
        .get('/articles', { params: { id: random } })
        .then((data) => {
        console.log(data.data) 
        this.setState({ lists: data.data}) 
        })
        .catch((err) => {console.log('err')})
    }

    render () {

        return (
            <div className={styles.outerContainer} >
              <div className={styles.h0} >
                <div className={styles.headerText} >Articles {'(' + this.state.lists[0].image.length + ')'}</div>
                
                <div className={styles.hoverDiv} >              
                    <div  >
                        <img className={styles.articlesImage} src={this.state.lists[0].image} />
                    </div>
                    <div className={styles.articlesTitle} >{this.state.lists[0].articleTitle}</div>
                </div>
              
              </div>  
            </div>
          )
    }
}

export default Articles;