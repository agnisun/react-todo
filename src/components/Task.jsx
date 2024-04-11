import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { TaskType } from "../types";

export function Task({ task, setTasks }) {
  const { completed, id, description, created, editing } = task;
  const [value, setValue] = useState(task.description);

  useEffect(() => {
    let timeout;

    timeout = setInterval(() => {
      if (task.running)
        setTasks((tasks) =>
          tasks.map((task) => {
            if (task.id === id) task.timer += 1;

            return task;
          }),
        );
    }, 1000);

    return () => clearInterval(timeout);
  }, []);

  const handleOnComplete = () =>
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) task.completed = !completed;

        return task;
      }),
    );

  const handleOnEditing = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) task.editing = !editing;

        return task;
      }),
    );
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnDelete = () =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter")
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === id) {
            task.description = value;
            task.editing = false;
          }

          return task;
        }),
      );
    else if (e.key === "Escape")
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === id) {
            task.editing = false;
            setValue(task.description);
          }

          return task;
        }),
      );
  };

  const handleOnStopTimer = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          task.running = false;
        }

        return task;
      }),
    );
  };

  const handleOnStartTimer = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          task.running = true;
        }

        return task;
      }),
    );
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <li
      className={`${task.completed ? "completed" : ""} ${task.isHide ? "hidden" : ""} ${task.editing ? "editing" : ""}`}
    >
      <div className="view">
        <input
          onChange={handleOnComplete}
          className="toggle"
          type="checkbox"
          checked={completed}
        />
        <label>
          <span className="description">
            {task.running ? (
              <button
                onClick={handleOnStopTimer}
                className="icon icon-pause"
              ></button>
            ) : (
              <button
                onClick={handleOnStartTimer}
                className="icon icon-play"
              ></button>
            )}
            {formatTime(task.timer)}
          </span>
          <span className="description">{description}</span>
          <span className="created">
            created {formatDistanceToNow(created)} ago
          </span>
        </label>
        <button onClick={handleOnEditing} className="icon icon-edit"></button>
        <button onClick={handleOnDelete} className="icon icon-destroy"></button>
      </div>
      {task.editing && (
        <input
          onKeyDown={handleOnKeyDown}
          onChange={handleOnChange}
          value={value}
          type="text"
          className="edit"
        />
      )}
    </li>
  );
}

Task.propTypes = {
  task: TaskType,
  setTasks: PropTypes.func.isRequired,
};
