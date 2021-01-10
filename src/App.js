import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import Home from './components/Home'
import Temperature from './components/Temperature'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/temperature" component={Temperature}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;