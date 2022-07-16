import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('App'));
const DATA = [
  {id: "todo-0", name: "Fight", completed: true},
  {id: "todo-1", name: "Defeat", completed: true},
  {id: "todo-2", name: "Rise", completed: true},
  {id: "todo-3", name: "Repeat", completed: true}
]
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);


