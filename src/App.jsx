import { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import { TaskList, NewTaskForm, Footer } from "./components";

export function App() {
  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState([
    {
      description: "Completed task",
      completed: true,
      created: new Date(),
      isHide: false,
      editing: false,
      id: nanoid(),
      timer: 0,
      running: false,
    },
    {
      description: "Editing task",
      created: new Date(),
      completed: false,
      isHide: false,
      editing: true,
      id: nanoid(),
      timer: 0,
      running: false,
    },
    {
      description: "Active task",
      created: new Date(),
      completed: false,
      isHide: false,
      editing: false,
      id: nanoid(),
      timer: 0,
      running: false,
    },
  ]);

  return (
    <section className="todoapp">
      <NewTaskForm
        taskValue={taskValue}
        setTaskValue={setTaskValue}
        setTasks={setTasks}
      />
      <section className="main">
        <TaskList tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} setTasks={setTasks} />
      </section>
    </section>
  );
}
