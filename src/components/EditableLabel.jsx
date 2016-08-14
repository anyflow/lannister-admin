import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class EditableLabel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      text: props.text
    };

    this.keyPressed = this.keyPressed.bind(this);
    this.inputLostFocus = this.inputLostFocus.bind(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  inputLostFocus() {
    this.setState({ editing: false });
    this.props.onBlur(this.state.text);
  }

  keyPressed(event) {
    if (event.key == 'Enter') {
      this.inputLostFocus();
    }
  }

  render() {
    if (this.state.editing) {
      return <input ref='textInput'
                    type='text'
                    onChange={() => this.setState({ text: this.refs.textInput.value })}
                    onBlur={() => this.inputLostFocus()}
                    onKeyPress={this.keyPressed}
                    value={this.state.text}
                    autoFocus />;
    }
    else {
      return <div onDoubleClick={() => this.setState({ editing: true })} >{this.state.text}</div>;
    }
  }
}

export default EditableLabel;