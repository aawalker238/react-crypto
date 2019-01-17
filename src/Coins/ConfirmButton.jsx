import React from 'react';
import styled, { keyframes } from 'styled-components';
import Popup from 'reactjs-popup';
import { AppContext } from '../App/AppProvider';
import { fontSize1, fontSize2 } from '../Shared/Styles';

const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 2px 14px rgba(204,169,44, 0);
      box-shadow: 0 0 2px 14px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: #02245e;
  ${fontSize1}
  padding: 5px;
  cursor: not-allowed;
  background-color: #01112c;
  border: 2px solid #02245e;
  border-style: inset;
`;

const ConfirmationPending = styled(ConfirmButtonStyled)`
  border: 2px solid #ffffff;
  background-color: #2041b0;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: ${pulse} 1s infinite;
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const Tooltip = styled.div`
  ${fontSize2}
  color: #010e2c;
  text-align: center;
`;

const ConfirmButton = () => {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites, needsConfirmation }) => (
        <CenterDiv>
          {needsConfirmation ? (
            <ConfirmationPending onClick={confirmFavorites}>
              Confirm Favorites
            </ConfirmationPending>
          ) : (
            <Popup
              trigger={
                <ConfirmButtonStyled>Confirm Favorites</ConfirmButtonStyled>
              }
              position="top center"
              on="hover"
            >
              <Tooltip>
                {' '}
                Click on the tiles below to add coins to your favorites.{' '}
              </Tooltip>
            </Popup>
          )}
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmButton;
