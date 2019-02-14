import React from 'react';
import styles from './explores.css'

class Modal extends React.Component {

  constructor(props) {
    super(props);


  }

  render () {
    const showHideClassName = this.props.show? styles.modalDisplayBlock : styles.modalDisplayNone;

    return (
      <div className={showHideClassName}>
        <section className={styles.modalMain}>
          <div style={{width: '913px', height: '68px', borderBottom: '5px'}} >
            <span className={styles.mLooks} >Look info</span>
            <div className={styles.close} >
              <button onClick={this.props.hideModal}>x</button>
            </div>
          </div>
          <div>
            <div className={styles.mmwrapper} >
              <div className="pictureHolder" style={{width: '460px', height: '461px'}} >
                <img src={this.props.info[0].image} />
              </div>

              <div className="infoPanel" style={{width: '453px', height: '234px'}} >
                <div style={{width: '425px', height: '77px'}} >
                  {/* <div style={{width: '425px', height: '178px'}}>          </div> */}
                  <div className={styles.mmwrapper} >
                    <div className={styles.mheaderComment} >{this.props.info[0].headerComment}</div>
                    <div className={styles.icons} style={{width: '100px', height: '23px'}}>
                      <div>Send Image</div>
                      <div>Heart</div>
                    </div>
                  </div>
                  <div className={styles.mgroupTime} style={{width: '425px', height: '21px'}}>
                    <div >in <span style={{ fontWeight: 'bold' }}>{" " + this.props.info[0].productBrand}</span> |</div>
                    <div>{this.props.info[0].date.toString()}</div>
                  </div>

                    <div className="comments">{this.props.info[0].comments}</div>

                  <div style={{width: '425px', height: '42px'}}>
                    <div>Sephora Avatar</div>
                    <div className="user">{this.props.info[0].user}</div>
                  </div>
                  <div style={{width: '425px', height: '21px'}}>
                    See this look in the Gallery >
                  </div>
                  <div style={{width: '425px', height: '21px'}}>
                    <a href='#'>Report</a>
                  </div>
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