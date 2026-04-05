"use client";

import { useState } from "react";

export default function LoginPage() 
{
    const   [email, setEmail] = useState("");
    const   [password, setPassword] = useState("");
    const   [message, setMessage] = useState("");

    const   handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({email, password}),
        });

        const data = await res.json();
        
        if (data.success) {
          setMessage("Login success");
        } else {
          setMessage("Login failed");
        }

        setEmail("");
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <br /><br />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <br /><br />

          <button type="submit">Login</button>

          <p>{message}</p>
        </form>
  );
}