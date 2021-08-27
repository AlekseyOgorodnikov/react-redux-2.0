import React from 'react';

import './App.css';

import UserContainer from '../../containers/UserContainer';
import PageContainer from '../../containers/PageContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Top photo</h1>
        <p className="App-intro">
          Maximum likes photo, in my profile vkontake!
        </p>

        <UserContainer />

        <PageContainer />
      </header>
    </div>
  );
}

export default App;
