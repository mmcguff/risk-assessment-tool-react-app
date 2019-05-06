import React, { Component } from 'react';
import heatWave from '../assets/svg/024-sun.svg';
import houseFire from '../assets/svg/005-fire.svg';
import wildFire from '../assets/svg/004-forest-fire.svg';
import drought from '../assets/svg/010-drought.svg';
import flood from '../assets/svg/007-flood.svg';
import hurricane from '../assets/svg/011-wind.svg';
import tornado from '../assets/svg/003-tornado.svg';
import winterStorm from '../assets/svg/020-snow.svg';
import earthquake from '../assets/svg/001-earthquake.svg';
import little from '../assets/svg/chickenLittle.svg';

class Success extends Component {
  render() {
    const {
      values: { firstName, lastName, id}
    } = this.props;
    return (
      <div>
        <h1 className="title has-text-centered">
          {firstName} {lastName} {id}
          <img src={little} height="64" width="64" alt="heat-wave" /> Here is
          your completed Risk Assessment:
        </h1>

        <section className="hero is-medium is-primary">
          <nav className="level is-warning">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">House Fire</p>
                <img src={houseFire} height="65" width="68" alt="heat-wave" />
                <p className="title">33%</p>
                <progress className="progress is-info" value="33" max="100" />
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Wild Fire</p>
                <img src={wildFire} height="65" width="68" alt="heat-wave" />
                <p className="title">45%</p>
                <progress className="progress is-warning" value="45" max="100" />
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Heat Wave</p>
                <img src={heatWave} height="65" width="68" alt="heat-wave" />
                <p className="title">65%</p>
                <progress className="progress is-warning" value="65" max="100" />
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Drought</p>
                <img src={drought} height="65" width="68" alt="heat-wave" />
                <p className="title">11%</p>
                <progress className="progress is-info" value="11" max="100" />
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Flood</p>
                <img src={flood} height="65" width="68" alt="heat-wave" />
                <p className="title">83%</p>
                <progress className="progress is-danger" value="83" max="100" />
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Hurricane</p>
                <img src={hurricane} height="65" width="68" alt="heat-wave" />
                <p className="title">78%</p>
                <progress className="progress is-danger" value="78" max="100" />
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Tornado</p>
                <img src={tornado} height="65" width="68" alt="heat-wave" />
                <p className="title">62%</p>
                <progress className="progress is-warning" value="62" max="100" />
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Winter Storm</p>
                <img src={winterStorm} height="65" width="68" alt="heat-wave" />
                <p className="title">5%</p>
                <progress className="progress is-info" value="5" max="100" />
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Earthquake</p>
                <img src={earthquake} height="65" width="68" alt="heat-wave" />
                <p className="title">2%</p>
                <progress className="progress is-info" value="2" max="100" />
              </div>
            </div>
          </nav>
        </section>

        <section className="hero is-medium is-primary">
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
        </section>

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Icons</strong> made by
              <a href="https://www.flaticon.com/authors/smashicons">
                Smashicons
              </a>
              from <a title="Flaticon">www.flaticon.com</a> is licensed by
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target=""
              >
                CC 3.0 BY
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Success;
