import React from 'react';

import { PropTypes } from 'prop-types';

export const User = (props) => {
  const { name } = props;
  return (
    <div>
      <h2>Hello, {name}</h2>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
};
