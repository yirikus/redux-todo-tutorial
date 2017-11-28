import React from 'react';
import {Link} from 'react-router';

export class Item extends React.Component {

  constructor(props) {
    super(props);
    console.log('construct item ' + this.props.id);
  }
  render() {
    var cssClass='item';
    if (this.props.active) {
      cssClass+=' active';
    }
    return (
        <Link to={this.props.dest} onClick={this.changeColor.bind(this)} className={cssClass}>
              {this.props.children}
        </Link>
    )
  }

  changeColor() {
    this.props.onClickItem(this.props.id);
  }
}


export default class Menu extends React.Component {
 constructor(props) {
   super(props);
   console.log('construct menu');
   this.state = {
     activeItem: 1
   };
 }

  render() {
    // {} evaluuje jakykoliv js expression
    return (
        <div id="menu">
           {this.renderItems()}
        </div>
    )
  }

  setActive(id) {
    console.log('set active ' + id);
    this.setState({
      activeItem: id
    });

  }

  isActive(item) {
    console.log(item.id + ': ' + (item.id === this.state.activeItem));
    return item.id === this.state.activeItem;
  }

  renderItems() {
    return this.props.items.map(
      (item) => {
         return <Item onClickItem={this.setActive.bind(this)}
                      id={item.id}
                      key={item.id}
                      dest={item.dest}
                      active={this.isActive(item)}>{item.name}</Item>
      });
    }
}
