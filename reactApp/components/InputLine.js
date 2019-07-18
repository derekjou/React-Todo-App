import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        typedText: ''
    }
  }

  handleSubmit(event) {
      event.preventDefault();
      this.props.submit(this.state.typedText)
      this.setState({
          typedText: ''
      })
  }

  handleTyping(event){
    this.setState({
        typedText: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input className="inputField" 
                type="text" 
                placeholder="Task" 
                onChange={(event)=> this.handleTyping(event)} />
        <button className="addButton" 
                type="submit" 
                onClick={(event)=>this.handleSubmit(event)} 
                value={this.state.typedText}>
          Add Todo
        </button>
      </form>
    );
  }
}

export default InputLine;