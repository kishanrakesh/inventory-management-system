import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route , BrowserRouter } from 'react-router-dom';
import RegistrationComponent from './EmployeeApp/RegistrationComponent';
import LoginComponent from './EmployeeApp/LoginComponent';
import ItemAssignmentComponent from './ItemApp/ItemAssignmentComponent';
import ItemFormComponent from './ItemApp/ItemFormComponent';

const routing = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/registration" component={RegistrationComponent} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/assignItem" component={ItemAssignmentComponent} />
      <Route path="/addItem" component={ItemFormComponent} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('ims'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
