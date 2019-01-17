import React, { Component } from 'react';
import './App.css';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import AppProvider from './AppProvider';
import Coins from '../Coins';
import Dashboard from '../Dashboard';
import Content from '../Shared/Content';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Coins />
            <Dashboard />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
