import React, { Component } from 'react';
import little from '../assets/svg/chickenLittle.svg';
import {Container, Header, Button, List, Icon } from 'semantic-ui-react';
import axios from 'axios';



class Confirmation extends Component{


  saveAndContinue = (e) => {

      const url = 'https://risk-assessment-tool-api.herokuapp.com/users';
      e.preventDefault();
      console.log(this.props.values);
      axios.post(url, 
      {
        firstName: this.props.values.firstName,
        lastName: this.props.values.lastName,
        email: this.props.values.email,
        streetAddress: this.props.values.streetAddress,
        city: this.props.values.city,
        state: this.props.values.state,
        zip: this.props.values.zip
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
      const {values: { firstName, lastName, email, streetAddress, city, state, zip}} = this.props;
        return(
            <Container textAlign="center">
        <Header textAlign="center">
          Thanks for your patience!
        </Header>
        <img src={little} height="124" width="124" alt="heat-wave" />
        <Header textAlign="center">Please validate your info:</Header>

            
        <List divided relaxed>
    <List.Item>
      <List.Icon name='user circle' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{firstName} {lastName}</List.Header>
        
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{email}</List.Header>
        
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='home' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{streetAddress} {city}, {state} {zip} </List.Header>
        
      </List.Content>
    </List.Item>
  </List>

  <Button animated onClick={this.back}>
      <Button.Content visible>Back</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow left' />
      </Button.Content>
    </Button>
            <Button animated onClick={this.saveAndContinue}>
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