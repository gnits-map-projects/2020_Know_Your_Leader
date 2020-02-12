import React, { Component } from "react"
import './styles.css'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameuser: '',
            pwd: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {

        if (this.state.nameuser !== '') {

            if (this.state.pwd !=='') {
                alert(this.state.nameuser + ' logged in successfully!!!')
                event.preventDefault()
            }

            else {
                alert('Please enter your password')
                event.preventDefault()
            }
        }

        else {
            alert('Please enter your username')
            event.preventDefault()
        }


    }

    render() {
        return (
            <div className="bgimage">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form action="/home">

                            <center><h2>ESTRO</h2></center>
                            <br />
                            <hr />
                            <br />
                            <h3>Login</h3>

                            <div className="form-group">
                                <label>User name</label>
                                <input name='nameuser' type="email" className="form-control" value={this.state.nameuser} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input name='pwd' type="password" className="form-control" value={this.state.pwd} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" name='check' className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-danger btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>



                            <p className="forgot-password text-right">
                                If not registered <a href="/register">Signup?</a>
                            </p>

                        </form>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>


        );
    }
}
export default Login;