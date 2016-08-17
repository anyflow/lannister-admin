import React, {Component} from 'react';
import Subscription from './Subscription';

class Subscriptions extends Component {
  render() {
    return (
      <div>
        <h4>Subscriptions</h4>
        <Subscription topicFilter="home/fountain" count="4" />
        <Subscription topicFilter="home/fountain" count="4" />
        <Subscription topicFilter="home/fountain" count="4" />
      </div>
    );
  }
}

export default Subscriptions;