import React, {Component} from 'react';
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

    this.state = {
      topicName: '',
      retain: false,
      qos: 0,
      message: ''
    };
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
              disabled={this.props.disabled}/>
            <div className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.props.onPublish(this.state) }
                disabled={this.props.disabled}>Publish</button>
            </div>
          </div>
          <div className="btn-group pull-right">
            <button
              className="btn btn-warning btn-sm"
              data-toggle="button"
              aria-pressed="false"
              onClick={(e) => this.setState({ retain: e.target.getAttribute('aria-pressed') }) }
              disabled={this.props.disabled}>Retain</button>
            <RadioGroup
              className="btn-info btn-sm"
              selected="0"
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
            disabled={this.props.disabled}/>
        </div>
      </div >
    );
  }
}

export default Publish;