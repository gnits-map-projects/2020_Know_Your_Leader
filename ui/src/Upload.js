import React, { Component } from "react"
import './styles.css'
import Header from './Header'
import {
    FormControl
} from 'react-bootstrap'

class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            actionName: '',
            description: '',
            image: ''
        }

        this.handleActionNameChange = this.handleActionNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleActionNameChange = event => {
        this.setState({
            actionName: event.target.value
        });
    }


    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value
        });
    }


    handleImageChange = event => {
        this.setState({
            image: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

    console.log(this.state)
    var body = {

      actionname: this.state.actionName,
      description: this.state.description,
      actionpath: this.state.image,
      email : window.sessionStorage.getItem("username")
    }
    console.log(body);

    if (this.state.actionName === "") {
        alert('Please enter the name of the action')
      }
  
      else if (this.state.description=== "") {
        alert('Please enter the description for the action')
      }

      else if (this.state.image === "") {
        alert('Please enter the image')
      }
  
      else {
        const url = "http://localhost:9000/action";
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
  
          window.location.href = "/profile";
  
      }
  
  
        /*const allowedFiles = [".jpg", ".jpeg", ".png"];
        if (this.state.image == '') {
            if (this.state.actionName !== '') {

                if (this.state.description !== '') {
                    alert(this.state.actionName + ' uploaded successfully')
                    event.preventDefault()
                }
            }

            else {
                alert('Please enter Action Name and Description')
                event.preventDefault()
            }
        }
        else {
            const regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
            if (!regex.test(this.state.image.toLowerCase())) {
                alert("Please upload files having extensions: .jpg or .jpeg or .png only.");
            }
            else {
                if (this.state.actionName !== '') {
                    if (this.state.description !== '') {
                        alert(this.state.actionName + ' uploaded successfully')
                        event.preventDefault()
                    }
                }

                else {
                    alert('Please enter Action Name and Description')
                    event.preventDefault()
                }
            }
        }*/
    }


    render() {
        return (

            <div className="bgimage">
                <Header />
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
                        <form enctype = "multipart/form-data" onSubmit={this.handleSubmit}>

                            <center><h2>Upload Your Action</h2></center>
                            <br />
                            <hr />
                            <br />
                            <div className="form-group">
                                <label>Action Name</label>
                                <input name='actionName' type="text" className="form-control" value={this.state.actionName} onChange={this.handleActionNameChange} />
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <FormControl as="textarea" name="description" value={this.state.description} onChange={this.handleDescriptionChange} />
                            </div>

                            <div className="form-group">
                                <label>Upload Action</label>
                                <input name='image' type="text" className="form-control" value={this.state.action} onChange={this.handleImageChange} />
                            </div>

                            <br />
                            <button type="submit" className="btn btn-danger btn-block">Upload</button>
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
            </div>
        );
    }
}

//<input name='image' type="file" className="form-control" value={this.state.image} onChange={this.handleImageChange} />
export default Upload;

