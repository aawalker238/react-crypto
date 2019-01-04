import React from 'react';
import { AppContext } from '../App/AppProvider';

const Context = props => {
  return (
    <AppContext.Consumer>
      {({ coinList, children }) => {
        if (!coinList) {
          return <div>Loading Coins...</div>;
        }
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
};

export default Context;
