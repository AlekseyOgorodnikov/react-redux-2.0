import React from 'react';

import { connect } from 'react-redux';

import './App.css';

import { Page } from '../components/Page/Page';
import { User } from '../components/User/User';
import { getPhoto } from '../actions/PageActions';
import { handleLogin } from '../actions/UserAction';

function App(props) {
  const { user, page, getPhotoAction, handleLoginAction } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Top photo</h1>
        <p className="App-intro">
          Maximum likes photo, in my profile vkontake!
        </p>

        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />

        <Page
          photos={page.photos}
          year={page.year}
          getPhoto={getPhotoAction}
          isFetching={page.isFetching}
        />
      </header>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPhotoAction: (year) => dispatch(getPhoto(year)),

  handleLoginAction: () => dispatch(handleLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
