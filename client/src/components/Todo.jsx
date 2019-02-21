import React from 'react';
import { connect } from 'react-redux';
import toggleTodo from '../actions/toggleTodo';

const mapDispatchToProps = {
  toggle: toggleTodo
};

const Todo = props => (
  <li
    style={props.todo.completed ? { 'textDecoration': 'line-through' } : {'textDecoration': 'none'}}
    onClick={() => props.toggle(props.todo.id)}
  >
    {props.todo.content}
  </li>
);

const TodoContainer = connect(
  null,
  mapDispatchToProps
)(Todo);

export default TodoContainer;
