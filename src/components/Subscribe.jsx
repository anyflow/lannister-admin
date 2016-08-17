import React, {Component} from 'react';
import RadioGroup from './RadioGroup';

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
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h4>Subscribe</h4>
          <div className="input-group pull-right">
            <input
              type="text"
              className="form-control"
              onChange={(e) => this.setState({ topicFilter: e.target.value }) }
              placeholder="topic filter" />
            <div className="input-group-btn">
              <button className="btn btn-primary" type="button"
                onClick={() => this.props.onSubscribe(this.state) }>Subscribe</button>
            </div>
          </div>
          <div className="pull-right">
            <RadioGroup
              className="btn-info btn-sm"
              selected="0"
              onSelect={(value) => this.setState({ qos: value }) }
              dataTemplate={this.qosDataTemplate}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;