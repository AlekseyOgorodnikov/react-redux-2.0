import React from 'react';

import { connect } from 'react-redux';

import './App.css';

import { Page } from '../components/Page/Page';
import { User } from '../components/User/User';
import { getPhotos } from '../actions/PageActions';
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
          getPhotos={getPhotoAction}
          isFetching={page.isFetching}
          error={page.error}
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
  getPhotoAction: (year) => dispatch(getPhotos(year)),

  handleLoginAction: () => dispatch(handleLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
