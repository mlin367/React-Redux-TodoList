let nextId = 0;

const addTodo = content => {
  return {
    type: 'ADD_TODO',
    payload: content,
    id: ++nextId,
    completed: false
  };
};

export default addTodo;
