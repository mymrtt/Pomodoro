import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

// App
import Pomodoro from './components/Pomodoro/Pomodoro';
// Store
import configureStore from './store';

const store = configureStore({});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Pomodoro />
      </Provider>
    </div>
  );
}

export default App;
