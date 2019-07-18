import React from "react";
import ReactDOM from "react-dom";

let dummyData = ["cry", "sleep", "repeat"];

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <li><button>X</button> {this.props.task}</li>
      );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {dummyData.map(task => (
          <Todo task={task} />
        ))}
      </ul>
    );
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
