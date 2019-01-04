import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
// import styled, { css } from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;
