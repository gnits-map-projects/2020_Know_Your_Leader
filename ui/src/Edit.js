import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Header from './Header'

var a = sessionStorage.getItem("firstname")
var b = sessionStorage.getItem("lastname")
var c = sessionStorage.getItem("password")
var d = sessionStorage.getItem("phoneno")
var e = sessionStorage.getItem("locality")
var f = sessionStorage.getItem("pincode")
var x = sessionStorage.getItem("cpassword")




class Edit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstname: a,
      lastname: b,
      email: window.localStorage.getItem('username'),
      password: c,
      cpassword: x,
      phno: d,
      locality: e,
      pincode: f,
      profilepic: ''
    }

    this.handlefirstnameChange = this.handlefirstnameChange.bind(this)
    this.handlelastnameChange = this.handlelastnameChange.bind(this)
    this.handlepasswordChange = this.handlepasswordChange.bind(this)
    this.handleconfirmpasswordChange = this.handleconfirmpasswordChange.bind(this)
    this.handlephnoChange = this.handlephnoChange.bind(this)
    this.handlelocalityChange = this.handlelocalityChange.bind(this)
    this.handlepincodeChange = this.handlepincodeChange.bind(this)
    //this.handleImageChange = this.handleImageChange.bind(this)
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

  handlelocalityChange = event => {
    this.setState({
      locality: event.target.value
    });
  }

  handlepincodeChange = event => {
    this.setState({
      pincode: event.target.value
    });
  }
  /*handleImageChange = event => {
    this.setState({
      profilepic: event.target.value
    });
  }*/

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state)
    var body = {

      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
      phoneno: this.state.phno,
      email: this.state.email,
      locality: this.state.locality,
      pincode: this.state.pincode,
      //profilpic: this.state.profilepic,

    }
    console.log(body);
    if (this.state.firstname === "") {
      alert('Please enter the first name')
    }

    else if (this.state.lastname === "") {
      alert('Please enter the last name')
    }

    else if (this.state.password === "") {
      alert('Please enter the password')
    }

    else if (this.state.phno === "") {
      alert('Please enter the phone')
    }

    else if (this.state.locality === "") {
      alert('Please enter the locality')
    }

    else if (this.state.pincode === "") {
      alert('Please enter the pincode')

    }

    else if (this.state.cpassword !== this.state.password) {
      alert("Passwords donot match, please enter them correctly")
      event.preventDefault()
    }

    /*else if (this.state.image != '') {
      const allowedFiles = [".jpg", ".jpeg", ".png"];
      const regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
      if (!regex.test(this.state.image.toLowerCase())) {
        alert("Please upload files having extensions: .jpg or .jpeg or .png only.");
      }
    }*/

    else {
      const url = "http://localhost:9000/update";
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
            alert("updated successfully")
            window.location.href = '/profile'

          }
          else {
            alert("not successful")
          }
        })
      //window.location.href = '/profile'
    }
  }


  render() {
    return (
      <div>
        <Header />
        <div className="bgimage">
          <br />
          <br />
          <br />
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Form enctype="multipart/form-data" onSubmit={this.handleSubmit} >
                <center><h2>ESTRO</h2></center>
                <hr />
                <h3>Edit Profile</h3>

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
                </div>

                <div className="form-group">
                  <Form.Label>Pincode:</Form.Label>
                  <input name='pincode' type="text" className="form-control" value={this.state.pincode} onChange={this.handlepincodeChange} />
                </div>







                <br />

                <button type="submit" onClick={this.handleSubmit} className="btn btn-danger btn-block">Edit</button>

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
      </div>
    );
  }

}

export default Edit;

/*<div className="form-group">
                  <label>Profile Picture</label>
                  <input name='profilepic' type="file" className="form-control" value={this.state.profilepic} onChange={this.handleImageChange} />
                </div>*/