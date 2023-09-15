

import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  const checkHandler = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteHandler = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };
  return (
    <>
      <Card>
        <h1 className="card-h1">ToDo list </h1>
        <Form addTask={addTask} />
        <TaskList tasks={tasks} checkHandler={checkHandler} deleteHandler={deleteHandler} />
      </Card>

    </>
  )
}

export default App
