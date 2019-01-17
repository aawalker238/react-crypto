import React from 'react';
import ReactHighcharts from 'react-highcharts';
import GridLoader from 'react-spinners/GridLoader';
import highchartsConfig from './HighchartsConfig';
import HighchartsTheme from './HighchartsTheme';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const override = `
  display: block;
  margin: 0 auto;
  position: relative;
  top: 20%;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHighcharts config={highchartsConfig(historical)} />
          ) : (
            <GridLoader css={override} color="#ffffff" size={50} />
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
