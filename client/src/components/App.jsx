import React from 'react';
import AddTodoContainer from './AddTodo';
import TodoListContainer from './TodoList';

const App = props => (
  <div className="App">
    <h1>Todo List</h1>
    <AddTodoContainer />
    <TodoListContainer />
  </div>
);

export default App