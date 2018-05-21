import React from 'react';
import ReactDOM from 'react-dom';
import { HealthcheckCardList } from './components/HealthcheckCardList';
import { ThemeProvider } from 'styled-components';

const theme = {
  colorMidnightBlack: '#1B1B1C',
  colorDarkerBlack: '#2B2B2B',
  colorDuskGrey: '#2E2E2E',
  colorPositiveGreen: '#82C969',
  colorNegativeRed: '#E75655',
  colorInfoGrey: '#DCDCDC',
  colorInfoBlue: '#59B0F6',
  fontFamily:
    'MyriadPro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HealthcheckCardList />
  </ThemeProvider>,
  document.getElementById('app')
);
