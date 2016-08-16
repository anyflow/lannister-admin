import React, {Component, PropTypes} from 'react';
import RadioGroup from './RadioGroup';

class SubscribePublish extends Component {
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
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h4>Subscribe</h4>
            <div className="input-group pull-right">
              <input type="text" className="form-control" placeholder="Input topic filter" />
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

        <div className="row">
          <div className="col-xs-12">
            <h4>Publish</h4>
            <div className="input-group pull-right">
              <input type="text" className="form-control" placeholder="Input topic name" />
              <div className="input-group-btn">
                <button className="btn btn-primary" type="button">Publish</button>
              </div>
            </div>
            <div className="btn-group pull-right">
              <button className="btn btn-warning btn-sm" data-toggle="button" aria-pressed="false">Retain</button>
              <RadioGroup
                className="btn-info btn-sm"
                selected="qos2"
                dataTemplate={this.qosDataTemplate}/>
            </div>
            <textarea
              className="form-control pull-right" rows="7"
              placeholder="Input message" />
          </div>
        </div>
      </div>
    );
  }
}

export default SubscribePublish;