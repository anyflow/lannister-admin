import React, {Component} from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ConnectButton from './ConnectButton';

require('../../styles/ConnectPanel.css');

class ConnectPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { collapsed: this.props.collapsed };
    this.onClick = this.onClick.bind(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    this.changeCollapseState();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ collapsed: nextProps.collapsed }, () => this.changeCollapseState());
  }

  changeCollapseState() {
    let body = $('.connection-panel-body');

    if (this.state.collapsed) {
      body.slideUp();
      this.refs.icon.setAttribute('class', classNames('glyphicon', 'glyphicon-resize-full'));
    }
    else {
      body.slideDown();
      this.refs.icon.setAttribute('class', classNames('glyphicon', 'glyphicon-resize-small'));
    }
  }

  onClick() {
    this.setState({ collapsed: !this.state.collapsed }, () => this.changeCollapseState());
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-heading-wrapper">
            <h1 className="panel-title">
              {this.props.title}
              <span className="subtitle">{this.props.subtitle}</span>
              <ConnectButton onClick={(status) => this.props.onConnectionClick(status) } status={this.props.status}/>
            </h1>
          </div>
          <span className="pull-right btn-default clickable" onClick={() => this.onClick() }>
            <i ref="icon" className="glyphicon" />
          </span>
        </div>
        <div className="panel-body connection-panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ConnectPanel;