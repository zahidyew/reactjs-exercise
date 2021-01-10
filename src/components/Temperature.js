import React from 'react'
import {useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField'

const Temperature = () => {
   // Redux: useSelector is used to extract the state from redux store (application's states)
   const celsius = useSelector(state => state.celsius)
   const fahrenheit = useSelector(state => state.fahrenheit)

   return (
      <div className="Temperature">
         <form className="form">
            <div className="form-elements">
               <TextField label="Celsius" color="secondary" value={celsius} fullWidth />
            </div>

            <div className="form-elements">
               <TextField label="Fahrenheit" color="secondary" value={fahrenheit} fullWidth />
            </div>
         </form>
      </div>
   )
}

export default Temperature