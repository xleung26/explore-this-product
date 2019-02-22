import React from 'react';
import ReactDOM from 'react-dom';
import Explores from './component/explores/explores.jsx';


const Explore = () => {
    return (
        <div>
            <Explores />
        </div>
    )
}

ReactDOM.render(<Explore />, document.getElementById('explore'));