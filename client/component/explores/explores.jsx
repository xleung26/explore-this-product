import React from 'react';
import axios from 'axios';
import styles from './explores.css';
import beautyMatch from '../../../Assets/BeautyMatchIcon.png';
import ExploresList from './exploresList.jsx';
import Carousel from '../carouselComponent/carousel.jsx';
import Modal from '../modal/Modal.jsx';
import Checkbox from '../svgComponent/checkbox.jsx';
import QuestionBubble from '../svgComponent/questionBubble.jsx';
import Videos from '../videos/videos.jsx';
import Articles from '../articles/articles.jsx';

class Explores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        {
          exploresLists: '',
          videosLists: '',
          articlesLists: ''
        }
      ],
      modalIndex: null
    };

    this.updateModalIndex = this.updateModalIndex.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get('/explores')
      .then(data => {
        this.setState({ lists: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateModalIndex(index) {
    this.setState({ modalIndex: index });
  }

  closeModal() {
    this.setState({ modalIndex: null });
  }

  render() {
    console.log(this.state.lists[0].videosLists);

    return (
      <div>
        {this.state.lists[0].exploresLists === '' ? (
          <div />
        ) : (
          <div className={styles.exploreContainer}>
            <div className={styles.head0}>Explore This Product</div>
            <div className={styles.container}>
              <div className={styles.head1}>
                <div className={styles.looks}>
                  Looks {'(' + this.state.lists[0].exploresLists.length + ')'}
                </div>
                <div
                  style={{ width: '18px', height: '18px', alignSelf: 'center' }}
                >
                  <Checkbox />
                </div>
                <div className={styles.showLooks}>Show looks from my</div>
                <img className={styles.beautyMatch} src={beautyMatch} />
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    margin: '3px',
                    alignSelf: 'center'
                  }}
                >
                  <QuestionBubble />
                </div>
              </div>
              <div className={styles.carouselContainer}>
                <Carousel
                  updateModalIndex={this.updateModalIndex}
                  lists={this.state.lists[0].exploresLists}
                  component={ExploresList}
                  listLength={this.state.lists[0].exploresLists.length}
                  itemDisplay={5}
                  compCarouselStyles={styles}
                  imageSize={-190}
                  translateStart={-25}
                />
              </div>
            </div>
            <Modal
              lists={this.state.lists[0].exploresLists}
              modalIndex={this.state.modalIndex}
              hideModal={this.closeModal}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '1076px',
                  height: '316px',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  marginTop: '50px',
                  justifyContent: 'space-between',
                  alignSelf: 'center'
                }}
              >
                <Videos lists={this.state.lists[0].videosLists} />
                <Articles lists={this.state.lists[0].articlesLists} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Explores;
