import React from 'react';

export default class CreateTask extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        "title" :"",
        "description" : ""
      }
    }
    taskFormSubmitHandler = (event) => {
      event.preventDefault();
      if(this.state.title && this.state.description){
        this.props.passTask(this.state.title, this.state.description);
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
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title" onChange={this.titleChangeHandler}/>
            <label htmlFor="description">Description</label>
            <input style={{height:"100px"}} type="text" id="description" name="description" placeholder="description" onChange={this.descriptionChangeHandler} />
            <div>
              <input type="button" value="Cancel" onClick={this.onClickCancel}/>
              <input type="submit" value="Submit"/>
            </div>
        </div>
        </form>
      );
    }
  }