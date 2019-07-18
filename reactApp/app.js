import React from "react";
import ReactDOM from "react-dom";

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

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let output;
    // if(this.props.task.completed){
    //     output= <div><button>X</button> <strike>{this.props.task.taskText}</strike></div>
    // }
    // else{
    //     output = <div><button>X</button> {this.props.task.taskText}</div>
    // }
    return (
      <li>
        <button>X</button>
        {this.props.task.completed ? <strike>{this.props.task.taskText}</strike> : this.props.task.taskText}
      </li>
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

  render() {
    return (
      <form>
        <input type="text" placeholder="Task" />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
