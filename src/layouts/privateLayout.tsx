"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const PrivateLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div style={{ flex: "1 1 0%", padding: "30px 40px", backgroundColor: "#f5f7fa" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
