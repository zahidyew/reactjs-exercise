import React from 'react'
import TextField from '@material-ui/core/TextField'

import {useSelector} from 'react-redux'
/* import {useEffect} from 'react'
import {useLocation} from 'react-router-dom' */

const Temperature = () => {
   const celsius = useSelector(state => state.celsius)
   const fahrenheit = useSelector(state => state.fahrenheit)
   /* const location = useLocation()

   useEffect(() => {
      console.log(location.state)
      console.log(location.state.celsius)

   }, [location]) */

   return (
      <div className="Temperature">
         <form className="form">
            <div className="form-elements">
               <TextField id="text-1" label="Celsius" color="secondary" value={celsius} fullWidth />
            </div>

            <div className="form-elements">
               <TextField id="text-1" label="Fahrenheit" color="secondary" value={fahrenheit} fullWidth />
            </div>
         </form>
      </div>
   )
}

export default Temperature