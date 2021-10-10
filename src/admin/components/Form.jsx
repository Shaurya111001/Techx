import React, { Component } from 'react';
import axios from 'axios';
import './Formcss.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      admin_email: '',
      employee_email: '',
      designation: '',
      contact: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  namehandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  adminemailhandler = (event) => {
    this.setState({
      admin_email: event.target.value,
    });
  };

  emailhandler = (event) => {
    this.setState({
      employee_email: event.target.value,
    });
  };

  designationhandler = (event) => {
    this.setState({
      designation: event.target.value,
    });
  };
  chandler = (event) => {
    this.setState({
      contact: event.target.value,
    });
  };


  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const config = {
      name: this.state.name,
      admin_email: this.state.admin_email,
      employee_email: this.state.employee_email,
      designation: this.state.designation,
      contact: this.state.contact,
      password: this.state.password,
    };

    axios.post('http://localhost:9000/createemployee', config).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert(
          `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
        );
      }
    });

    this.setState({
      name: '',
      admin_email: '',
      employee_email: '',
      designation: '',
      contact: '',
      password: '',
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <h1>Add Employee</h1>
          <label>Full Name :</label>{' '}
          <input
            required
            type='text'
            value={this.state.name}
            onChange={this.namehandler}
            placeholder='Full Name...'
          />
          <br />
          <label>Admin Email :</label>{' '}
          <input
            required
            type='text'
            value={this.state.admin_email}
            onChange={this.adminemailhandler}
            placeholder=' Admin Email...'
          />
          <br />
          <label>Employee Email :</label>{' '}
          <input
            required
            type='text'
            value={this.state.employee_email}
            onChange={this.emailhandler}
            placeholder='Email...'
          />
          <br />
          <label>Designation</label>{' '}
          <input
            required
            type='text'
            value={this.state.designation}
            onChange={this.designationhandler}
            placeholder='Designation....'
          />
          <br />
          <label>Contact</label>{' '}
          <input
            required
            type='text'
            value={this.state.contact}
            onChange={this.contacthandler}
            placeholder='Contact....'
          />
          <br />
          <label>Password :</label>{' '}
          <input
            required
            type='password'
            value={this.state.password}
            onChange={this.passwordhandler}
            placeholder='Password...'
          />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Form;
