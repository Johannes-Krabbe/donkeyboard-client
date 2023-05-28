"use client";
import { request } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useToken } from "@/hooks/token";

export default function Signup() {
  const { token, setToken } = useToken();
  const { push } = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    const values = {
      username: username,
      email: email,
      password: password,
      bio: bio,
    };

    try {
      const res = await request.post(`/auth/register`, values);

      console.log(res.data.token);
      setToken(res.data.token);
      push("/");
    } catch (err: any) {
      setErrorMessage(err.response.data.message);
      console.log(errorMessage);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Register a new account</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            pattern="[a-z0-9-_]{3,32}$"
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
