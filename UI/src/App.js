import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarContainer from './Containers/nav-bar-container'
import VideoContentHolderContainer from './Containers/video-content-container';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

const store = configureStore();

const App = () => {
  return (
    <div className="App">

      <Provider store={store}>
        <NavBarContainer />
        <VideoContentHolderContainer />
      </Provider>
    </div>
  );
}

export default App;
