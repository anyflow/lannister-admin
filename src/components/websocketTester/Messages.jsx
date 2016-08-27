import React, {Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

function mapStateToProps(state) {
  return { messages: state.WebsocketClient.messages };
}

class MessagesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedIndex: -1 };
  }

  _message(item) {
    let viewLength = 35;

    return item.topicName.length + item.message.length <= viewLength
      ? item.message.toString()
      : item.message.toString().substr(0, viewLength - item.topicName.length) + "...";
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.messages.length <= 0) {
      this.setState({ selectedIndex: -1 });
    }
    else if (this.state.selectedIndex == -1) {
      this.setState({ selectedIndex: 0 });
    }
  }

  render() {
    let items = [], index = 0;

    for (let i = 0; i < this.props.messages.length; ++i) {
      let item = this.props.messages[i];
      let message = this._message(item);

      items.unshift(
        <a
          key={i}
          className={classNames('list-group-item', 'messages-message', i == this.state.selectedIndex ? 'disabled' : '') }
          onClick={() => this.setState({ selectedIndex: i }) }>
          <span className="messages-topic">{item.topicName}</span>
          <span className="messages-message">{message}</span>
          <span className="pull-right text-muted small">
            <em>{item.date.toString().substr(16, 8) }</em>
          </span>
        </a>
      );
    }

    let selected = this.state.selectedIndex >= 0
      ? this.props.messages[this.state.selectedIndex]
      : {
        topicName: '',
        message: '',
        date: ''
      };

    return (
      <div className="row messages-container">
        <div className="col-xs-12">
          <h4>
            Messages
            <button
              className="btn btn-danger btn-sm pull-right messages-clearAll"
              onClick={() => this.props.removeAllMessages() }
              disabled={this.props.messages.length <= 0}>Clear All</button>
          </h4>
          <div className="row">
            <div className="col-xs-12">
              <div className="pull-right">
                <h5>
                  {selected.topicName}
                  <small> {selected.date.toString() }</small>
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <pre
                className="messages-pre"
                placeholder="message">
                {selected.message.toString() }
              </pre>
              <div className="list-group messages-list">
                {items}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Messages = connect(
  mapStateToProps,
  actionCreators
)(MessagesComponent);

export default Messages;