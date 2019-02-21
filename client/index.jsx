import React from 'react';
import ReactDOM from 'react-dom';
import Explores from './component/explores/explores.jsx';
import Videos from './component/videos/videos.jsx';
import Articles from './component/articles/articles.jsx';

const App = () => {
    return (
        <div>
            <Explores />
            <div style={{display: 'flex', justifyContent: 'center'}} >
                <div style={{ width:'1076px', height: '316px', display: 'flex', flexWrap: 'nowrap', marginTop: '50px', justifyContent: 'space-between', alignSelf: 'center' }}>
                    <Videos />
                    <Articles />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));