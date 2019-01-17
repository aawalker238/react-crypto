import React from 'react';
import styled from 'styled-components';
import { debounce, includes, pickBy } from 'lodash';
import fuzzy from 'fuzzy';
import { backgroundColor2, fontSizeBigger } from '../Shared/Styles';
import { AppContext } from '../App/AppProvider';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSizeBigger}
  border: 1px solid;
  height: 4rem;
  color: #1163c9;
  place-self: center left;
  width: 40%;
  padding-left: 1rem;
`;

const handleFilter = debounce((inputValue, setFilteredCoins, coinList) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(results => results.string);
  let filteredCoins = pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return includes(fuzzyResults, symKey) || includes(fuzzyResults, coinName);
  });
  setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, setFilteredCoins, coinList);
};

export default function() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2>Search Coins</h2>
          <SearchInput
            onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
