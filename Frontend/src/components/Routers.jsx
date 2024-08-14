import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navbar from './Navbar';
import TodoLayout from './TodoLayout';
import Todos from '../Pages/Todos';
import CreateTodo from '../Pages/CreateTodo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoLayout />,
    children: [
      {
        path: 'todo',
        element: <Todos/>,
      },
      {
        path: 'create-todo',
        element: <CreateTodo/>,
      },
    ],
  },
]);

function Routers() {
  return <RouterProvider router={router} />;
}

export default Routers;
