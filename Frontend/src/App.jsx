// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Todos from './Pages/Todos';
// import CreateTodo from './Pages/CreateTodo';
// import AuthLayout from './components/AuthLayout';
// import LoginPage from './Pages/Login';
// import SignUpPage from './Pages/SignUp';
// import { AuthContext } from './context/AuthContext';
// import TodoLayout from './components/TodoLayout';

// const ProtectedRoute = ({ element: Component }) => {
//   const { user } = useContext(AuthContext);
//   return user ? <Component /> : <Navigate to="/login" />;
// };

// function App() {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading indicator until authentication state is determined
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route element={<AuthLayout />}>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//         </Route>
//         <Route element={<ProtectedRoute element={TodoLayout} />}>
//           <Route path="/" element={<Todos />} />
//           <Route path="/todo" element={<Todos />} />
//           <Route path="/create-todo" element={<CreateTodo />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Todos from './Pages/Todos';
import CreateTodo from './Pages/CreateTodo';
import AuthLayout from './components/AuthLayout';
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import { AuthContext } from './context/AuthContext';
import TodoLayout from './components/TodoLayout';
import ProtectedRoute from './components/ProtectedRoute';
import TodoItems from './Pages/TodoItems';
import CreateTodoItems from './Pages/CreateTodoItems';
import AuthProvider from './context/AuthContext';

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator until authentication state is determined
  }

  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        <Route element={<ProtectedRoute><TodoLayout /></ProtectedRoute>}>
          <Route path="/" element={<Todos />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/create-todo" element={<CreateTodo />} />
          <Route path="/todo-item/:todoId" element={<TodoItems />} /> {/* Updated Route */}
          <Route path="/create-todo-items" element={<CreateTodoItems />} />
        </Route>
      </Routes>
    </Router>
    // <Router>
    //   <AuthProvider>
    //     <Routes>
    //       <Route element={<AuthLayout />}>
    //         <Route path="/login" element={<LoginPage />} />
    //         <Route path="/signup" element={<SignUpPage />} />
    //       </Route>

    //       <Route element={<ProtectedRoute><TodoLayout /></ProtectedRoute>}>
    //         <Route path="/" element={<Todos />} />
    //         <Route path="/todo" element={<Todos />} />
    //         <Route path="/create-todo" element={<CreateTodo />} />
    //         <Route path="/todo-item/:todoId" element={<TodoItems />} /> {/* Updated Route */}
    //         <Route path="/create-todo-items" element={<CreateTodoItems />} />
    //       </Route>
    //     </Routes>
    //   </AuthProvider>
    // </Router>
  );
}

export default App;
