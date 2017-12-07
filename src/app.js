import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let nextId = 0;

const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick,
  store
}) => {
  const handleClick = e => {
    e.preventDefault();
    onClick(filter);
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

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li 
      onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'
      }}>{text}</li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}/>
    )}
  </ul>
); 

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (

  <p>show: {' '}
    <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter} onClick={onFilterClick}>All</FilterLink>{' '}
    <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter} onClick={onFilterClick}>Active</FilterLink>{' '}
    <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter} onClick={onFilterClick}>Completed</FilterLink>{' '}
  </p>
); 

const AddTodo = ({
  onAddClick
}) => {
  let input;  

  return (
    <div>
      <input ref={node => { input = node;}}/>  
      <button onClick={() => {onAddClick(input.value); 
                              input.value = '';}}>add</button>
    </div>
  );
}

const App = ({
      todos,
      visibilityFilter,
      store
    }) => {
    const visibleTodos = getVisibleTodos(
      todos, 
      visibilityFilter);

    const onFilterClick = (filter) => 
      store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter});
    const onTodoClick = id => 
      store.dispatch({type: 'TOGGLE_TODO', id});  
    const onAddClick = (text) => {
      store.dispatch({
        type: 'ADD_TODO',
        text,
        id: nextId++
      });    
    };
    
    return (
    <div>    
        <AddTodo onAddClick={onAddClick}/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={onTodoClick}/>
        <Footer 
          visibilityFilter={visibilityFilter} 
          onFilterClick={onFilterClick}/>
    </div>
    );
};
export default App;
