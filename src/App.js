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
      const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
      let validEmail = regex.test(e.target.value)
      this.setState({ email: e.target.value})
        if ( validEmail === true ) {
          this.setState({ emailIsValid: true })
        }
    }

    handlePasswordChange(e) {
      let validPassword = e.target.value.length
      this.setState({ password: e.target.value })
      if ( validPassword === 5 ) {
        this.setState({ validPassword: true })
      }
    }

    handleRememberMeChange(e) {
      if ( this.state.rememberMe === true && e.target.value === "off") {
        this.setState({ rememberMe: false })
      } else {
        this.setState({ rememberMe: true })
      }
      this.setState({ rememberMe: e.target.value })
    }

    handleSubmit(e) {
      e.preventDefault()
      if (this.state.emailIsValid && this.state.passwordIsValid) {
        this.setState({ isSubmitted: true })
      }
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
                value={this.state.email}
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
                onChange={this.handleRememberMeChange}
                />
                <label className="form-check-label">Remember Me</label>
              </div>
                <button 
                type="submit" 
                className="btn btn-primary"
                onChange={this.handleSubmit}>
                Submit
                </button>
            </form>
          </div>
        
      );
    }
}

export default App