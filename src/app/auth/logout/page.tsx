"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useToken } from "@/hooks/token";

export default function Logout() {
  const { token, setToken } = useToken();

  if (token) {
    localStorage.removeItem("donkey-token");
  }
  useEffect(() => redirect("/"));
}
