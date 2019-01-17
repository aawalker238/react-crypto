import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Coins/CoinHeaderGrid';
import { numberFormatter } from '../utils/helpers';
import { AppContext } from '../App/AppProvider';

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TicketPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePct = styled.div`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;

const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      display: grid;
      ${fontSize3}
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      justify-items: right;
    `}
  ${props =>
    props.currentFavorite &&
    css`
      pointer-events: none;
      background-color: #2041b0;
      &::after {
        content: '★ Favorite';
        float: right;
        color: gold;
      }
    `}
  ${props =>
    props.compact &&
    props.currentFavorite &&
    css`
      display: grid;
      ${fontSize3}
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      justify-items: right;
      &::after {
        content: '★';
        grid-column-end: none;
        color: gold;
      }
    `}
`;

const ChangePercent = ({ data }) => {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormatter(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifyRight>
  );
};

function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled
      onClick={setCurrentFavorite}
      currentFavorite={currentFavorite}
    >
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TicketPrice>${numberFormatter(data.PRICE)}</TicketPrice>
    </PriceTileStyled>
  );
}

const PriceTileCompact = ({
  sym,
  data,
  currentFavorite,
  setCurrentFavorite
}) => {
  return (
    <PriceTileStyled
      onClick={setCurrentFavorite}
      compact
      currentFavorite={currentFavorite}
    >
      <JustifyLeft>{sym}</JustifyLeft>
      <ChangePercent data={data} />
      <div>${numberFormatter(data.PRICE)}</div>
    </PriceTileStyled>
  );
};

export default function({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact;
  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => {
        return (
          <TileClass
            sym={sym}
            data={data}
            currentFavorite={currentFavorite === sym}
            setCurrentFavorite={() => setCurrentFavorite(sym)}
          />
        );
      }}
    </AppContext.Consumer>
  );
}
