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
    let items = [];

    for (let i = 0; i < this.props.subscriptions.length; ++i) {
      let val = this.props.subscriptions[i];

      items.push(
        <Subscription key={i} topicFilter={val.topicFilter} count={val.count} />
      );
    }

    return (
      <div>
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