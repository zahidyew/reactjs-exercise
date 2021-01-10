import React from 'react'
import TextField from '@material-ui/core/TextField'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const Temperature = () => {
   const location = useLocation()

   useEffect(() => {
      console.log(location.state)
      console.log(location.state.celsius)

   }, [location])

   return (
      <div className="Temperature">
         <form className="form">
            <div className="form-elements">
               <TextField id="text-1" label="Celsius" color="secondary" value={location.state.celsius} fullWidth />
            </div>

            <div className="form-elements">
               <TextField id="text-1" label="Fahrenheit" color="secondary" value={location.state.fahrenheit} fullWidth />
            </div>
         </form>
      </div>
   )
}

export default Temperature
