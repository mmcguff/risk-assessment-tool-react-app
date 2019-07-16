import React, { Component } from 'react';
import {Container, Header, Button, List, Icon } from 'semantic-ui-react';
import axios from 'axios';
// const LOCAL_API_ENDPOINT = 'http://localhost:3001/api/v1';
const PROD_API_ENDPOING = 'https://risk-assessment-tool-api.herokuapp.com/api/v1';

class Confirmation extends Component{

  saveAndContinue = (e) => {
    const url = `${PROD_API_ENDPOING}/users`;
      e.preventDefault();
      console.log(this.props.values);
      axios.post(url, 
      {
        firstName: this.props.values.firstName,
        lastName: this.props.values.lastName,
        //email: this.props.values.email,
        streetAddress: this.props.values.streetAddress,
        city: this.props.values.city,
        state: this.props.values.state,
        zip: this.props.values.zip,
        household: this.props.values.household
      },
      {
        headers: {'Content-Type': 'application/json'}
      }).then(async response =>{
          console.log(response);
          const id = await response.data._id;
          await this.setState({id});
          await this.props.handleIdChange(id);
          await this.props.nextStep();
        })
        .catch(error =>{
          console.log(error);
        });
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
      const {values: { firstName, lastName, household, streetAddress, city, state, zip}} = this.props;
        return(
            <Container textAlign="center">
        <Header textAlign="center">
          Awesome!  Did I get everything right?
        </Header>
            
        <List divided relaxed>
    <List.Item>
      <List.Icon name='user circle' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Name: {firstName} {lastName}</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='home' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Address: {streetAddress} {city}, {state} {zip} </List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='user plus' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Household Count: {household}</List.Header>
      </List.Content>
    </List.Item>
  </List>

  <Button animated onClick={this.back} secondary>
      <Button.Content visible>Back</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow left' />
      </Button.Content>
    </Button>
            <Button animated onClick={this.saveAndContinue} primary>
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name='life ring' />
      </Button.Content>
    </Button>
            
            </Container>
        )
    }
}

export default Confirmation;