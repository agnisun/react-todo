import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import { TaskType } from '../types';

export function Task({ task, setTasks }) {
  const { completed, id, description, created } = task;

  const handleOnComplete = () =>
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) task.completed = !completed;

        return task;
      })
    );

  const handleOnDelete = () => setTasks((tasks) => tasks.filter((task) => task.id !== id));

  return (
    <li className={`${task.completed ? 'completed' : ''} ${task.isHide ? 'hidden' : ''}`}>
      <div className="view">
        <input onChange={handleOnComplete} className="toggle" type="checkbox" checked={completed} />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {formatDistanceToNow(created)} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button onClick={handleOnDelete} className="icon icon-destroy"></button>
      </div>
    </li>
  );
}

Task.propTypes = {
  task: TaskType,
  setTasks: PropTypes.func.isRequired,
};
