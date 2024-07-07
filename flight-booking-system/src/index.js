import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from './Components/SignUp';
import LoginForm from './Components/LoginForm';
import ForgotPasswordForm from './Components/ForgotPasswordForm';



const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <LoginForm/>
},
{

path: "/signup",
element:<SignUp/>
},
{

  path: "/forgotpass",
  element:<ForgotPasswordForm/>
  }
])

root.render(


  <RouterProvider router={appRouter}>
    <App />
    </RouterProvider>

);



