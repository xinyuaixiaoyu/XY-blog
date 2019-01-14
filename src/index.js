import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux'
import BasicLayouts from './layouts/BasicLayouts.jsx';
// import Login from './containers/login';
import store from './stores/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        {/* <Login/> */}
        <BasicLayouts/>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
