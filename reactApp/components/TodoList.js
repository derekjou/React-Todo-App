import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="list">
        {this.props.todos.map((task, counter) => (
          <Todo task={task} 
          xClick={()=>this.props.todoXClick(counter)} 
          toggleLevel2={()=>this.props.toggleLevel1(counter)}/>
        ))}
      </ul>
    );
  }
}

export default TodoList;