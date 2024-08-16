// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';

//  function Todos() {
//    const [todos, setTodos] = useState([]);
//    const [ currentTodo, setCurrentTodo] = useState({title: '', description: ''})
//    const [ editIndex, setEditIndex ] = useState(null)
//    const [isEditing, setIsEditing] = useState(false)
//    const {user} = useContext(AuthContext)

//   useEffect(() => {
//     // const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     // setTodos(storedTodos);
//     const fetchTodo = async() =>{
//       try{
//           const response = await axios.get('http://localhost:8000/todo/');
//           console.log(response);
//           setTodos(response.data)
//         }
//       catch(error){
//         console.log("Something went wrong");
//       }
//     }
//     fetchTodo()
//   }, []);

//   const handleDelete = async(id) => {
//     // const updatedTodos = todos.filter((_, i) => i !== index);
//     // setTodos(updatedTodos);
//     // localStorage.setItem('todos', JSON.stringify(updatedTodos));
//     try {
//       await axios.delete(`http://localhost:8000/todo/deleteTodo/${id}`)
//       setTodos(todos.filter(todo => todo._id !== id))
//     } catch (error) {
//       console.log("Failed to delete Todo" + error);
//     }
//   };
  

//   const handleEdit = (index) => {
//     // Add your edit logic here
//     setEditIndex(index)
//     setCurrentTodo({
//       title: todos[index].title,
//       description : todos[index].description
//     })
//     setIsEditing(true)

//   };

//   const handleSave = async()=>{
//     try {
//       const response = await axios.put(`http://localhost:8000/todo/${todos[editIndex]._id}`, currentTodo)
//       updatedTodos = [...todos]
//       updatedTodos[editIndex] = response.data
//       setTodos(updateTodos)
//       setIsEditing(false)
//       setCurrentTodo({title: '', description: ''})
//     } catch (error) {
      
//     }
//     // const updateTodos = [...todos]
//     // updateTodos[editIndex] = currentTodo;
//     // setTodos(updateTodos)
//     // localStorage.setItem('todos', JSON.stringify(updateTodos))
//     // setIsEditing(false)
//     // setCurrentTodo({title: '', description: ''})
//   }
//   const handleCancel =()=>{
//     setIsEditing(false)
//     setCurrentTodo({title: '', description: ''})
//   }
//   // const refreshTodo = ()=> {
//   //   fetchTodo()
//   // }
//   return (
//     <div className="container mx-auto mt-8">
//       Welcome {user.fullName}
//       <ul>
//         {todos?.map((todo) => (
//           <li key={todo._id} className="block border rounded-lg p-4 mb-4 shadow-md">
//             <h1 className="text-2xl font-bold mb-2">{todo.title}</h1>
//             <p className="text-sm font-semibold mb-4">
//               {todo.description}
//             </p>
//             <div className="flex justify-end space-x-2">
//               <button 
//                 className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
//                 onClick={() => handleDelete(todo._id)}
//               >
//                 Delete
//               </button>
//               <button 
//                 className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded"
//                 onClick={() => handleEdit(todo._id)}
//               >
//                 Edit
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {
//         isEditing && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//             <div className='bg-white p-4 rounded-lg shadow-lg '>
//               <h2 className='text-xl font-bold mb-4'>Edit Todo</h2>
//               <input
//                 type='text'
//                 className='p-2 mb-4 w-full border rounded'
//                 placeholder="Title"
//                 value={currentTodo.title}
//                 onChange={(e)=> setCurrentTodo({...currentTodo, title: e.target.value})}
//               />
//               <textarea
//                 className='p-2 mb-4 w-full border rounded'
//                 placeholder="Description"
//                 value={currentTodo.description}
//                 onChange={(e)=> setCurrentTodo({...currentTodo, description: e.target.value})}
//               />
//               <div className='flex justify-end space-x-2'>
//                 <button
//                 className='bg-gray-500 hover:bg-gray-700 py-2 px-4 text-white rounded'
//                 onClick={handleCancel}>
//                   Cancel
//                 </button>
//                 <button
//                 className='bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded'
//                 onClick={handleSave}>
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )
//       }
//     </div>
//   );
// }

// export default Todos;


// import React, { useState, useEffect } from 'react';

// function Todos() {
//   const [todos, setTodos] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTodo, setCurrentTodo] = useState({ title: '', description: '' });
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(storedTodos);
//   }, []);

//   const handleDelete = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setCurrentTodo({
//       title: todos[index].title,
//       description: todos[index].description,
//     });
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     const updatedTodos = [...todos];
//     updatedTodos[editIndex] = currentTodo;
//     setTodos(updatedTodos);
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//     setIsEditing(false);
//     setCurrentTodo({ title: '', description: '' });
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setCurrentTodo({ title: '', description: '' });
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} className="block border rounded-lg p-4 mb-4 shadow-md">
//             <h1 className="text-2xl font-bold mb-2">{todo.title}</h1>
//             <p className="text-sm font-semibold mb-4">{todo.description}</p>
//             <div className="flex justify-end space-x-2">
//               <button
//                 className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//               <button
//                 className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded"
//                 onClick={() => handleEdit(index)}
//               >
//                 Edit
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {isEditing && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
//             <input
//               type="text"
//               className="w-full p-2 mb-4 border rounded"
//               placeholder="Title"
//               value={currentTodo.title}
//               onChange={(e) => setCurrentTodo({ ...currentTodo, title: e.target.value })}
//             />
//             <textarea
//               className="w-full p-2 mb-4 border rounded"
//               placeholder="Description"
//               value={currentTodo.description}
//               onChange={(e) => setCurrentTodo({ ...currentTodo, description: e.target.value })}
//             />
//             <div className="flex justify-end space-x-2">
//               <button
//                 className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Todos;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import CreateTodo from '../Pages/CreateTodo';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({ title: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const token = localStorage.getItem('token');
  const fetchTodo = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todo/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(response.data);
    } catch (error) {
      console.log(user);
      console.log("Something went wrong: " + error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/todo/deleteTodo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.log("Failed to delete Todo" + error);
    }
  };

  const handleEdit = (id) => {
    const index = todos.findIndex(todo => todo._id === id);
    if (index !== -1) {
      setEditIndex(index);
      setCurrentTodo({
        title: todos[index].title,
        description: todos[index].description
      });
      setIsEditing(true);
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/todo/update-todo/${todos[editIndex]._id}`, currentTodo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = response.data.data;
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTodo({ title: '', description: '' });
    } catch (error) {
      console.log("Failed to save Todo" + error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentTodo({ title: '', description: '' });
  };

  return (
    <div className="container mx-auto mt-8 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-6">Welcome {user.fullName}</h1>
      <Button type="primary" onClick={showModal} className="mb-4">
        Create new Todo
      </Button>
      <ul className="w-full max-w-3xl">
        {todos.map((todo) => (
          <li key={todo._id} className="block border rounded-lg p-4 mb-4 shadow-md bg-white">
            <Link to={`/todo-item/${todo._id}`}>
              <h1 className="text-2xl font-bold mb-2">{todo.title}</h1>
            <p className="text-gray-600 mb-4">
              {todo.description}
            </p>
            </Link>
            <div className="flex justify-end space-x-2">
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(todo._id)}
              />
              <Button
                type="default"
                icon={<EditOutlined />}
                onClick={() => handleEdit(todo._id)}
              />
            </div>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
            <input
              type="text"
              className="p-2 mb-4 w-full border rounded"
              placeholder="Title"
              value={currentTodo.title}
              onChange={(e) => setCurrentTodo({ ...currentTodo, title: e.target.value })}
            />
            <textarea
              className="p-2 mb-4 w-full border rounded"
              placeholder="Description"
              value={currentTodo.description}
              onChange={(e) => setCurrentTodo({ ...currentTodo, description: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <Button onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="primary" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
      <CreateTodo visible={isModalVisible} onCancel={handleModalCancel} addTodo={addTodo} />
    </div>
  );
}

export default Todos;
