// import { combineReducers } from "redux";
/* import visibilityFilter from "./visibilityFilter";
import todos from "./todos"; */

const initialState = {
   celsius: 0,
   fahrenheit: 0
}

const reducer = (state = initialState, action) => {
   
   switch (action.type) {
      case "SET_TEMPERATURE":
         console.log(action)
         return {
            ...state,
            celsius: action.payload.celsius,
            fahrenheit: action.payload.fahrenheit
         }
      case 'INCREMENT':
         console.log(2132132131)
         return state + 1
         
      
      default:
         //console.log(action)
         return state
   }
}

export default reducer

//export default combineReducers({ todos, visibilityFilter });
//export default combineReducers({ });