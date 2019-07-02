import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Household from './Household';
import Address from './Address';
import Confirmation from './Confirmation';
import Results from './Results';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        id: ''
    }

    nextStep = () => {
        const {step} = this.state
        this.setState({
            step : step + 1,
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleDropdownChange = event => {
      this.setState({value: event.target.value});
    }

    handleIdChange = (id) => {
      this.setState({id});
    }

    
    render(){
        const {step} = this.state;
        const { firstName, lastName, email, streetAddress, city, state, zip, id} = this.state;
        const values = { firstName, lastName, email, streetAddress, city, state, zip, id};
        switch (step) {
          case 1:
            return (
              <Name
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 2:
            return (
              <Address
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              handleDropdownChange={this.handleDropdownChange}
              values={values}
            />
            );
            case 3:
            return (
              <Household
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            );
          case 4:
            return (
              <Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleIdChange={this.handleIdChange}
                values={values}
              />
            );
          default:
            return <Results values={values} />;
        }   
    }
}

export default MainForm;