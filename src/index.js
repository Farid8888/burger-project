import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux' 
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'

import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import burgerBuilderReducer from './store/reducers/burgerBuilder'
import orderReducer from './store/reducers/order'
import thunk from 'redux-thunk'
import authReducer from './store/reducers/auth'
import { authStart } from './store/actions/auth';
import {watchAuth, watchBurgerBuilder,watchOrder} from './store/sagas/index'
import createSagaMiddleware from 'redux-saga'



const rootReducer = combineReducers({
  burgerBuilder:burgerBuilderReducer,
  order:orderReducer,
  auth:authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware=createSagaMiddleware()


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,sagaMiddleware)))

sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchBurgerBuilder)
sagaMiddleware.run(watchOrder)


const app =(
  <Provider store={store}>
<BrowserRouter>
<React.StrictMode>
    <App />
  </React.StrictMode>
</BrowserRouter>
</Provider>)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  app
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
