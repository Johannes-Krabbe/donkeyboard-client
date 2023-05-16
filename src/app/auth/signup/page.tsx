"use client";
import { request } from "@/utils/axios";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { useToken } from "@/hooks/token";

export default function Signup() {
  //const router = useRouter();
  const { token, setToken } = useToken();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  /* useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("key");
  }, []); */

  const handleSubmit = async () => {
    event?.preventDefault();
    const values = {
      username: username,
      email: email,
      password: password,
      bio: bio,
    };

    try {
      const res = await request.post(`/auth/signup`, values);

      console.log(res.data.token);
      setToken(res.data.token);
    } catch {
      (err: any) => console.error(err);
    }
  };

  useEffect(() => {
    if (token) {
      redirect("/");
    }
  });

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            /*pattern="[a-z0-9-_]"*/
            minLength={3}
            maxLength={32}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
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
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            id="bio"
            defaultValue="Hello there! I am using Donkeyboard"
            required
            onChange={(e) => setBio(e.target.value)}
          />
          <br />
          <input type="submit" value="Complete Sign Up" />
        </div>
      </form>
    </main>
  );
}
