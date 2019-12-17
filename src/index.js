import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../src/_reducers/combine.reducer';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import './index.scss';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger),
    // other store enhancers if any
  ));
ReactDOM.render(<Provider store={store}>
               <App /> 
                <ReduxToastr
                  timeOut={4000}
                  newestOnTop={false}
                  preventDuplicates
                  position="top-left"
                  getState={(state) => state.toastr} // This is the default
                  transitionIn="fadeIn"
                  transitionOut="fadeOut"
                  progressBar
                  closeOnToastrClick/>
               </Provider>, 
               document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
