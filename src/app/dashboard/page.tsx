"use client";
import withAuth from "@/HOCs/withAuth";
import { Button } from "@nextui-org/button";

const Dashboard = () => {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Button color="primary">Click me</Button>
    </>
  );
};

export default withAuth(Dashboard);
