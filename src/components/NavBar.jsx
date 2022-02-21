import { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';

import DropdownMenu from "./DropdownMenu";
import DropdownAccountMenu from "./DropdownAccountMenu";

import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { FiLogOut } from "react-icons/fi"

import LoginForm from "./LoginForm";


function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const [openAccountMenu, setOpenAccountMenu] = useState(false);
    const handleAccountMenu = () => {
        setOpenAccountMenu(!openAccountMenu);
    };

    const [stateLogin, setStateLogin] = useState(false);
    const handleLogin = () => {
        setStateLogin(!stateLogin);
    };


    return (
        <nav class="mt-[0px] fixed w-full inset-x-0 top-0' bg-gradient-to-r from-blue-600 to-purple-600">
            <div class="containerHeader md:containerHeaderL">
                <div class="flex items-center md:div">
                    <div class="text-right pb-1 md:flex md:items-end">
                        <div>
                            <Link to='Enneagram/' class="dm:textLogo1 md:textLogo1L">Enneagram</Link>
                        </div>
                        <div>
                            <a href="http://facebook.com/trantieuvann" target="_blank" class="dm:textLogo2 md:textLogo2L">.SnowyField</a>
                        </div>
                    </div>

                    <div class="lg:place-content-around ml-auto">
                        <div class="hidden lg:navContainerButtonL">
                            <NavLink to="Enneagram/type" className={({ isActive }) =>
                                isActive ? 'navActiveButton' : 'navUnactiveButton'}>Type của bạn</NavLink>
                            <NavLink to="Enneagram/information" className={({ isActive }) =>
                                isActive ? 'navActiveButton' : 'navUnactiveButton'}>Eneagram là gì</NavLink>
                            <NavLink to="Enneagram/documents" className={({ isActive }) =>
                                isActive ? 'navActiveButton' : 'navUnactiveButton'}>Thông tin thêm</NavLink>
                            <NavLink to="Enneagram/forum" className={({ isActive }) =>
                                isActive ? 'navActiveButton' : 'navUnactiveButton'}>Diễn đàn</NavLink>
                        </div>
                    </div>

                    {/* {stateLogin ? ( */}
                        <div class="flex ml-auto navTopRightElementsL">
                            <ClickAwayListener onClickAway={openAccountMenu ? handleAccountMenu : null}>
                                <ul>
                                    {openAccountMenu ? (
                                        <div class="ms:hidden divGrid cursor-pointer transition-colors duration-200 transform rounded-md md:mt-0 bg-blue-800" onClick={handleAccountMenu}>
                                            <h3 class="text-tiny font-medium text-white px-2 pt-1">Nguyễn Hữu Thuận</h3>
                                            <h6 class="text-xs font-light text-white px-2 pb-1">aswdqe1x@gmail.com</h6>
                                        </div>
                                    ) :
                                        !openAccountMenu ? (
                                            <div class="ms:hidden divGrid cursor-pointer transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-blue-700" onClick={handleAccountMenu}>
                                                <h3 class="text-tiny font-medium text-white px-2 pt-1">Nguyễn Hữu Thuận</h3>
                                                <h6 class="text-xs font-light text-white px-2 pb-1">aswdqe1x@gmail.com</h6>
                                            </div>
                                        ) :
                                            (
                                                <DropdownAccountMenu />
                                            )}
                                    {openAccountMenu && (
                                        <DropdownAccountMenu />
                                    )}
                                </ul>
                            </ClickAwayListener>

                            <button class="mx-4 text-white transition-colors duration-200 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none" aria-label="show notifications">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>

                            <img style={{ borderRadius: 40, height: 40, width: 40 }} src={"https://i.imgur.com/Xq6LPWC.jpeg"} alt="avatar" />

                            <ClickAwayListener onClickAway={openMenu ? handleMenu : null}>
                                <ul className="text-white lg:hidden">
                                    {openMenu ? (
                                        <MdOutlineClose className="ml-4 my-2 cursor-pointer hover:text-red-500" size="25px" onClick={handleMenu} />
                                    ) :
                                        !openMenu ? (
                                            <HiOutlineMenu className="ml-4 my-2 cursor-pointer hover:text-blue-500" size="25px" onClick={handleMenu} />
                                        ) :
                                            (
                                                <DropdownMenu />
                                            )}
                                    {openMenu && (
                                        <DropdownMenu />
                                    )}
                                </ul>
                            </ClickAwayListener>

                            <FiLogOut className="text-white ml-4 my-2 hover:text-red-500 cursor-pointer gl:hidden" size="25px" onClick={handleLogin} />
                        </div>
                    {/* ) :

                        !stateLogin ? (
                            <div class="flex ml-auto navTopRightElementsL">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded-md font-bold ml-2 mr-3 my-1" onClick={handleLogin} >Đăng nhập</button>
                                <button className="text-blue bg-gray-300 hover:bg-gray-400 px-7 py-2 rounded-md font-bold mx-2 my-1" onClick={handleLogin}>Đăng ký</button>
                            </div>

                        ) : (
                            <LoginForm />
                        )}
                    {stateLogin && (
                        <LoginForm />
                    )} */}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;