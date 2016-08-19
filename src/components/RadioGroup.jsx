import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class RadioGroup extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: this.props.selected };
    this.onClick = this.onClick.bind(this);
  }

  onClick(target) {
    if (this.state.selected == target.id ||
      this.props.disabled) { return; }

    this.setState({ selected: target.id });

    if (this.props.hasOwnProperty('onSelect')) {
      this.props.onSelect(target.id);
    }
  }

  render() {
    let radioButtons = [];

    for (let key in this.props.dataTemplate) {
      let className = classNames(
        this.props.className,
        'btn',
        this.props.selected == key ? 'active' : '',
        this.props.disabled ? 'disabled' : '');

      radioButtons.push(
        <label
          key={key}
          id={key}
          className={className}
          onClick={(e) => this.onClick(e.target) }
          disabled={this.props.disabled}>
          <input type="radio" disabled={this.props.disabled}/>{this.props.dataTemplate[key]}
        </label>
      );
    }

    return (
      <div className="btn-group" data-toggle="buttons">
        {radioButtons}
      </div>
    );
  }
}

export default RadioGroup;