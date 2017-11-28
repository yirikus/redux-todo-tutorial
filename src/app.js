import React from 'react';
import Menu from './menu';
import Content from './content';

var ITEMS = [
  {id:1, name: 'Domu', active: false, dest:'/'},
  {id:2, name: 'Nikam', active: false, dest:''},
  {id:3, name: 'Pryc', active: false, dest:''},
]

export default class App extends React.Component {
  render() {
    return <div>
              <Menu items={ITEMS}/>
              {this.props.children}
            </div>
    }
}
