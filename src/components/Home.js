import { useReducer, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import {useHistory} from 'react-router-dom'

const Home = () => {
   const countries = ["Kuala Lumpur", "Singapore"]
   const defaultKey = "ff9f895b2e884d6680530135202710"

   const [submitted, setSubmitted] = useState(false)
   const [celsius, setCelsius] = useState(0)
   const [fahrenheit, setFahrenheit] = useState(0)

   useEffect(() => {
      if(submitted) {
         // fetch data from API
         getData()
      }
   }, [submitted])

   let history = useHistory()

   const formReducer = (state, event) => {
      return {
         ...state,
         [event.name]: event.value
      }
   }

   const [formData, setFormData] = useReducer(formReducer, {
      key: defaultKey,
      country: '',
   })

   const handleSubmit = (event) => {
      event.preventDefault()

      if (formData.country === "" || formData.key === "") {
         //todo add a snackbar here 
         //alert('error')
         return 
      }
      else {
         // send request to API here
         //getData()
         //goToTemperaturePage()
         setSubmitted(true)
      }
      console.log(formData)  
   }

   const goToTemperaturePage = () => {
      history.push("/temperature", {
         celsius: celsius, 
         fahrenheit: fahrenheit
      })
      console.log(history)
   }

   const handleChange = (event) => {
      setFormData({
         name: event.target.name,
         value: event.target.value,
      })
   }

   const getData = async () => {
      const url = `http://api.weatherapi.com/v1/current.json?key=${formData.key}&q=${formData.country}`
      const response = await fetch(url)

      if (!response.ok) {
         console.log(response.statusText)
      }
      else {
         const data = await response.json()

         //console.log(data.current)
         //console.log(data.current.temp_c)
         //console.log(data.current.temp_f)
         setCelsius(data.current.temp_c)
         setFahrenheit(data.current.temp_f)

         /* console.log(celsius)
         console.log(fahrenheit) */
      }  
   }

   return (
      <div className="Home">
         <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-elements">
               <TextField id="text-1" label="Your API Key" color="secondary" name="key" value={formData.key} onChange={handleChange} fullWidth />
            </div>

            <div className="form-elements">
               <TextField id="text-2" select label="City Name" color="secondary" name="country" value={formData.country} onChange={handleChange} fullWidth >
                  {countries.map((option) => (
                     <MenuItem key={option} value={option}> {option} </MenuItem>
                  ))}
               </TextField>
            </div>

            <div className="form-elements">
               <Button type="submit" id="buttons" variant="contained" color="secondary" fullWidth > Submit </Button>
            </div>
         </form> 
      </div>
   )
}

export default Home
