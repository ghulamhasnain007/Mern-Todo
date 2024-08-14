// import { Button } from 'antd';
// import React, { useContext, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// // import CreateTodo from '../Pages/CreateTodo';
// import { AuthContext } from '../context/AuthContext';

// function Navbar() {
//     const {logout} = useContext(AuthContext)
//     const navigate = useNavigate()
//     const handleLogout = ()=>{
//         logout()
//         navigate('/login')
//     }
//   return (
//     <div className='border-2 rounded mb-4'>
//         <div className='flex justify-between items-center p-4'>
//             <div>
//                 <h1 className='text-2xl font-semibold'>MERN Todo</h1>
//             </div>
//             <div className='flex-grow'>
//                 <ul className='flex space-x-20 justify-center'>
//                     <li>
//                         <NavLink to={'/'}
//                         className={({isActive})=>
//                             `block py-2 pr-4 pl-10 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                         }
//                         >
//                             Home
//                         </NavLink> 
//                     </li>
//                     <li>
//                         <NavLink to={'/todo'}
//                         className={({isActive})=>
//                             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                         }
//                         >
//                             Todos
//                         </NavLink> 
//                     </li>
//                     <li className="flex items-center space-x-4">
//                             <Button type="default" onClick={handleLogout} className="bg-red-500 text-white hover:bg-red-700">
//                                 Logout
//                             </Button>
//                         </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Navbar;

// import React from 'react';

// function Navbar() {
//   return (
//     <div className='border-2 rounded mb-4'>
//         <div className='flex justify-between items-center p-4'>
//             <div>
//                 <h1 className='text-2xl font-semibold'>MERN Todo</h1>
//             </div>
//             <div className='flex-grow'>
//                 <ul className='flex justify-center space-x-20'>
//                     <li>Home</li>
//                     <li>Todos</li>
//                     <li>Create Todo</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className='navbar'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-semibold'>MERN Todo</h1>
                </div>
                <div className='lg:hidden'>
                    <Button type="text" onClick={showDrawer} icon={<MenuOutlined />} />
                </div>
                <div className='hidden lg:flex flex-grow'>
                    <ul className='flex space-x-20'>
                        <li>
                            <NavLink to={'/'}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-10 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/todo'}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Todos
                            </NavLink>
                        </li>
                    </ul>
                    <Button type="default" onClick={handleLogout} className="bg-red-500 text-white hover:bg-red-700 ml-auto">
                        Logout
                    </Button>
                </div>
            </div>

            {/* Drawer for Mobile View */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                open={visible}
                styles={{ padding: '0' }}
            >
                <NavLink to={'/'} onClick={onClose} className="block py-2 text-gray-700 hover:text-orange-700">
                    Home
                </NavLink>
                <NavLink to={'/todo'} onClick={onClose} className="block py-2 text-gray-700 hover:text-orange-700">
                    Todos
                </NavLink>
                <Button type="default" onClick={() => { handleLogout(); onClose(); }} className="bg-red-500 text-white w-full hover:bg-red-700 mt-4">
                    Logout
                </Button>
            </Drawer>
        </div>
    );
};

export default Navbar;
