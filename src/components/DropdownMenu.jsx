import { NavLink } from 'react-router-dom';
import { Menu } from "@headlessui/react";


function DropdownMenu() {
	return (
		<Menu>
			<Menu.Items
				static
				className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
			>
				<div className="py-3 sm:hidden">
					<p className="text-base font-semibold leading-5 text-gray-900 text-center " >
						Nguyễn Hữu Thuận
					</p>
					<p className="text-xs font-light leading-5 text-gray-900 text-center">
						aswdqe1x@gmail.com
					</p>
				</div>

				<div className="py-1">
					<Menu.Item>
						<NavLink to="/Enneagram/type" className={({ isActive }) =>
							isActive ? 'navActiveMenuContent' : 'navUnactiveMenuContent'}>Type của bạn</NavLink>
					</Menu.Item>
					<Menu.Item>
						<NavLink to="/Enneagram/infomation" className={({ isActive }) =>
							isActive ? 'navActiveMenuContent' : 'navUnactiveMenuContent'}>Eneagram là gì</NavLink>
					</Menu.Item>
					<Menu.Item>
						<NavLink to="/Enneagram/documents" className={({ isActive }) =>
							isActive ? 'navActiveMenuContent' : 'navUnactiveMenuContent'}>Thông tin thêm</NavLink>
					</Menu.Item>
					<Menu.Item>
						<NavLink to="/Enneagram/forum" className={({ isActive }) =>
							isActive ? 'navActiveMenuContent' : 'navUnactiveMenuContent'}>Diễn đàn</NavLink>
					</Menu.Item>
				</div>

				<div className="py-3 sm:hidden">
					<Menu.Item>
						<a class='navUnactiveMenuContent'>Thông tin cá nhân</a>
					</Menu.Item>
					<Menu.Item>
						<a class='navUnactiveMenuContent'>Mật khẩu và bảo mật</a>
					</Menu.Item>
					<Menu.Item>
						<a class='navUnactiveMenuContent'>Cài đặt</a>
					</Menu.Item>
				</div>

				<div className="py-1">
					<Menu.Item>
						<a class='navUnactiveMenuContent font-semibold text-red-500'>
							Sign out
						</a>
					</Menu.Item>
				</div>
			</Menu.Items>
		</Menu>
	)
}

export default DropdownMenu;