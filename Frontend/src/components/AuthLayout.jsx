import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Task Manager</h1>
            <Outlet />
        </div>
    );
}

export default AuthLayout;
