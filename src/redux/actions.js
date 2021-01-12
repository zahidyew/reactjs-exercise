// actions are called using dispatch, which will trigger reducer (to modify states) depending on the action's type

// this will take a temperature object containing celsius & fahrenheit
export const setTemperature = (temperature) => {
   //console.log(temperature)
   return {
      type: "SET_TEMPERATURE",
      payload: temperature
   }
}

export const fetchTemperature = (formData) => async dispatch => {
   const url = `http://api.weatherapi.com/v1/current.json?key=${formData.key}&q=${formData.country}`
   const response = await fetch(url)

   if (!response.ok) {
      // some errors occurred. Eg: invalid API key
      dispatch({
         type: "ERROR",
         payload: response.statusText
      })
   }
   else {
      const data = await response.json()
      const temperature = {
         celsius: data.current.temp_c,
         fahrenheit: data.current.temp_f
      }

      dispatch({
         type: "FETCH_TEMPERATURE",
         payload: temperature
      })
   }
}


/* export const increment = () => {
   return {
      type: 'INCREMENT'
   }
} */