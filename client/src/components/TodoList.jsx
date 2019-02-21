import React from 'react';
import { connect } from 'react-redux';
import TodoContainer from './Todo';

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const TodoList = props => (
  <ul>
    {props.todos.map((todo, i) => (
      <TodoContainer todo={todo} key={i} />
    ))}
  </ul>
);

const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;