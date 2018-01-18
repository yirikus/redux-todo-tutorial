import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Todo from './Todo';
import {toggle} from './actions'


const getVisibleTodos = (
    todos,
    filter
  ) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(t => t.completed);
      case 'active':
        return todos.filter(t => !t.completed);
    }
  };

const TodoList = ({
    todos,
    onTodoClick
  }) => (
      <ul>
        {todos.map(todo =>
          <Todo key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)} />
        )}
      </ul>
);

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(
    state.todos,
	params.filter || 'all'
  )
})
  
  /**
   * Note that connect is order dependant!!!!
   * State = first argument
   * Dispatch = second argument
   */
const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggle }
  )(TodoList));

  export default VisibleTodoList;