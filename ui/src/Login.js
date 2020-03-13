import React from "react"
import { Component } from "react"
import Form from 'react-bootstrap/Form'
import './styles.css'

var firstname
var lastname
var password
var phoneno
var email
var gender
var locality
var pincode
var result
var id

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emailid: '',
            password: ''
        }

        this.handleusernameChange = this.handleemailChange.bind(this)
        this.handlepasswordChange = this.handlepasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleemailChange = event => {
        this.setState({
            emailid: event.target.value
        });
    }

    handlepasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }


    handleSubmit(event) {

        event.preventDefault();

        console.log(this.state)

        var body = {
            email: this.state.emailid,
            password: this.state.password
        }

        console.log(body);

        if (this.state.emailid === "") {
            alert('Please enter the username')
        }

        else if (this.state.password === "") {
            alert('Please enter the password')
        }

        else {
            const url = "http://localhost:9000/login";
            let headers = new Headers();

            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');

            headers.append('Access-Control-Allow-origin', url);
            headers.append('Access-Control-Allow-Credentials', 'true');

            headers.append('POST', 'GET');
            fetch(url, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(body)
            })
                .then(response => {
                    if (response.ok) {
                        result = response.json()
                            .then(result => {
                                id = result.id
                                firstname = result.firstname
                                lastname = result.lastname
                                password = result.password
                                phoneno = result.phoneno
                                email = result.email
                                gender = result.gender
                                locality = result.locality
                                pincode = result.pincode
                                window.sessionStorage.setItem("id", id)
                                window.sessionStorage.setItem("firstname", firstname)
                                window.sessionStorage.setItem("lastname", lastname)
                                window.sessionStorage.setItem("password", password)
                                window.sessionStorage.setItem("phoneno", phoneno)
                                window.sessionStorage.setItem("gender", gender)
                                window.sessionStorage.setItem("locality", locality)
                                window.sessionStorage.setItem("pincode", pincode)
                            })
                        window.sessionStorage.setItem("username", this.state.emailid)
                        window.location.href = "/home";
                    }
                    else {
                        console.log("Please check your username or password")
                        alert("INVALID USERNAME OR PASSWORD")
                    }
                })
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
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Form onSubmit={this.handleSubmit} >
                            <center><h2>ESTRO</h2></center>
                            <hr />
                            <h3>Login</h3>

                            <div className="form-group">
                                <Form.Label>Username :</Form.Label>
                                <input name='emailid' type="text" className="form-control" value={this.state.emailid} onChange={this.handleemailChange} />
                            </div>

                            <div className="form-group">
                                <Form.Label>Password :</Form.Label>
                                <input name="password" type="password" className="form-control" value={this.state.password} onChange={this.handlepasswordChange} />
                            </div>


                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" name='check' className="custom-control-input" id="customCheck1" />
                                    <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember me</Form.Label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-danger btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>

                            <p className="forgot-password text-right">
                                If not registered <a href="/register">Signup?</a>
                            </p>

                        </Form>
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