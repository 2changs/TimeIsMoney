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
        <TextField
          id="margin-none"
          helperText="First Name"
        />
        <TextField
          id="margin-none"
          helperText="Last Name"
        />
        <br />
        <TextField
          id="margin-none"
          helperText="Address"
        />
        <TextField
          id="margin-none"
          helperText="City"
        />
        <TextField
          id="margin-none"
          helperText="State"
        />
        <TextField
          id="margin-none"
          helperText="Zip"
        />
        <br />
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          isMulti={true}
        />


        <button type="submit">
          Update my information
        </button>
      </form>
    );
  }
}

export default PersonalInfoChangeForm;