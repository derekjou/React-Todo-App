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
            <button className="listButton done" onClick={()=>this.props.toggleLevel2()}></button>
          </div>
        ) : (
          <div className="listElem">
            <button className="listButton notDone" onClick={()=>this.props.toggleLevel2()}></button>
          </div>
        )}

        {this.props.task.completed ? (
          <div className="listElem">
            <strike>{this.props.task.taskText}</strike>
          </div>
        ) : (
          <div className="listElem">{this.props.task.taskText}</div>
        )}

        <div className="listElem">
          <button className="deleteButton" onClick={()=>this.props.xClick()}>x</button>
        </div>
      </li>
    );
  }
}

export default Todo;