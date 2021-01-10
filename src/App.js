import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './components/Home'
import Temperature from './components/Temperature'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/temperature" component={Temperature}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* <form noValidate autoComplete="off">
        <Box display="flex" justifyContent="center" >
          <Box width="70%">
            <TextField id="standard-basic" label="Standard" fullWidth />
          </Box>
        </Box>
      </form>  */