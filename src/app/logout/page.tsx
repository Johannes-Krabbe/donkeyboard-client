"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const { push } = useRouter();
  useEffect(() => {
    localStorage.removeItem("donkey-token");
    push("/");
  });
}
