
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { content: action.payload, id: action.id, completed: action.completed }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (index === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todos;
