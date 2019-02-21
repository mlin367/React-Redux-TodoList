import React from 'react';

const TodoList = props => (
  <div>
    {props.todos.map((todo, i) => (
      <Todo todo={todo} key={i} />
    ))}
  </div>
);