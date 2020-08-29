import React from 'react';

export default class UpdateTask extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        "title" : this.props.task.title,
        "description" : this.props.task.description 
      }
    }
    taskFormSubmitHandler = (event) => {
      event.preventDefault();
      if(this.state.title && this.state.description){
        this.props.passUpdatedTask(this.state.title, this.state.description);
      }
      else{
        alert("Title or description must not be empty");
      }
    }
    titleChangeHandler = (event) => {
      this.setState(
        {
          title: event.target.value,
          description: this.state.description
        });
    }
    descriptionChangeHandler = (event) => {
      this.setState(
        {
          title: this.state.title,
          description: event.target.value
        });
    }
    onClickCancel=()=>{
      this.props.passCancelForm();
    }
    render(){
      return (
        <form onSubmit={this.taskFormSubmitHandler}>
         <div className="form-div">
            <h3>Update {this.props.task.title}</h3>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title" value={this.state.title} onChange={this.titleChangeHandler}/>
            <label htmlFor="description">Description</label>
            <input style={{height:"100px"}} type="text" id="description" name="description" placeholder="description" value={this.state.description} onChange={this.descriptionChangeHandler} />
            <div>
              <input type="button" value="Cancel" onClick={this.onClickCancel}/>
              <input type="submit" value="Submit"/>
            </div>
        </div>
        </form>
      );
    }
  }