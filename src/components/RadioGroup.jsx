import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class RadioGroup extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = { selected: this.props.selected };
  }

  onClick(target) {
    if (this.state.selected == target.id) { return; }

    this.setState({selected: target.id});

    if (this.props.hasOwnProperty('onSelect')) {
      this.props.onSelect(target.id);
    }
  }

  render() {
    let radioButtons = [];

    for (let key in this.props.dataTemplate) {
      let className = classNames(this.props.className, 'btn', this.props.selected == key ? 'active' : '');

      radioButtons.push(
        <label key={key} id={key} className={className} onClick={(event) => this.onClick(event.target) }>
          <input type="radio"/>{this.props.dataTemplate[key]}
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