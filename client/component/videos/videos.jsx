import React from 'react';
import axios from 'axios';

class Videos extends React.Component {
  constructor(props) {
    super(props);

  this.state ={
    videos: ""
  }
  }


  render () {
    return (
      <div style={{ width: '548px', height: '245px' }} >
        <div className={{ width: '548px', height: '20px' }} >
          <div>Videos {this.state.videos.length}</div>
        </div>
      </div>
    )
  }
}

export default Videos;