import React, { useState } from "react";
import "./Todo.css";

export default function To_Dos() {

  const [Task, setTask] = useState([
    {
      sno: 1,
      task: "Default Task",
      desc: "This is its description"
    }
  ]);

  const addTask = (task, desc) => {
    let sno;
    if (Task.length === 0) {
      sno = 1;
    }
    else {
      sno = Task[Task.length - 1].sno + 1;
    }
    const myTask = {
      sno : sno,
      task : task,
      desc : desc
    }
    setTask([...Task, myTask]);
  }

  const [task, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addTask(task, desc);
    setTitle("");
    setDesc("");
    settaskbutton(!taskbutton);
  }

  // const onDelete = sno => {
  //   setTask(oldValues => {
  //     return oldValues.filter(val => val.sno !== sno)
  //   })
  // }
  const onDelete = index => {
    setTask(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }

  const editTask = (task, desc, index) => {

  }

  const onEdit = () => {

  }

  // const editSubmit = (e) => {

  // }

  const [taskbutton, settaskbutton] = useState(false);
  const [editTaskbutton, seteditTaskbutton] = useState(false);

  return (
    <div className="Cont">
      <div className="dt">
        <h2>Today</h2>
        <p>{new Date().toDateString()}</p>
      </div>

      <ul className="todos">
        {Task.length === 0 ? "No tasks to display" : 

          Task.map((val, index) => {
            return (
              <li className="item" key={val.sno}>

                <div onClick={() => seteditTaskbutton(!editTaskbutton)} className="edit">
                  <h4>{index}</h4>
                  <h4>{val.task}</h4>
                  <p>{val.desc}</p>
                </div>

                <div onClick={() => onDelete(index)} className="delete">
                  <img src="https://img.icons8.com/?size=512&id=61852&format=png" alt="Task completed" />
                  <p>Task Completed</p>
                </div>

              </li>
            );
          })
        }
        <form className={editTaskbutton ? "" : ""} onSubmit={()=>editTask(task, desc)}>
          <div>
            <input type="text" value={task} onChange={(e) => setTitle(e.target.value)} className="text" id="task"/>
          </div>
          <div>
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="text" id="desc" />
          </div>
          <button type="submit" className="addTask editbutton">
            <img src="https://img.icons8.com/?size=512&id=99964&format=png" alt="Add Task" />
            <p>Add Task</p>
          </button>
        </form>

        <div className="addTask" id ={taskbutton ? "A1" : ""}  onClick={() => settaskbutton(!taskbutton)}>
          <img src="https://img.icons8.com/?size=512&id=99964&format=png" alt="Add Task" />
          <p>Add Task</p>
        </div>

        <form className = {taskbutton ? "" : "formdeactive"} onSubmit={submit}>
          <h4>Task</h4>
          <div>
              <input type="text" value={task} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the Title" className="text" id="task"/>
          </div>
          <div>
              <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter the Description" className="text" id="desc" />
          </div>
          <button type="submit" className="addTask">
            <img src="https://img.icons8.com/?size=512&id=99964&format=png" alt="Add Task" />
            <p>Add Task</p>
          </button>
        </form>

      </ul>
    </div>
  );
}