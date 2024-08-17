import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import CreateTodoItems from './CreateTodoItems';

function TodoItems() {
  const { todoId } = useParams(); // Get todoId from route params
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({ title: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const token = localStorage.getItem('token');
  const fetchTodo = async () => {
    try {
        const response = await axios.get(`${baseUrl}/todo/list-item/${todoId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // const data = Array.isArray(response.data.data.todoList) ? response.data.data.todoList : [response.data.data.todoList];
        setTodos(response.data.data.todoList);
        // console.log(response.data.data.todoList);
      }
     catch (error) {
        console.log(user);
        console.log("Something went wrong: " + error);
      }
  };

  useEffect(() => {
    fetchTodo();
  }, [todoId]);


//   const token = localStorage.getItem('token')
//   const fetchTodo = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/todo/list-item/${todoId}/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setTodos(response.data);
//     } catch (error) {
//       console.log(user);
//       console.log("Something went wrong: " + error);
//     }
//   };

//   useEffect(() => {
//     fetchTodo();
//   }, []);

const addTodo = (newTodo) => {
  setTodos((prevTodos) => {
    if (!Array.isArray(prevTodos)) {
      prevTodos = [prevTodos]; // Convert object to array if necessary
    }
    return [...prevTodos, newTodo];
  });
};

  const handleDelete = async (id) => {
    try {
      // await axios.delete(`http://localhost:8000/todo/list-item/${todoId}/delete/${id}`,{
      await axios.delete(`${baseUrl}/todo/list-item/${todoId}/delete/${id}`,{
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
      // const response = await axios.put(`http://localhost:8000/todo/list-item/${todoId}/update/${todos[editIndex]._id}`, currentTodo,
      const response = await axios.put(`${baseUrl}/todo/list-item/${todoId}/update/${todos[editIndex]._id}`, currentTodo,
        {
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
      <ul className="w-full max-w-2xl">
      {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li key={todo._id || index} className="block border rounded-lg p-4 mb-4 shadow-md bg-white">
              <h1 className="text-2xl font-bold mb-2">{todo.title}</h1>
              <p className="text-gray-600 mb-4">
                {todo.description}
              </p>
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
          ))
        ) : (
          <div>Not Found</div>
        )}

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
            <Button
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      )}
      <CreateTodoItems visible={isModalVisible} onCancel={handleModalCancel} addTodo={addTodo} todoItemId={todoId} />
    </div>
  );
}

export default TodoItems;
