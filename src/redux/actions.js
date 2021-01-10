// will take a temperature object containing celsius & fahrenheit
export const setTemperature = (temperature) => {
   console.log(temperature)
   return {
      type: "SET_TEMPERATURE",
      payload: temperature
   }
}

export const increment = () => {
   return {
      type: 'INCREMENT'
   }
}