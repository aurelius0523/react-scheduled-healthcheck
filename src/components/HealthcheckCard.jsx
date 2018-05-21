import React from 'react';
import styled from 'styled-components';

const CardLayout = styled.div`
  display: grid;
  grid-template: auto 40px auto auto 5px / repeat(2, 1fr);
  grid-gap: 3px;
  background-color: ${props => props.theme.colorDuskGrey};
  font-family: ${props => props.theme.fontFamily};
  margin: 10px 0 10px 0;
`;

const Title = styled.div`
  grid-column: 1/-1;
  background-color: ${props => props.theme.colorDarkerBlack};
  color: ${props => props.theme.colorInfoGrey};
  padding: 4px 0 4px 8px;
`;

const UpTime = styled.div`
  grid-column: 1/2;
  color: ${props => props.theme.colorPositiveGreen};
  padding-left: 8px;
  padding-bottom: 8px;
`;

const DownTime = styled.div`
  grid-column: 2/3;
  color: ${props => props.theme.colorNegativeRed};
`;

const EnlargedTimeSpan = styled.span`
  font-size: 2rem;
`;

const ErrorWrapper = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-gap: 2px;
`;

const Error = styled.div`
  color: ${props => props.theme.colorNegativeRed};
  padding-left: 8px;
`;

const PercentageUptime = styled.div`
  grid-column: 1/2;
  font-size: 2.5rem;
  color: ${props => props.theme.colorInfoBlue};
  padding-left: 8px;
`;

const PercentageUptimePercentage = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.colorInfoBlue};
  padding-left: 2px;
`;

const PercentageBar = styled.div`
  grid-column: 1/-1;
  background-color: ${props => props.theme.colorInfoBlue};
  width: ${props => props.percentage}%;
`;
export const HealthcheckCard = props => (
  <CardLayout>
    <Title>{props.data.url}</Title>

    <UpTime>
      <EnlargedTimeSpan>{props.data.uptime} </EnlargedTimeSpan>
      {props.data.uptime > 0 ? 'minutes' : 'minute'}
    </UpTime>
    <DownTime>
      <EnlargedTimeSpan>{props.data.downtime} </EnlargedTimeSpan>
      {props.data.downtime > 0 ? 'minutes' : 'minute'}
    </DownTime>

    <ErrorWrapper>
      {props.data.errorMessageToDowntime.map(error => {
        return (
          <Error key={error.message}>
            {error.message}, {error.downtime} minutes
          </Error>
        );
      })}
    </ErrorWrapper>

    <PercentageUptime>
      {props.data.uptime / (props.data.uptime + props.data.downtime) * 100}
      <PercentageUptimePercentage>%</PercentageUptimePercentage>
    </PercentageUptime>
    <PercentageBar
      percentage={
        props.data.uptime / (props.data.uptime + props.data.downtime) * 100
      }
    />
  </CardLayout>
);
