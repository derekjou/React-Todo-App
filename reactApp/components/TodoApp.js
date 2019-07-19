import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import InputLine from "./InputLine";

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

  addTodo(task) {
    dummyData.push({
      taskText: task,
      completed: false
    });
    this.setState({
      todos: dummyData
    });
  }

  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({
      todos: dummyData
    });
  }

  toggleTodo(index) {
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({
      todos: dummyData
    });
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }

  render() {
    return (
      <div>
        <InputLine submit={task => this.addTodo(task)} />
        <TodoList
          todos={this.state.todos}
          todoXClick={index => this.removeTodo(index)}
          toggleLevel1={index => this.toggleTodo(index)}
        />
      </div>
    );
  }
}

export default TodoApp;
