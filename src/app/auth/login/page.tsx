"use client";
import { request } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useToken } from "@/hooks/token";

export default function Login() {
  const { token, setToken } = useToken();
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    const values = {
      email: email,
      password: password,
    };

    try {
      const res = await request.post(`/auth/login`, values);

      console.log(res.data.token);
      setToken(res.data.token);
      push("/");
    } catch {
      (err: any) => console.error(err);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            /* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" */
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          {/* Add this to password to require min 8 characters and at least one number and uppercase letter */}
          {/* pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" */}
          <input
            type="text"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Log In" />
        </div>
      </form>
    </main>
  );
}
