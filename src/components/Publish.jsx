import React, {Component} from 'react';
import classNames from 'classnames';
import RadioGroup from './RadioGroup';

require('../styles/Publish.css');

class Publish extends Component {
  constructor(props) {
    super(props);

    this.qosDataTemplate = {
      '0': "QoS 0",
      '1': "1",
      '2': "2"
    };

    this.initialState = {
      topicName: '',
      retain: false,
      qos: 0,
      message: ''
    };

    this.state = this.initialState;
  }

  render() {
    return (
      <div className="row publish-container">
        <div className="col-xs-12">
          <h4>Publish</h4>
          <div className="input-group pull-right">
            <input
              type="text"
              className="form-control"
              placeholder="topic name"
              onChange={(e) => this.setState({ topicName: e.target.value }) }
              disabled={this.props.disabled}
              value={this.state.topicName}/>
            <div className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => { this.props.onPublish(this.state); this.setState(this.initialState); } }
                disabled={this.props.disabled}>Publish</button>
            </div>
          </div>
          <div className="btn-group pull-right">
            <button
              className={classNames('btn','btn-warning', 'btn-sm', this.state.retain ? 'active': '')}
              data-toggle="button"
              aria-pressed={this.state.retain}
              onClick={(e) => this.setState({ retain: e.target.getAttribute('aria-pressed') }) }
              disabled={this.props.disabled}>Retain</button>
            <RadioGroup
              className="btn-info btn-sm"
              selected={this.state.qos}
              name="publishQos"
              onSelect={(value) => this.setState({ qos: value }) }
              dataTemplate={this.qosDataTemplate}
              disabled={this.props.disabled}/>
          </div>
          <textarea
            className="form-control pull-right"
            rows="7"
            onChange={(e) => this.setState({ message: e.target.value }) }
            placeholder="message"
            value={this.state.message}
            disabled={this.props.disabled}/>
        </div>
      </div >
    );
  }
}

export default Publish;