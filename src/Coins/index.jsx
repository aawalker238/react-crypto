import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { fontSize1 } from '../Shared/Styles';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';
import { AppContext } from '../App/AppProvider';

const ModalText = styled.div`
  ${fontSize1}
  color: #010e2c;
  text-align: center;
`;

const index = () => {
  return (
    <Page name="coins">
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <AppContext.Consumer>
        {({ shouldShowCoinLimitModal, closeCoinLimitModal }) => {
          return (
            <Popup
              open={shouldShowCoinLimitModal}
              modal
              closeOnDocumentClick
              onClose={closeCoinLimitModal}
            >
              <ModalText>
                {' '}
                You're only allowed to add 10 coins to your favorites at a time.
                Please delete some coins to add new ones.{' '}
              </ModalText>
            </Popup>
          );
        }}
      </AppContext.Consumer>

      <CoinGrid />
    </Page>
  );
};

export default index;
