import { TasksFilter } from './TasksFilter';
import { TaskType } from '../types';
import PropTypes from 'prop-types';

export function Footer({ tasks, setTasks }) {
  const handleOnClick = () => setTasks((tasks) => tasks.filter((task) => !task.completed));

  return (
    <footer className="footer">
      <span className="todo-count">{tasks.filter((task) => !task.completed).length} items left</span>
      <TasksFilter setTasks={setTasks} />
      <button onClick={handleOnClick} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  tasks: PropTypes.arrayOf(TaskType).isRequired,
  setTasks: PropTypes.func.isRequired,
};
