import PropTypes from 'prop-types';

export const TaskType = PropTypes.shape({
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  created: PropTypes.instanceOf(Date).isRequired,
  isHide: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
});
