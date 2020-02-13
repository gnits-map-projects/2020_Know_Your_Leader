import React, { Component } from "react"
import './styles.css'
import Header from './Header'
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    NavDropdown,
    Button,
    ButtonToolbar,
    Image,
    Container,
    Row,
    Col,
    Card,
    CardColumns
  } from 'react-bootstrap'

class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            actionName: '',
            description: '',
            image: ''
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
        const allowedFiles = [".jpg", ".jpeg", ".png"];
        if(this.state.image==''){
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
        else{
            const regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
        if (!regex.test(this.state.image.toLowerCase())) {
            alert("Please upload files having extensions: .jpg or .jpeg or .png only.");
        }
        else{
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
}
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
                        <form onSubmit={this.handleSubmit}>

                            <center><h2>Upload Your Action</h2></center>
                            <br />
                            <hr />
                            <br />
                            <div className="form-group">
                                <label>Action Name</label>
                                <input name='actionName' type="text" className="form-control" value={this.state.actionName} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <FormControl as="textarea" name="description" value={this.state.description} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label>Add Image</label>
                                <input name='image' type="file" className="form-control" value={this.state.image} onChange={this.handleChange} />
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
export default Upload;

