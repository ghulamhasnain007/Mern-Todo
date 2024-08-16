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


// import React, { useContext, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { MenuOutlined } from '@ant-design/icons';
// // import { Button, Drawer } from 'antd';
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//     const { logout } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [visible, setVisible] = useState(false);

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

    // const showDrawer = () => {
    //     setVisible(true);
    // };

    // const onClose = () => {
    //     setVisible(false);
    // };

//     return (
//         <div className='navbar'>
//             <div className='flex justify-between items-center'>
//                 <div>
//                     <h1 className='text-2xl font-semibold'>MERN Todo</h1>
//                 </div>
//                 <div className='lg:hidden'>
//                     <Button type="text" onClick={showDrawer} icon={<MenuOutlined />} />
//                 </div>
//                 <div className='hidden lg:flex flex-grow'>
//                     <ul className='flex space-x-20'>
//                         <li>
//                             <NavLink to={'/'}
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-10 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                 }
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to={'/todo'}
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                 }
//                             >
//                                 Todos
//                             </NavLink>
//                         </li>
//                     </ul>
//                     <Button type="default" onClick={handleLogout} className="bg-red-500 text-white hover:bg-red-700 ml-auto">
//                         Logout
//                     </Button>
//                 </div>
//             </div>

//             {/* Drawer for Mobile View */}
//             <Drawer
//                 title="Menu"
//                 placement="right"
//                 onClose={onClose}
//                 open={visible}
//                 styles={{ padding: '0' }}
//             >
//                 <NavLink to={'/'} onClick={onClose} className="block py-2 text-gray-700 hover:text-orange-700">
//                     Home
//                 </NavLink>
//                 <NavLink to={'/todo'} onClick={onClose} className="block py-2 text-gray-700 hover:text-orange-700">
//                     Todos
//                 </NavLink>
//                 <Button type="default" onClick={() => { handleLogout(); onClose(); }} className="bg-red-500 text-white w-full hover:bg-red-700 mt-4">
//                     Logout
//                 </Button>
//             </Drawer>
//         </div>
//     );
// };

// export default Navbar;

// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="h-6 w-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     className="h-8 w-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 transition
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//               >
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }

import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import { MenuOutlined } from '@ant-design/icons';
// import { Button, Drawer } from 'antd';
import { AuthContext } from '../context/AuthContext';
import { Disclosure, Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Todos', href: '/todo', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                        </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <h1 className='text-2xl font-semibold text-white'>MERN Todo</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={({ isActive }) =>
                                            classNames(
                                                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <HeadlessMenu as="div" className="relative ml-3">
                            <div>
                                <HeadlessMenu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </HeadlessMenu.Button>
                            </div>
                            <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <HeadlessMenu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <HeadlessMenu.Item>
                                        {({ active }) => (
                                            <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                Your Profile
                                            </a>
                                        )}
                                    </HeadlessMenu.Item>
                                    <HeadlessMenu.Item>
                                        {({ active }) => (
                                            <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                Settings
                                            </a>
                                        )}
                                    </HeadlessMenu.Item>
                                    <HeadlessMenu.Item>
                                        {({ active }) => (
                                            <a href="#" onClick={handleLogout} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                Sign out
                                            </a>
                                        )}
                                    </HeadlessMenu.Item>
                                </HeadlessMenu.Items>
                            </Transition>
                        </HeadlessMenu>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default Navbar;
