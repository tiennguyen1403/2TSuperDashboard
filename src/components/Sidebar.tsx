"use client";
import logo from "../../public/2T-Dashboard.png";
import Image from "next/image";
import Link from "next/link";
import { Input, Listbox, ListboxItem, Switch } from "@nextui-org/react";
import {
  Briefcase,
  Chart2,
  Code,
  Element3,
  LoginCurve,
  LogoutCurve,
  Moon,
  Setting2,
  ShoppingCart,
  Sun1,
  User,
} from "iconsax-react";
import { useState } from "react";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper hidden-scrollbar">
        <Link href="/" className="logo-wrapper">
          <Image src={logo} alt="logo" width={50} height={50} />
          <h1 className="logo-text">2T Dashboard</h1>
        </Link>
        <div className="px-4">
          <Input placeholder="Search something..." isClearable />
        </div>
        <div className="flex-1">
          <Listbox
            aria-label="Sidebar navigator menu"
            variant="flat"
            classNames={{ base: "h-full" }}
            itemClasses={{ base: "py-3 px-6 gap-4", title: "text-base font-medium" }}
          >
            <ListboxItem
              href="/"
              key="overview"
              color="primary"
              startContent={<Element3 color="#697689" variant="Bulk" />}
            >
              Overview
            </ListboxItem>
            <ListboxItem
              href="/analytics"
              key="analytics"
              color="primary"
              startContent={<Chart2 color="#697689" variant="Bulk" />}
            >
              Analytics
            </ListboxItem>
            <ListboxItem
              href="/orders"
              key="orders"
              color="primary"
              startContent={<ShoppingCart color="#697689" variant="Bulk" />}
            >
              Orders
            </ListboxItem>
            <ListboxItem
              href="/products"
              key="products"
              color="primary"
              startContent={<Briefcase color="#697689" variant="Bulk" />}
            >
              Products
            </ListboxItem>
            <ListboxItem
              href="/users"
              key="users"
              color="primary"
              startContent={<User color="#697689" variant="Bulk" />}
            >
              Users
            </ListboxItem>
            <ListboxItem
              href="/lodash"
              key="lodash"
              color="primary"
              startContent={<Code color="#697689" />}
            >
              Lodash
            </ListboxItem>
            <ListboxItem
              href="/login"
              key="login"
              color="primary"
              startContent={<LoginCurve color="#697689" />}
            >
              Login
            </ListboxItem>
          </Listbox>
        </div>
        <div>
          <Listbox
            aria-label="Sidebar support menu"
            variant="flat"
            itemClasses={{ base: "py-3 px-6 gap-4 text-[#64748B]", title: "text-base font-medium" }}
          >
            <ListboxItem
              key="darkMode"
              variant="light"
              onClick={() => setDarkMode((prev) => !prev)}
              startContent={<Moon color="#697689" variant="Bulk" />}
            >
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <Switch
                  isSelected={darkMode}
                  onValueChange={setDarkMode}
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <Moon size="12" color="#697689" variant="Bold" className={className} />
                    ) : (
                      <Sun1 size="12" color="#697689" variant="Bold" className={className} />
                    )
                  }
                  size="sm"
                />
              </div>
            </ListboxItem>
            <ListboxItem
              key="settings"
              color="primary"
              startContent={<Setting2 color="#697689" variant="Bulk" />}
            >
              Settings
            </ListboxItem>
            <ListboxItem
              className="text-danger"
              color="danger"
              key="logout"
              startContent={<LogoutCurve color="#f31260" variant="Bulk" />}
            >
              Logout
            </ListboxItem>
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
