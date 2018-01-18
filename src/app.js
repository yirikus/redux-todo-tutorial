import React from 'react';
import VisibleTodoList from './VisibleTodolist';
import AddTodo from './AddTodo';
import Footer from './Footer';
import './index.css';

const App = () => (
    <div>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  );
export default App;
