"use client";
import PrivateLayout from "@/layouts/privateLayout";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const isLoggedIn = true;

    useEffect(() => {
      if (!isLoggedIn) redirect("/login");
    }, []);

    if (!isLoggedIn) return null;

    return (
      <PrivateLayout {...props}>
        <Component {...props} />
      </PrivateLayout>
    );
  };
}
