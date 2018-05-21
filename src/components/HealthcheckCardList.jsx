import React from 'react';
import { HealthcheckCard } from './HealthcheckCard';
import { subscribeToHealthcheck } from '../scripts/api';
export class HealthcheckCardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: {
        urls: []
      }
    };
  }

  componentWillMount() {
    subscribeToHealthcheck((err, response) => {
      const parsedResponse = JSON.parse(response);
      this.setState({
        response: parsedResponse
      });
    });
  }

  render() {
    return (
      <div className="healthcheckcardlist">
        {this.state.response.urls.map(url => {
          return <HealthcheckCard data={url} key={url.url} />;
        })}
      </div>
    );
  }
}
