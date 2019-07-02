import faker from 'faker';
import _ from 'lodash';
import React, { Component } from 'react';
import { Container, Header, Form, Icon, Button, Dropdown, Select } from 'semantic-ui-react';

const addressDefinitions = faker.definitions.address
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))

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
      <Container textAlign="center" text>
        <Header textAlign="center">
          Thanks, {firstName}.  Almost Done.{' '}
        </Header>
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
        <Form.Field 
          control={Select} 
          options={stateOptions} 
          placeholder='State' 
          onChange={this.props.handleChange('state')}
          defaultValue={values.state}
        />
        <Form.Field>
          <input
            placeholder="Zip"
            onChange={this.props.handleChange('zip')}
            defaultValue={values.zip}
          />
        </Form.Field>
        <Button animated onClick={this.back} secondary>
      <Button.Content visible>Back</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow left' />
      </Button.Content>
    </Button>
            <Button animated onClick={this.saveAndContinue} primary>
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
