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
                name="task"
                type="text" 
                placeholder="Task" 
                onChange={(event)=> this.handleTyping(event)} 
                value={this.state.typedText}/>
        <button className="addButton" 
                type="submit" 
                onClick={(event)=>this.handleSubmit(event)} >
          Add Todo
        </button>
      </form>
    );
  }
}

export default InputLine;