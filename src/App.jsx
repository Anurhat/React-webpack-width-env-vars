import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            {env.demo}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));