import React, {Component} from 'react';
import RadioGroup from './RadioGroup';

class Publish extends Component {
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
            <h4>Publish</h4>
            <div className="input-group pull-right">
              <input type="text" className="form-control" placeholder="topic name" />
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
              placeholder="message" />
          </div>
      </div>
    );
  }
}

export default Publish;