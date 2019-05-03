import React, { Component } from 'react';
import little from '../assets/svg/chickenLittle.svg';
import { Container, Header, Form, Icon, Button } from 'semantic-ui-react';

class PageTwo extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName }
    } = this.props;
    const { values } = this.props;
    return (
      <Container textAlign="center">
        <Header textAlign="center">
          Thanks, {firstName}.  Almost Done.{' '}
        </Header>
        <img src={little} height="124" width="124" alt="heat-wave" />
        <Header textAlign="center">Where do you live?</Header>
        <Form color='blue' >
        <Form.Field>
          <input
            placeholder="Street"
            onChange={this.props.handleChange('streetAddress')}
            defaultValue={values.streetAddress}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="City"
            onChange={this.props.handleChange('city')}
            defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="State"
            onChange={this.props.handleChange('state')}
            defaultValue={values.state}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Zip"
            onChange={this.props.handleChange('zip')}
            defaultValue={values.zip}
          />
        </Form.Field>
        <Button animated onClick={this.back}>
      <Button.Content visible>Back</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow left' />
      </Button.Content>
    </Button>
            <Button animated onClick={this.saveAndContinue}>
      <Button.Content visible>Continue</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
        </Form>
      </Container>
    );
  }
}

export default PageTwo;