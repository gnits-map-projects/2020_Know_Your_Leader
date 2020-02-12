import React, { Component } from "react";
import Form from 'react-bootstrap/Form'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      cpassword: '',
      phno: '',
      email: '',
      gender: '',
      locality: ''
    }

    this.handlefirstnameChange = this.handlefirstnameChange.bind(this)
    this.handlelastnameChange = this.handlelastnameChange.bind(this)
    this.handlepasswordChange = this.handlepasswordChange.bind(this)
    this.handleconfirmpasswordChange = this.handleconfirmpasswordChange.bind(this)
    this.handlephnoChange = this.handlephnoChange.bind(this)
    this.handleemailChange = this.handleemailChange.bind(this)
    this.handlegenderChange = this.handlegenderChange.bind(this)
    this.handlelocalityChange = this.handlelocalityChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)



  }


  handlefirstnameChange = event => {
    this.setState({
      firstname: event.target.value
    });
  }
  handlelastnameChange = event => {
    this.setState({
      lastname: event.target.value
    });
  }
  handlepasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  }
  handleconfirmpasswordChange = event => {
    this.setState({
      cpassword: event.target.value
    });
  }
  handlephnoChange = event => {
    this.setState({
      phno: event.target.value
    });
  }
  handleemailChange = event => {
    this.setState({
      email: event.target.value
    });
  }
  handlegenderChange = event => {
    this.setState({
      gender: event.target.value
    });
  }
  handlelocalityChange = event => {
    this.setState({
      locality: event.target.value
    });
  }



  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state)
    var body = {

      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
      phoneno: this.state.phno,
      email: this.state.email,
      gender: this.state.gender,
      locality: this.state.locality,
    }
    console.log(body);
    if (this.state.firstname == "") {
      alert('Please enter the first name')
    }

    else if (this.state.lastname == "") {
      alert('Please enter the last name')
    }

    else if (this.state.password == "") {
      alert('Please enter the password')
    }

    else if (this.state.email == "") {
      alert('Please enter the email')
    }

    else if (this.state.phno == "") {
      alert('Please enter the phone')
    }

    else if (this.state.gender == "") {
      alert('Please enter the gender')
    }

    else if (this.state.locality == "") {
      alert('Please enter the locality')

    }

    else if (this.state.cpassword !== this.state.password) {
      alert("Passwords donot match, please enter them correctly")
      event.preventDefault()
    }

    else {
      const url = "http://localhost:9000/person";
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
        .then(response => response.json())
        .then(contents => {
          console.log(contents);

        })
        .catch(() => console.log("can't access" + url + "response. "))


      alert('Details are submitted successful');

    }

    /* if (this.state.firstname !=='') {

         if (this.state.lastname !== '') {

             if (this.state.password !== '') {

                 if (this.state.cpassword !== '') {

                     if (this.state.cpassword !== this.state.password) {
                         alert("Passwords donot match, please enter them correctly")
                         event.preventDefault()
                     }

                     else {

                         if (this.state.phno !== '') {

                             if (this.state.email !== '') {

                                 if (this.state.gender !== '') {

                                     if (this.state.locality !== '') {

                                         alert(this.state.firstname + ' ' + this.state.lastname + ' of locality ' + this.state.locality + ' registered successfully!!!')
                                         event.preventDefault()
                                         //event.preventDefault();
                                             console.log(this.state)
                                             var body = {
                                         
                                             firstname : this.state.firstname,
                                             lastname : this.state.lastname,
                                             password: this.state.password,
                                             phoneno : this.state.phno,
                                             email:this.state.email,
                                             gender : this.state.gender,
                                             locality : this.state.locality,


     
                                                 }
                                                  const url = "http://localhost:9000/person";
                                                 let headers = new Headers();
                                             
                                                 headers.append('Content-Type','application/json');
                                                 headers.append('Accept','application/json');
                                             
                                                 headers.append('Access-Control-Allow-origin',url);
                                                 headers.append('Access-Control-Allow-Credentials','true');
                                             
                                                 headers.append('POST','GET');
                                             
                                                 fetch(url, {
                                                 headers:headers,
                                                 method: 'POST',
                                                 body: JSON.stringify(body)
                                                 })
                                                 .then(response => response.json())
                                                 .then(contents => {console.log(contents);
                                                                 
                                             })
                                             .catch(()=> console.log("can't access" + url + "response. "))


                                             alert('Details are submitted successful');
                                             
                                             }


                                     
                                     else {
                                         alert("Please select your locality")
                                         event.preventDefault()
                                     }

                                 }

                                 else {
                                     alert("Please select your gender")
                                     event.preventDefault()
                                 }

                             }

                             else {
                                 alert("Please enter your email id")
                                 event.preventDefault()
                             }
                         }

                         else {
                             alert("Please enter your phone number")
                             event.preventDefault()
                         }
                     }

                 }

                 else {
                     alert("Please re enter your password")
                     event.preventDefault()
                 }

             }

             else {
                 alert("Please enter your password")
                 event.preventDefault()
             }

         }

         else {
             alert("Please enter your last name")
             event.preventDefault()
         }

     }
     else {
         alert("Please enter your first name")
         event.preventDefault()
     }*/
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
              <h3>Sign Up</h3>

              <div className="form-group">
                <Form.Label>First name :</Form.Label>
                <input name='firstname' type="text" className="form-control" value={this.state.firstname} onChange={this.handlefirstnameChange} />
              </div>

              <div className="form-group">
                <Form.Label>Last name :</Form.Label>
                <input name='lastname' type="text" className="form-control" value={this.state.lastname} onChange={this.handlelastnameChange} />
              </div>

              <div className="form-group">
                <Form.Label>Password :</Form.Label>
                <input name="password" type="password" className="form-control" value={this.state.password} onChange={this.handlepasswordChange} />
              </div>

              <div className="form-group">
                <Form.Label>Confirm Password :</Form.Label>
                <input name="cpassword" type="password" className="form-control" value={this.state.cpassword} onChange={this.handleconfirmpasswordChange} />
              </div>

              <div className="form-group">
                <Form.Label>Phone Number :</Form.Label>
                <input name="phno" type="number" className="form-control" value={this.state.phno} onChange={this.handlephnoChange} />
              </div>

              <div className="form-group">
                <Form.Label>Email address :</Form.Label>
                <input name="email" type="email" className="form-control" value={this.state.email} onChange={this.handleemailChange} />
              </div>

              <div key={'inline-radio'} className='form-group'>
                <Form.Label>Gender :</Form.Label><br />
                <Form.Check inline type='radio' name='gender' value='male' label='Male' onChange={this.handlegenderChange} />
                <Form.Check inline type='radio' name='gender' value='female' label='Female' onChange={this.handlegenderChange} />
                <Form.Check inline type='radio' name='gender' value='other' label='Other' onChange={this.handlegenderChange} />
              </div>

              <div>
                <Form.Label>Locality :</Form.Label>
                <select name="locality" className="form-control" value={this.state.locality} onChange={this.handlelocalityChange}>
                  <option value=""></option>
                  <option value="Abids Road">Abids Road</option>
                  <option value="Adarsh Nagar">Adarsh Nagar</option>
                  <option value="Adikmet">Adikmet</option>
                  <option value="Afzalgunj">Afzalgunj</option>
                  <option value="Agapura">Agapura</option>
                  <option value="Ahmed Nagar">Ahmed Nagar</option>
                  <option value="Akbar Road">Akbar Road</option>
                  <option value="Alexander Road">Alexander Road</option>
                  <option value="Aliabad">Aliabad</option>
                  <option value="Alwal">Alwal</option>
                  <option value="Amberpet">Amberpet</option>
                  <option value="Ameerpet X Road">Ameerpet X Road</option>
                  <option value="Anand Bagh">Anand Bagh</option>
                  <option value="Anand Nagar Colony">Anand Nagar Colony</option>
                  <option value="Ashok Nagar">Ashok Nagar</option>
                  <option value="Asif Nagar">Asif Nagar</option>
                  <option value="Attapur">Attapur</option>
                  <option value="Azampura Masjid">Azampura Masjid</option>
                  <option value="Baber Bagh">Baber Bagh</option>
                  <option value="Bachupally">Bachupally</option>
                  <option value="Badichowdi">Badichowdi</option>
                  <option value="Bagh Amberpet">Bagh Amberpet</option>
                  <option value="Bagh Lingampally">Bagh Lingampally</option>
                  <option value="Bahadurpura">Bahadurpura</option>
                  <option value="Bahadurpurpally">Bahadurpurpally</option>
                  <option value="Bairamalguda">Bairamalguda</option>
                  <option value="Bakaram">Bakaram</option>
                  <option value="Bala Nagar">Bala Nagar</option>
                  <option value="Balapur">Balapur</option>
                  <option value="Balkampet">Balkampet</option>
                  <option value="Bandlaguda">Bandlaguda</option>
                  <option value="Basheerbagh">Basheerbagh</option>
                  <option value="Bazarghat">Bazarghat</option>
                  <option value="Begum Bazar">Begum Bazar</option>
                  <option value="Bhagya Nagar Colony">Bhagya Nagar Colony</option>
                  <option value="Bharat Nagar">Bharat Nagar</option>
                  <option value="Bhel">Bhel</option>
                  <option value="Bholakpur">Bholakpur</option>
                  <option value="Bk Guda">Bk Guda</option>
                  <option value="Bod Uppal">Bod Uppal</option>
                  <option value="Bolaram">Bolaram</option>
                  <option value="Borabanda">Borabanda</option>
                  <option value="Bowenpally">Bowenpally</option>
                  <option value="Boyiguda">Boyiguda</option>
                </select>
              </div> <br />

              <button type="submit" onClick={this.handleSubmit} className="btn btn-danger btn-block">Sign Up</button>
              <p className="forgot-password text-right">
                Already registered <a href="/Login">Login?</a>
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
      </div>
    );
  }

}

export default Register;
