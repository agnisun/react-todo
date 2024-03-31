import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export function NewTaskForm({ setTaskValue, taskValue, setTasks }) {
  const handleOnChange = (e) => setTaskValue(e.target.value);

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTasks((tasks) =>
        tasks.concat([
          {
            description: taskValue,
            completed: false,
            created: new Date(),
            id: nanoid(),
          },
        ])
      );
      setTaskValue('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        onKeyDown={handleOnKeyDown}
        className="new-todo"
        placeholder="What needs to be done?"
        value={taskValue}
        onChange={handleOnChange}
        autoFocus
      />
    </header>
  );
}

NewTaskForm.propTypes = {
  setTaskValue: PropTypes.func.isRequired,
  taskValue: PropTypes.string.isRequired,
  setTasks: PropTypes.func.isRequired,
};
