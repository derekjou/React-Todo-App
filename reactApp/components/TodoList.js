import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="list">
        {this.props.todos.map(task => (
          <Todo task={task} />
        ))}
      </ul>
    );
  }
}

export default TodoList;