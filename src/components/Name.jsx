import React, { Component } from 'react';
import { Header, Container, Form, Button } from 'semantic-ui-react';

class Name extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Container textAlign="center" text>
        <Form>
          <Header textAlign="center">
            Hey!  Welcome to the Safeable emergency planner.  Ready to go?
          </Header>
          <Form.Group widths="equal"  unstackable>
          <Form.Field width="7">
            <input
              placeholder="First Name"
              onChange={this.props.handleChange('firstName')}
              defaultValue={values.firstName}
            />
          </Form.Field>
          <Form.Field width="7">
            <input
              placeholder="Last Name"
              onChange={this.props.handleChange('lastName')}
              defaultValue={values.lastName}
            />
          </Form.Field>
          </Form.Group>
        </Form>
        <div class="container is-fluid">
          <Button onClick={this.saveAndContinue} primary>LET'S DO THIS</Button>
        </div>
       
      </Container>
    );
  }
}

export default Name;
