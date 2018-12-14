import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
// import Parent from './parent'
import Welcome from './welcome';
// import App from './App';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Welcome/></Provider>, document.getElementById('root'));
registerServiceWorker();
