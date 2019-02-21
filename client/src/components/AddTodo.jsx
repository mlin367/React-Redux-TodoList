import React from 'react';
import { connect } from 'react-redux';
import addTodo from '../actions/addTodo';

const mapDispatchToProps = {
  addTodo
};

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} />
        <button onClick={() => this.props.addTodo(this.state.input)}>
          Add Todo
        </button>
      </div>
    );
  }
}

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;
