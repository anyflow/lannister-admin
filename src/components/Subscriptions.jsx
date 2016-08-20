import React, {Component} from 'react';
import Subscription from './Subscription';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

require('../styles/Subscriptions.css');

function mapStateToProps(state) {
  return { subscriptions: state.WebsocketClient.subscriptions };
}

class SubscriptionsComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let index = 0, items = [];

    for (let key in this.props.subscriptions) {
      if (this.props.subscriptions.hasOwnProperty(key)) {
        let subscription = this.props.subscriptions[key];

        items.push(
          <Subscription
            key={index}
            topicFilter={key}
            count={subscription.count}
            qos={subscription.qos}
            disabled={this.props.disabled}
            onUnsubscribe={(topicFilter) => this.props.onUnsubscribe(topicFilter)} />
        );

        ++index;
      }
    }

    return (
      <div className="subscriptions-container">
        <h4>Subscriptions</h4>
        {items}
      </div>
    );
  }
}

const Subscriptions = connect(
  mapStateToProps,
  actionCreators
)(SubscriptionsComponent);

export default Subscriptions;