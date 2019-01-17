import React from 'react';
import ReactHighcharts from 'react-highcharts';
import GridLoader from 'react-spinners/GridLoader';
import highchartsConfig from './HighchartsConfig';
import HighchartsTheme from './HighchartsTheme';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ChartSelect from './ChartSelect';

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
      {({ historical, changeChartSelect }) => (
        <Tile>
          <ChartSelect
            defaultValue="months"
            onChange={e => changeChartSelect(e.target.value)}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </ChartSelect>
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
