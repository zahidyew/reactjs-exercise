import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

import reducer from './reducers/myReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//const initialState = {}
const middleware = [thunk]
const enchancer = composeEnhancers(applyMiddleware(...middleware))

// store keeps all the declared application's states
const store = createStore(reducer, enchancer)

//const store = createStore(reducer, initialState, enchancer)

/* const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */

export default store