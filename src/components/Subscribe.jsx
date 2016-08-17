import React, {Component} from 'react';
import RadioGroup from './RadioGroup';

class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.qosDataTemplate = {
      qos0: "QoS 0",
      qos1: "1",
      qos2: "2"
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h4>Subscribe</h4>
          <div className="input-group pull-right">
            <input type="text" className="form-control" placeholder="topic filter" />
            <div className="input-group-btn">
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
          <div className="pull-right">
            <RadioGroup
              className="btn-info btn-sm"
              selected="qos1"
              dataTemplate={this.qosDataTemplate}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;