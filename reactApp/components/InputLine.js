import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input className="inputField" type="text" placeholder="Task" />
        <button className="addButton" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

export default InputLine;