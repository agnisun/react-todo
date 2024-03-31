import { useState } from 'react';
import './App.css';
import { TaskList, NewTaskForm, Footer } from './components';
import { nanoid } from 'nanoid';

function App() {
  const [taskValue, setTaskValue] = useState('');
  const [tasks, setTasks] = useState([
    {
      description: 'Completed task',
      completed: true,
      created: new Date(),
      isHide: false,
      id: nanoid(),
    },
    {
      description: 'Editing task',
      created: new Date(),
      completed: false,
      isHide: false,
      id: nanoid(),
    },
    {
      description: 'Active task',
      created: new Date(),
      completed: false,
      isHide: false,
      id: nanoid(),
    },
  ]);

  return (
    <section className="todoapp">
      <NewTaskForm taskValue={taskValue} setTaskValue={setTaskValue} setTasks={setTasks} />
      <section className="main">
        <TaskList tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} setTasks={setTasks} />
      </section>
    </section>
  );
}

export default App;
