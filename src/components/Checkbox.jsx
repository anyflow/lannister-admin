import React, {Component} from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.checked };
    this.onChange = this.onChange.bind(this);
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