import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav/nav';
import Task from '../task-module/task';
import CreateTask from '../task-module/create-task';
import UpdateTask from '../task-module/update-task';

export default class Home extends React.Component{
    constructor(){
        super();
        let taskList = 
            [
                { id:2, title: "task 2", description: "good2"},
                { id:3, title: "task 3", description: "good3"},
                { id:1, title: "task 1", description: "good1"},
                { id:4, title: "task 4", description: "good4"},
                { id:5, title: "task 5", description: "good5"},
            ];
        let state = {
            "taskList" : taskList, 
            "showCreateTask" : false,
            "showUpdateTask" : false,
            "currentIndex" : 6
        }
        this.state = state;
    }
    onClickAddNewTask= () => {
        let state = {
            "taskList" : this.state.taskList, 
            "showCreateTask" : !this.state.showCreateTask,
            "showUpdateTask" : false,
            "currentIndex" : this.state.currentIndex
        }
        this.setState(state);
    }
    onClickEditTask=(task)=>{
        let state = {
            "taskList" : this.state.taskList, 
            "showCreateTask" : false,
            "showUpdateTask" : !this.state.showUpdateTask,
            "currentIndex" : this.state.currentIndex,
            "task" : task
        }
        this.setState(state);
    }
    onClickDeleteTask=(task)=>{
        // document.getElementById('root').style.filter = 'blur(5px)';
        let taskList = this.state.taskList;
        let index = taskList.indexOf(task);
        alert("Are you sure to delete this item ?");
        taskList.splice(index, 1);
        let state = {
            "taskList" : taskList, 
            "showCreateTask" : false,
            "showUpdateTask" : false,
            "currentIndex" : this.state.currentIndex,
            "task" : null
        }
        this.setState(state);
    }
    passUpdatedTask= (title, description) => {
        var taskList = this.state.taskList;
        for (var i in taskList) {
            if (taskList[i].id == this.state.task.id) {
                taskList[i].title = title;
                taskList[i].description = description;
                break; 
            }
        }
        let state = {
            "taskList" : taskList, 
            "showCreateTask" : false,
            "showUpdateTask" : false,
            "currentIndex" : this.state.currentIndex,
            "task" : null
        };
        this.setState(state);
    }
    passTask = (title, description)=>{
        let taskList = this.state.taskList;
        taskList.unshift(
            {"id": this.state.currentIndex, "title" : title, "description" : description}
        )
        let state = {
            "taskList" : taskList, 
            "showCreateTask" : false,
            "showUpdateTask" : false,
            "currentIndex" : this.state.currentIndex+1
        }
        this.setState(state);
    }
    passCancelForm=() =>{
        let state = {
            "taskList" : this.state.taskList, 
            "showCreateTask" : false,
            "showUpdateTask" : false,
            "currentIndex" : this.state.currentIndex,
            "task" : null
        }
        this.setState(state);
    }
    render(){
      return (
        <div>
            <Nav/>
            <div className="body-content">
                <h4>Welcome to task management system</h4>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <span>
                    <h4 style={{margin:0,display:"inline-block"}}>Here is your all tasks:</h4> 
                    <button className="button" onClick={this.onClickAddNewTask} style={this.state.showCreateTask ?{backgroundColor:"#54769d"}:{}}>Add new</button>
                </span>
                <ol>
                    {this.state.taskList.map((value, index) => {
                        return <Task task={value} parentState={this.state} key={index} editTask={this.onClickEditTask} deleteTask={this.onClickDeleteTask}/>
                    })}
                </ol>
                {this.state.showCreateTask && <CreateTask passTask={this.passTask} passCancelForm={this.passCancelForm}/>} 
                {this.state.showUpdateTask && <UpdateTask task={this.state.task} passUpdatedTask={this.passUpdatedTask} passCancelForm={this.passCancelForm}/>} 
            </div>
      </div>
      );
    }
  }