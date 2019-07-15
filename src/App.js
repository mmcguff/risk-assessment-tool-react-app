import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import MainForm from './components/MainForm';

import './App.css';
import './bulma.css';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <MainForm/>
      </BrowserRouter>
    )
  }
}

export default App;
