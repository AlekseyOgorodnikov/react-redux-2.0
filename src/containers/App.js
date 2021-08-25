import React from 'react';

import { connect } from 'react-redux';

import './App.css';

import { Page } from '../components/Page/Page';
import { User } from '../components/User/User';

function App(props) {
  const { user, page } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Top photo</h1>
        <p className="App-intro">
          Maximum likes photo, in my profile vkontake!
        </p>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} />
      </header>
    </div>
  );
}

const mapStateToProps = (store) => ({ user: store.user, page: store.page });

export default connect(mapStateToProps)(App);
