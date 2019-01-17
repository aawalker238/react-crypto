import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import { AppContext } from '../App/AppProvider';

const override = `
  display: block;
  margin: 0 auto;
  position: relative;
  top: 20%;
`;

const Context = props => {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <GridLoader css={override} color="#ffffff" size={70} />;
        }
        if (!firstVisit && !prices) {
          return <GridLoader css={override} color="#ffffff" size={70} />;
        }
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
};

export default Context;
