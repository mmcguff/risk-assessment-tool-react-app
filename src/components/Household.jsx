import React, { Component } from 'react';
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
    //const {values: {firstName, lastName}} = this.props;
    const { values } = this.props;
    return (
      <Container textAlign='center' text>
        <Header textAlign='center'>
          How many people live in your household?
        </Header>

        <Form color='blue'>
          <Form.Field>
            <input
              type='number'
              placeholder='4'
              onChange={this.props.handleChange('household')}
              defaultValue={values.household}
            />
          </Form.Field>
          <Button animated onClick={this.back} secondary>
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow left' />
            </Button.Content>
          </Button>
          <Button animated onClick={this.saveAndContinue} primary>
            <Button.Content visible>Save</Button.Content>
            <Button.Content hidden>
              <Icon name='save' />
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
