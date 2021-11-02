import PropTypes from 'prop-types';

const Notification = ({ message }) => <span>{message}</span>;

Notification.propTypes = {
  message: PropTypes.string,
};

export { Notification };
