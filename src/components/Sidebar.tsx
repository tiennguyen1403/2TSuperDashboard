"use client";
import logo from "../../public/2T-Dashboard.png";
import Image from "next/image";
import Link from "next/link";
import { Listbox, ListboxItem } from "@nextui-org/react";
import {
  Briefcase,
  Chart2,
  Element3,
  LogoutCurve,
  Setting2,
  ShoppingCart,
  User,
} from "iconsax-react";

const Sidebar = () => {
  return (
    <div className="border-r-1 border-r-[#e8edff] overflow-y-scroll hidden-scrollbar flex flex-col">
      <Link href="/" className="flex items-center h-24 gap-2 px-6 border-b-1 border-b-[#e8edff]">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-2xl font-semibold italic">2T Dashboard</h1>
      </Link>
      <div className="flex-1">
        <Listbox
          aria-label="Sidebar navigator menu"
          variant="flat"
          classNames={{ base: "h-full" }}
          itemClasses={{ base: "py-3 px-6 gap-4 text-[#64748B]", title: "text-base font-medium" }}
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
        </Listbox>
      </div>
      <div>
        <Listbox
          aria-label="Sidebar support menu"
          variant="flat"
          itemClasses={{ base: "py-3 px-6 gap-4 text-[#64748B]", title: "text-base font-medium" }}
        >
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
  );
};

export default Sidebar;
