import { Button, Input, Modal, message } from 'antd';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export default function CreateTodo({ visible, onCancel, addTodo }) {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('token')
  const baseUrl = import.meta.env.VITE_BASE_URL
  
  const handleCreate = async () => {
    try {
      if (title && description) {
        // const response = await axios.post('http://localhost:8000/todo/create-todo', {
        const response = await axios.post(`${baseUrl}/todo/create-todo`, {
          title,
          description,
          createdBy: user._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
      });
        const newTodo = {
          _id: response.data.data._id,
          title: response.data.data.title,
          description: response.data.data.description
        };
        addTodo(newTodo);
        message.success('Todo created successfully');
        setTitle('');
        setDescription('');
        onCancel();
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <Modal
      title="Create Todo"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="create" type="primary" onClick={handleCreate}>
          Create
        </Button>,
      ]}
    >
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        style={{ resize: 'none' }}
      />
    </Modal>
  );
}
