import React from 'react';
import ReactDOM from 'react-dom';

export default class Task extends React.Component{
    constructor(props){
      super(props);
      console.log(this.props.parentState);
    }
    onClickEdit = () => {
      this.props.editTask(this.props.task);
    }
    onClickDelete = () => {
      this.props.deleteTask(this.props.task);
    }
    render(){
      return (
        <li>{this.props.task.title} 
          <span style={{ marginLeft:"100px"}}>
            <button className="button" onClick={this.onClickEdit} style={this.props.parentState.showUpdateTask && this.props.task==this.props.parentState.task ?{backgroundColor:"#54769d"}:{}} >Edit</button>
            <button onClick={this.onClickDelete} className="button">Delete</button>
          </span>
        </li>
      );
    }
  }