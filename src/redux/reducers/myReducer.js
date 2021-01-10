// import { combineReducers } from "redux";

const initialState = {
   celsius: 0,
   fahrenheit: 0
}

// reducer make change(s) to the states/values
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_TEMPERATURE":
         //console.log(action)
         return {
            // make copies of the original values, then mutate the copies
            ...state,
            celsius: action.payload.celsius,
            fahrenheit: action.payload.fahrenheit
         }
      default:
         return state
   }
}

export default reducer

//export default combineReducers({ });