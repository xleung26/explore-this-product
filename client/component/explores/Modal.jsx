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
        <div style={{width: '913px', height: '68px'}} >
          <span>Look info</span>
          <div className={styles.close} >
            <button onClick={this.props.hideModal}>x</button>
          </div>
        </div>
        <div>
          <div className="pictureHolder" style={{width: '460px', height: '461px'}} >
            <img src={this.props.info[0].image} />
          </div>
          <div className="infoPanel" style={{width: '453px', height: '234px'}} >
            <div style={{width: '425px', height: '77px'}} >
              <div style={{width: '425px', height: '178px'}}>
                <div className="title" >{this.props.info[0].headerComment}</div>
                <div style={{width: '100px', height: '23px'}}>
                  <div>Send Image</div>
                  <div>Heart</div>
                </div>
                <div style={{width: '425px', height: '21px'}}>
                  <div>in {" " + this.props.info[0].productBrand}</div>
                  <div>{this.props.info[0].date}</div>
                </div>
                <div className="comments">{this.props.info[0].comments}</div>
              </div>
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
        </section>
      </div>
    )
    
  }

}

export default Modal;