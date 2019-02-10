import React from 'react';
import ReactDOM from 'react-dom';
import Explores from './component/explores/explores.jsx';
import Videos from './component/videos/videos.jsx';
import Articles from './component/articles/articles.jsx';

const App = () => {
    return (
        <div>
            <Explores />
            <Videos />
            <Articles />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));