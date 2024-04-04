"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const PrivateLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="h-full flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
