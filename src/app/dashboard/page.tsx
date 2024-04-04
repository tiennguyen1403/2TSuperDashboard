"use client";
import withAuth from "@/HOCs/withAuth";
import { Button } from "@nextui-org/button";

const Dashboard = () => {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Button color="primary">Click me</Button>
      <button className="btn">Hello world</button>
    </>
  );
};

export default withAuth(Dashboard);
