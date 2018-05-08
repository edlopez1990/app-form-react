import React, { Component } from "react"
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Provider } from "react-redux"

import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/routes/PrivateRoute"
import store from "./store"
import actions from "./actions"
import Login from "./pages/Login"
import Form from "./pages/Form/Form"
import registerServiceWorker from './registerServiceWorker';

class Error404 extends Component {
  render() {
    return(
      <div> error </div>
    )
  }
}
class Routes extends Component {
constructor(props) {
    super(props)
}
componentWillMount() {
}
render() {
    const handleFunctions = {
      user: {
        logout: this.handleUserLogout
      }
    }
    return(
      <Provider store={store}>
        <Router>
          <div id="wrapper-app" className="wrapper-app">
            <Switch>
              <Route exact path="/" component={Login} />    
              <Route exact path="/dashboard" component={Dashboard} />      
              <Route exact path="/form" component={Form} />          
              <Route component={Error404} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Routes />,
  document.getElementById("root")
)

registerServiceWorker();
