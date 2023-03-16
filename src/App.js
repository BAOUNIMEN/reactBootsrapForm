import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './components/Test';
import Profile from './components/Profile';
import Name from "./components/Name";
function App() {
  return (
    <div className="App">
     <Profile />
     <Name />
     <Test />
    </div>
  );
}

export default App;
