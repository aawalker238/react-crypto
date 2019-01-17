import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`;

const LogoBigFont = styled.span`
  font-size: 1.8em;
  color: #42ff3a;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  text-align: center;
  max-height: 25px;
  ${props =>
    props.active &&
    css`
      border-bottom: 3px solid #03ff03;
    `}
  ${props =>
    props.hidden &&
    css`
      display: none;
    `}
`;

const toProperCase = lower => {
  return lower.charAt(0).toUpperCase() + lower.substring(1);
};

const ControlButton = ({ name }) => {
  return (
    <AppContext.Consumer>
      {({ page, setPage, firstVisit }) => (
        <ControlButtonElem
          onClick={() => setPage(name)}
          active={page === name}
          hidden={firstVisit && name === 'dashboard'}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
};

const AppBar = () => {
  return (
    <Bar>
      <Logo>
        Cryptos
        <LogoBigFont>"R"</LogoBigFont>
        Us
      </Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="coins" />
    </Bar>
  );
};

export default AppBar;
