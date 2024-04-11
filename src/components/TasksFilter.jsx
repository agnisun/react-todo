import { useState } from "react";
import PropTypes from "prop-types";

export function TasksFilter({ setTasks }) {
  const [selected, setSelected] = useState("");

  const showAll = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        task.isHide = false;

        return task;
      }),
    );
    setSelected("all");
  };

  const showCompleted = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (!task.completed) task.isHide = true;
        else task.isHide = false;

        return task;
      }),
    );
    setSelected("completed");
  };

  const showActive = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.completed) task.isHide = true;
        else task.isHide = false;

        return task;
      }),
    );
    setSelected("active");
  };

  return (
    <ul className="filters">
      <li>
        <button
          onClick={showAll}
          className={selected === "all" ? "selected" : ""}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={showActive}
          className={selected === "active" ? "selected" : ""}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={showCompleted}
          className={selected === "completed" ? "selected" : ""}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  setTasks: PropTypes.func.isRequired,
};
