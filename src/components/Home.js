import { useReducer, useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

import {setTemperature} from '../redux/actions'

const Home = () => {
   const countries = ["Kuala Lumpur", "Singapore"]
   const defaultKey = "ff9f895b2e884d6680530135202710"
   const [submitted, setSubmitted] = useState(false)
   const dispatch = useDispatch()
   const history = useHistory()

   useEffect(() => {
      if(submitted) {
         // fetch data from API
         getData()
      }
   })

   // func to fetch data from API
   const getData = async () => {
      const url = `http://api.weatherapi.com/v1/current.json?key=${formData.key}&q=${formData.country}`
      const response = await fetch(url)

      if (!response.ok) {
         // some errors occurred. Eg: invalid API key
         console.log(response.statusText)
      }
      else {
         const data = await response.json()
         //console.log(data.current)

         // Redux: call the setTemperature action using dispatch 
         // & send an obj containing celsius & fahrenheit values
         dispatch(setTemperature({
            celsius: data.current.temp_c,
            fahrenheit: data.current.temp_f
         }))

         // go to Temperature page
         history.push("/temperature")
      }
   }

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

   // handle form submission after user clicked Submit
   const handleSubmit = (event) => {
      event.preventDefault()

      if (formData.country === "" || formData.key === "") {
         //todo add a snackbar here 
         alert('Please fill all the required fields.')
      }
      else {
         // set submitted value to true, then send request to API
         setSubmitted(true)
      }
      //console.log(formData)  
      //increment()
   }

   // handle user's input for the Textfields
   const handleChange = (event) => {
      setFormData({
         name: event.target.name,
         value: event.target.value,
      })
   }

   return (
      <div className="Home">
         <form className="form" autoComplete="off" onSubmit={handleSubmit}>
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
               {/* <Button onClick={() => dispatch(increment())} id="buttons" variant="contained" color="secondary" fullWidth > Submit </Button> */}
               <Button type="submit" id="buttons" variant="contained" color="secondary" fullWidth > Submit </Button>
            </div>
         </form> 
      </div>
   )
}

export default Home


/* const mapDispatchToProps = dispatch => ({
   setTemperature: temperature => dispatch(setTemperature(temperature)),
   increment: () => dispatch(increment())
}) */

//export default connect(null, mapDispatchToProps)(Home)