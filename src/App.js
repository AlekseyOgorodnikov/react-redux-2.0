import React from 'react';

import { connect } from 'react-redux';

import './App.css';

function App(props) {
  const { user, page } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Top photo</h1>
        <p className="App-intro">
          Maximum likes photo, in my profile vkontake!
        </p>
        <h2>My name is {user.name}!</h2>
        <p>
          You page {page.photos.length} photo {page.year}
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = (store) => ({ user: store.user, page: store.page });

export default connect(mapStateToProps)(App);
