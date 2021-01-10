import { createStore } from "redux";

import reducer from './reducers/myReducer'

// store keeps all the declared application's states
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store