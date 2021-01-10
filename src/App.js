import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer from './redux/reducers/myReducer'

import Home from './components/Home'
import Temperature from './components/Temperature'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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