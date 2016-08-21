import React, {Component} from 'react';
import RadioGroup from './RadioGroup';

function color() {
  return 'red';
}

class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.qosDataTemplate = {
      '0': "QoS 0",
      '1': "1",
      '2': "2"
    };

    this.state = {
      topicFilter: '',
      qos: 0,
      color: color()
    };

    this.onSubscribeClick = this.onSubscribeClick.bind(this);
  }

  onSubscribeClick() {
    this.props.onSubscribe(this.state);

    this.setState({ topicFilter: '', qos: 0 });
  }

  render() {
    return (
      <div className="row subscribe-container">
        <div className="col-xs-12">
          <h4>Subscribe</h4>
          <div className="input-group pull-right">
            <input
              type="text"
              className="form-control"
              onChange={(e) => this.setState({ topicFilter: e.target.value }) }
              placeholder="topic filter"
              disabled={this.props.disabled}
              value={this.state.topicFilter} />
            <div className="input-group-btn">
              <button className="btn btn-primary" type="button"
                onClick={() => this.onSubscribeClick() }
                disabled={this.props.disabled}>Subscribe</button>
            </div>
          </div>
          <div className="pull-right">
            <RadioGroup
              className="btn-info btn-sm"
              name="subscribeQos"
              selected={this.state.qos}
              onSelect={(value) => this.setState({ qos: parseInt(value) }) }
              dataTemplate={this.qosDataTemplate}
              disabled={this.props.disabled}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;