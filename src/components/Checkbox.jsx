import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.checked };
    this.onChange = this.onChange.bind(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  onChange() {
    this.setState({
      checked: !this.state.checked
    }, () => this.props.onChange(this.state));
  }

  render() {
    return (
      <div>
        <input type="checkbox"
          defaultChecked={this.state.checked}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default Checkbox;