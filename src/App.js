import React from 'react';

import { connect } from 'react-redux';

import './App.css';

function App(props) {
  const { name, surname, age } = props.user;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Top photo</h1>
        <p className="App-intro">
          Maximum likes photo, in my profile vkontake!
        </p>
        <h2>
          My name is {name}, {surname}
        </h2>
        <p>Age {age}</p>
      </header>
    </div>
  );
}

const mapStateToProps = (store) => ({ user: store.user });

export default connect(mapStateToProps)(App);
