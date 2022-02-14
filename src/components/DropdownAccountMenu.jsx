import React from "react";
import { Menu } from "@headlessui/react";

function DropdownAccountMenu() {
    return (
        <Menu>
            <Menu.Items
                static
                className="absolute right-[135px] w-48 mt-[9px] origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            >
                <div className="py-1">
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
            </Menu.Items>
        </Menu>
    )
}

export default DropdownAccountMenu;