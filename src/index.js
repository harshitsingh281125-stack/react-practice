import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './02-ToDo List';
import AccordianTabs from './03-accordian-tabs';
import SignupForm from './04-signup Form';
import SearchFilter from './05-SearchFilter';
// import CounterApp from './01-counter/CounterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterApp/> */}
    {/* <AccordianTabs/> */}
    {/* <SignupForm/> */}
    <SearchFilter/>
    {/* <TodoList/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
