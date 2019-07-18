import React from "react";
import ReactDOM from "react-dom";
import TodoList from './TodoList';
import InputLine from './InputLine';

let dummyData = [
  {
    taskText: "cry",
    completed: false
  },
  {
    taskText: "sleep",
    completed: false
  },
  {
    taskText: "repeat",
    completed: true
  }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;