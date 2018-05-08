
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import actions from "../actions"
import '../assets/css/pages/style.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stado: 0,
     
    }
  }

  componentDidMount(){
  }
  render() {

    return(
     <div className="page-empty">
      <div className="page-empty-content">
        <h1>Welcome Back</h1>
        <form>
          <div className="form-group"><label>Username</label><input type="text" name="username" className="form-control" />
          </div>
          <div className="form-group"><label>Password</label><input type="text" name="password" className="form-control" />
          </div>
          <div className="form-group form-group-button">
            <div className="form-group-button-description"><a>I forgot password</a></div>
            <button type="submit" className="button button-primary button-right">Login</button>
          </div>
        </form>
        {/*<div className="form-description"><a className="button-block button-google button" href="#">Login using Google+</a><a
                className="button-block button-facebook button" href="#">Login using Facebook</a></div>*/}
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

export default withRouter(connect(mapStateToProps)(Login))
