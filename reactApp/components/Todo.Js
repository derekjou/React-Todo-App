import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.task.completed ? (
          <div className="listElem">
            <button className="listButton done" />
          </div>
        ) : (
          <div className="listElem">
            <button className="listButton notDone" />
          </div>
        )}

        {this.props.task.completed ? (
          <div className="listElem">
            <strike>{this.props.task.taskText}</strike>
          </div>
        ) : (
          <div className="listElem">{this.props.task.taskText}</div>
        )}
      </li>
    );
  }
}

export default Todo;