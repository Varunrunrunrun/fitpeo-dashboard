import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Icon from "./Icon"


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-50 w-full bg-secondary px-6 py-3 text-white">
            <section className="flex justify-start items-center gap-8">
                <img src="/logo.svg" alt="logo" className="cursor-pointer" />
                <div className="h-auto w-auto  relative border-2 border-slate-800 rounded-md">
                    <input type="text" placeholder="Search" className="p-2 pl-9  outline-none boder-none bg-slate-700 h-8 sm:w-72 w-48 rounded-md" />
                    <Icon name="Search" className="absolute w-4 h-4 left-2 top-1/2 transform -translate-y-1/2" />
                </div>
            </section>
            <div className='flex'>
                <section className=" justify-end items-center gap-6 hidden md:flex">
                    <div className="flex justify-end gap-4">
                        <Icon name="Mail" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                        <Icon name="Settings" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                        <Icon name="Bell" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                    </div>
                    <Icon name="User" className="bg-white text-black h-10 w-10 p-2 rounded-full cursor-pointer" />
                </section>
                <div className='md:hidden flex'>
                    <Menu>
                        <MenuButton>
                            <Icon name="Menu" className='w-4 md:hidden flex text-white' />
                        </MenuButton>
                        <MenuItems anchor="bottom" className=" bg-slate-500 px-4 py-2 rounded-lg z-[100] absolute  transform -translate-x-[15%]">
                            <MenuItem>
                                <div className='w-full flex justify-start items-center gap-4 my-2'>
                                    <Icon name="Mail" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                                    <p className='text-black text-xs'>Messages</p>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className='w-full flex justify-start items-center gap-4 my-2'>
                                    <Icon name="Settings" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                                    <p className='text-black text-xs'>Settings</p>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className='w-full flex justify-start items-center gap-4 my-2'>
                                    <Icon name="Bell" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                                    <p className='text-black text-xs'>Notifications</p>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className='w-full flex justify-start items-center gap-4 my-2'>
                                    <Icon name="User" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                                    <p className='text-black text-xs'>Account</p>
                                </div>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar