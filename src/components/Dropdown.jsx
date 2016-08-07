import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.data[this.props.selectedIndex]
    }
  }

  render() {
    let menuItems = [];
    for(var i=0; i< this.props.data.length; ++i) {
      let item = this.props.data[i];
      
      menuItems.push(this.props.scalaData
                   ? <MenuItem eventKey={item} key={item}>{item}</MenuItem>
                   : <MenuItem eventKey={item.key} key={item.key}>{item.text}</MenuItem>); 
    }

    let title = this.props.scalaData ? this.state.selected.toString() : this.state.selected.text.toString();
    let key = this.props.scalaData ? this.state.selected : this.state.selected.key;
    
    return (
      <DropdownButton bsSize="small" 
                      bsStyle="default" 
                      title={title} 
                      key={key} 
                      id={this.props.id}>
        {menuItems}
      </DropdownButton>
    );
  }
}

export default Dropdown;