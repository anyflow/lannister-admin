import React, {Component} from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ConnectButton from './ConnectButton';
import $ from 'jquery';

require('../styles/Panel.css');

class Panel extends Component {
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
    let body = $('.panel-body');
    let icon = $('i');

    if (this.state.collapsed) {
      body.slideUp();
      icon.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    }
    else {
      body.slideDown();
      icon.removeClass('glyphicon-plus').addClass('glyphicon-minus');
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
              <ConnectButton onClick={(status) => this.props.onConnectionClick(status)} status={this.props.status}/>
            </h1>
          </div>
          <span className="pull-right clickable" onClick={() => this.onClick()}><i ref="icon" className="glyphicon"></i></span>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Panel;