import React from 'react';

import { connect } from 'react-redux';

import { User } from '../components/User/User';
import { handleLogin } from '../actions/UserAction';

function UserContainer(props) {
  const { user, handleLoginAction } = props;

  return (
    <User
      name={user.name}
      isFetching={user.isFetching}
      error={user.error}
      handleLogin={handleLoginAction}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoginAction: () => dispatch(handleLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
