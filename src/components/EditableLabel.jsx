import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class EditableLabel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      text: props.text
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.inputLostFocus = this.inputLostFocus.bind(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
  }

  inputLostFocus() {
    this.setState({ editing: false });
    this.props.onBlur(this.state.text);
  }

  onKeyPress(event) {
    if (event.key == 'Enter') {
      this.inputLostFocus();
    }
  }

  onDoubleClick() {
    if (this.props.disabled) { return; }

    this.setState({ editing: true });
  }

  render() {
    if (this.state.editing) {
      return <input
        ref='textInput'
        type='text'
        onChange={() => this.setState({ text: this.refs.textInput.value }) }
        onBlur={() => this.inputLostFocus() }
        onKeyPress={this.onKeyPress}
        value={this.state.text}
        disabled={this.props.disabled}
        autoFocus />;
    }
    else {
      return <div onDoubleClick={() => this.onDoubleClick() } >{this.state.text}</div>;
    }
  }
}

export default EditableLabel;