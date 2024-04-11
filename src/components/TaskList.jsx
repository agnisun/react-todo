import PropTypes from "prop-types";

import { TaskType } from "../types";

import { Task } from "./Task";

export function TaskList({ tasks, setTasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(TaskType).isRequired,
  setTasks: PropTypes.func.isRequired,
};
