import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todos from './todos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Todos/><App/></div>, document.getElementById('root'));
registerServiceWorker();
