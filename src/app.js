import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let nextId = 0;

export default class App extends React.Component {
  render() {
    return (
    <div>
      <input ref={node => {
        this.input = node;
      }}/>
      <button onClick={()=>{
          this.props.store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextId++
          })
          this.input.value = '';
        }}>add</button>
        <ul>
          {this.props.todos.map(todo =>
            <li key ={todo.id}>{todo.text}</li>
          )}
        </ul>
    </div>
    )
    }
}
