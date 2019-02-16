import React from 'react';
import styles from './explores.css'
import sephoraAvatar from '../../../Assets/sephoraAvatar.svg';
import HeartSVG from '../svgComponent/heart.jsx';
import ShareSVG from '../svgComponent/share.jsx';
import CloseModalSVG from '../svgComponent/closeModal.jsx'

class Modal extends React.Component {

  constructor(props) {
    super(props);


  }

  render () {
    const showHideClassName = this.props.show? styles.modalDisplayBlock : styles.modalDisplayNone;

    return (
      <div className={showHideClassName}>
        <section className={styles.modalMain}>
          <div className={styles.lightBoxHeader} >
            <span className={styles.mLooks} >Look info</span>
            <div onClick={this.props.hideModal} className={styles.close} >
                <CloseModalSVG />
            </div>
          </div>
          <div style={{width: '913px', height: '461px'}}>
            <div className={styles.mmwrapper} >
              <div className={styles.mimageHolder} >
                <img className={styles.mimg} src={this.props.info[0].image} />
              </div>

              <div className={styles.minfoPanel} >
                {/* <div style={{width: '425px', height: '77px'}} ></div> */}
                  <div className={styles.userInfoPanel} >
                    <div className={styles.mimgDetailHead} >
                      <div className={styles.mheaderComment}>
                        {this.props.info[0].headerComment}
                      </div>
                      <div className={styles.icons}>

                        <div className={styles.heartContainer}>
                          <HeartSVG />
                          <div>{Math.floor(Math.random()*20)}</div>
                        </div>
                        <ShareSVG />
                      </div>
                    </div>
                    <div className={styles.mgroupTime}>
                      <div >in <span style={{ fontWeight: 'bold' }}>{" " + this.props.info[0].productBrand}</span> | </div>
                      <div>{this.props.info[0].date.slice(0,7)}</div>
                    </div><br/>
                    <div className={styles.mcomments} >{this.props.info[0].comments}</div>
                  </div>
                  <div className={styles.userInfo}>
                    <div style={{ cursor: 'pointer' }}>
                      <img src={sephoraAvatar} />
                    </div>
                    <div className={styles.userInfoContainer}>
                      <div >{this.props.info[0].user}</div>
                      <div style={{ display: 'flex', flexWrap: 'nowrap'}}>
                        <div>
                          <img className={styles.sephoraBrand} src="https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-badge-sephora_brand.png" />
                        </div>
                        <div>
                          <img className={styles.rookie} src="https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-engagement-rookie-01.png" />
                        </div>
                      </div>
                    </div>
                  
                  </div>
                  <div className={styles.gallery} >
                    See this look in the Gallery >
                  </div>
                  <div className={styles.report} >
                    <a href='#'>Report</a>
                  </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    )
    
  }

}

export default Modal;