import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor () {
    super () 
  
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    test() {
      
    }

    handleEmailChange(e) {
      console.log(e.target.value)
      this.setState({ email: e.target.value })
    }

    handlePasswordChange(e) {
      console.log(e.target.value)
      this.setState({ password: e.target.value })
    }

    handleRememberMeChange(e) {
      this.setState({ rememberMe: e.target.value })
    }

    handleSubmit(e) {
      e.preventDefault()
      this.setState({ submit: e.target.value })
      }


    render() {
      return (
        
          <div>
            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                placeholder="Enter email..."
                onFocus=""
                onChange={this.handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Enter password..."
                onFocus=""
                onChange={this.handlePasswordChange}
                />

              </div>
              <div className="mb-3 form-check">
                <input 
                type="checkbox" 
                className="form-check-input"
                />
                <label className="form-check-label">Remember Me</label>
              </div>
                <button 
                type="submit" 
                className="btn btn-primary"
                onChange={this.handleSubmit}
                >Submit</button>
            </form>
          </div>
        
      );
    }
}

export default App