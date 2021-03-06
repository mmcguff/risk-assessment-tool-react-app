import React, { Component } from 'react';
import fire from '../assets/svg/005-fire.svg';
import flood from '../assets/svg/007-flood.svg';
import drought from '../assets/svg/010-drought.svg';
import hurricane from '../assets/svg/011-wind.svg';
import tornado from '../assets/svg/003-tornado.svg';
import earthquake from '../assets/svg/001-earthquake.svg';
import snow from '../assets/svg/020-snow.svg';
import { Container, Button, Icon } from 'semantic-ui-react';
const LOCAL = 'http://localhost:3001/api/v1';
const PROD = 'https://risk-assessment-tool-api.herokuapp.com/api/v1';
const BASEURL = process.env.NODE_ENV === 'development' ? LOCAL : PROD;

class Success extends Component {
  state = {
    loading: true,
    result: null,
    disastersData: null,
    demographicsData: null,
    zipData: null
  };

  async componentDidMount() {
    const fetchData = () => {
      const urls = [
        `${BASEURL}/users/${this.props.values.id}`,
        `${BASEURL}/incidents/disasters/${this.props.values.state}/${this.props.values.zip}`,
        `${BASEURL}/incidents/demographics/${this.props.values.zip}`,
        `${BASEURL}/incidents/zip-data/${this.props.values.zip}`
      ];
    
      const allRequests = urls.map(url => 
        fetch(url, { mode: 'no-cors' }).then(response => response.json())
      );
    
      return Promise.all(allRequests);
    };

    fetchData().then(arrayOfResponses => 
      this.setState({
        result: arrayOfResponses[0],
        disastersData : arrayOfResponses[1],
        demographicsData: arrayOfResponses[2],
        zipData: arrayOfResponses[3],
        loading: false
      }),
    );
}

  render() {
    const {
      values: { firstName, lastName, city, state, household }
    } = this.props;
    return (
      <div>
        {this.state.loading || !this.state.result ? (
          <div>loading...</div>
        ) : (
          <div>
            <h1 className='title has-text-centered'>
              <b>
                {firstName} {lastName}
              </b>
            </h1>
            <h2 className='title has-text-centered'>
              Here is your completed Risk Assessment based upon where you live
              in:
            </h2>
            <h3 className='title has-text-centered'>
              <b>
                {city}, {state}
              </b>
            </h3>
            <h3 className='title has-text-centered'>
              <b>Household Size: {household}</b>
            </h3>
            <section className='hero is-medium is-primary'>
              <nav className='level is-warning'>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Fire</p>
                    <img src={fire} height='65' width='68' alt='heat-wave' />
                    <p className='title'>{this.state.result.fire}%</p>
                    <progress
                      className='progress is-danger'
                      value={this.state.result.fire}
                      max='100'
                    />
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Flood</p>
                    <img src={flood} height='65' width='68' alt='heat-wave' />
                    <p className='title'>{this.state.result.flood}%</p>
                    <progress
                      className='progress is-danger'
                      value={this.state.result.flood}
                      max='100'
                    />
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Drought</p>
                    <img src={drought} height='65' width='68' alt='heat-wave' />
                    <p className='title'>{this.state.result.drought}%</p>
                    <progress
                      className='progress is-danger'
                      value={this.state.result.drought}
                      max='100'
                    />
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Hurricane</p>
                    <img
                      src={hurricane}
                      height='65'
                      width='68'
                      alt='heat-wave'
                    />
                    <p className='title'>{this.state.result.hurricane}%</p>
                    <progress
                      className='progress is-danger'
                      value={this.state.result.hurricane}
                      max='100'
                    />
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Tornado</p>
                    <img src={tornado} height='65' width='68' alt='heat-wave' />
                    <p className='title'>{this.state.result.tornado}%</p>
                    <progress
                      className='progress is-danger'
                      value={this.state.result.tornado}
                      max='100'
                    />
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Earthquake</p>
                    <img
                      src={earthquake}
                      height='65'
                      width='68'
                      alt='heat-wave'
                    />
                    <p className='title'>{this.state.result.earthquake}%</p>
                    <progress
                      className='progress is-danger'
                      value={this.state.result.earthquake}
                      max='100'
                    />
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Winter Storm</p>
                    <img src={snow} height='65' width='68' alt='heat-wave' />
                    <p className='title'>{this.state.result.snow}%</p>
                    <progress
                      className='progress is-danger'
                      value={this.state.result.snow}
                      max='100'
                    />
                  </div>
                </div>
              </nav>
            </section>

          <p>{JSON.stringify(this.state.disastersData)}</p>
          <p>{JSON.stringify(this.state.demographicsData)}</p>
          <p>{JSON.stringify(this.state.zipData)}</p>

            {/* <section className="hero is-medium is-primary">
          <div className="hero-body">
            <div className="container">
              <img src={flood} height="124" width="124" alt="heat-wave" />
              <span className="tag is-danger">High Risk</span>

              <h1 className="title">Flooding</h1>

              <h2 className="subtitle">
                <i>
                  Wether from rain or rising water, even an inch of water can do
                  incredible damage even after the water lowers.
                </i>
              </h2>
              <div className="container has-text-centered">
                <a className="button is-danger is-large" href="#contact">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </section> */}

            <footer className='footer'>
              <Container textAlign='center'>
                <Button animated onClick={this.saveAndContinue} primary>
                  <Button.Content visible>Save my results</Button.Content>
                  <Button.Content hidden>
                    <Icon name='life ring' />
                  </Button.Content>
                </Button>
              </Container>
              <div className='content has-text-centered'>
                <p>
                  <strong>Icons</strong> made by
                  <a href='https://www.flaticon.com/authors/smashicons'>
                    Smashicons
                  </a>
                  from <a title='Flaticon'>www.flaticon.com</a> is licensed by
                  <a
                    href='http://creativecommons.org/licenses/by/3.0/'
                    title='Creative Commons BY 3.0'
                    target=''
                  >
                    CC 3.0 BY
                  </a>
                </p>
              </div>
            </footer>
          </div>
        )}
      </div>
    );
  }
}
export default Success;