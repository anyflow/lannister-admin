import React, {Component} from 'react';
import Subscription from './Subscription';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

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
            onUnsubscribe={(topicFilter) => this.props.onUnsubscribe(topicFilter) } />
        );

        ++index;
      }
    }

    return (
      <div className="row subscriptions-container">
        <div className="col-xs-12">
          <h4>Subscriptions</h4>
          {items}
        </div>
      </div>
    );
  }
}

const Subscriptions = connect(
  mapStateToProps,
  actionCreators
)(SubscriptionsComponent);

export default Subscriptions;