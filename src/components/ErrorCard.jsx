import React from 'react';

export default props => (
  <div>
    Message : {props.message},
    {`downtime: ${props.downtime} minutes`}
  </div>
);
