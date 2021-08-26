import React from 'react';

import { PropTypes } from 'prop-types';

export const User = (props) => {
  const { name, error, isFetching } = props;

  return (
    <div>
      {/* Loading */}
      {isFetching ? <p>Loading...</p> : false}
      {/* Error login */}
      {error ? (
        <p>An error occurred during the request, please refresh the page</p>
      ) : (
        ''
      )}
      {/* Name or button in sign in */}
      {name ? (
        <h2>Hello, {name}</h2>
      ) : (
        <button className="button" onClick={props.handleLogin}>
          Войти
        </button>
      )}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
