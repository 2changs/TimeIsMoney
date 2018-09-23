import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';

import { auth } from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class PersonalInfoChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      selectedOption
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="input_field"
          id="margin-none"
          onChange={event => this.setState(updateByPropertyName('first_name', event.target.value))}
          type="text"
          placeholder="First Name"
        />
        <input          
          className="input_field"
          id="margin-none"
          onChange={event => this.setState(updateByPropertyName('last_name', event.target.value))}
          type="text"
          placeholder="Last Name"
        />
        <br />
        <input         
           className="input_field"
          id="margin-none"
          onChange={event => this.setState(updateByPropertyName('address', event.target.value))}
          type="text"
          placeholder="Address"
        />
        <input
         className="input_field"
          id="margin-none"
          onChange={event => this.setState(updateByPropertyName('city', event.target.value))}
          type="text"
          placeholder="City"
        />
        <input    
          className="input_field"
          id="margin-none"
          onChange={event => this.setState(updateByPropertyName('state', event.target.value))}
          type="text"
          placeholder="State"
        />
        <input          
          className="input_field"
          id="margin-none"
          onChange={event => this.setState(updateByPropertyName('zip', event.target.value))}
          type="text"
          placeholder="Zip Code"
        />
        <br />
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          isMulti={true}
        />


        <button className="btn" type="submit">
          Update my information
        </button>
      </form>
    );
  }
}

export default PersonalInfoChangeForm;