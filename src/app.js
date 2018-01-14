import React from 'react';
import VisibleTodoList from './VisibleTodolist';
import AddTodo from './AddTodo';
import Footer from './Footer';
import './index.css';

const App = ({ params }) => (
    <div>
      <AddTodo/>
      <VisibleTodoList
	  	filter={params.filter || 'all'}/>
      <Footer/>
    </div>
  );
export default App;
