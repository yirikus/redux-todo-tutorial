import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let nextId = 0;

const FilterLink = ({
  filter,
  currentFilter,
  children,
  store
}) => {
  const handleClick = e => {
    e.preventDefault();
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
  };

  if (currentFilter === filter) {
    return (<span>{children}</span>);
  }

  return (
    <a href="#"       
       onClick={handleClick}>
      {children}
    </a>
  );
};

  const getVisibleTodos = (
      todos,
      filter
    ) => {
      switch (filter) {
        case 'SHOW_ALL':
          return todos;
        case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed);
      }
    }

export default class App extends React.Component {
  render() {
    const {
      todos,
      visibilityFilter,
      store
    } = this.props;
  
    const visibleTodos = getVisibleTodos(
      todos, 
      visibilityFilter);
    
    return (
    <div>
      <input ref={node => {
        this.input = node;
      }}/>      
      <button onClick={()=>{
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextId++
          })
          this.input.value = '';
        }}>add</button>
        <ul>
          {visibleTodos.map(todo =>
            <li key ={todo.id}
              onClick={()=>{store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              })}}
              style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
              }}>{todo.text}</li>
          )}
        </ul>
        <p>show: {' '}
        <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter} store={store}>All</FilterLink>{' '}
        <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter} store={store}>Active</FilterLink>{' '}
        <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter} store={store}>Completed</FilterLink>{' '}
        </p>
    </div>
    )
    }
}
