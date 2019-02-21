import React from 'react';

const TodoList = props => (
  <ul>
    {props.todos.map((todo, i) => (
      <Todo todo={todo} key={i} />
    ))}
  </ul>
);

export default TodoList;