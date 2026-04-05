"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email required");
      return;
    }

    if (!password) {
      setMessage("Password required");
      return;
    }

    setMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Login success");
      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          <section className="hidden bg-slate-900 p-10 text-white md:flex md:flex-col md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                ft_transcendence
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-tight">
                Welcome back.
              </h1>
              <p className="mt-4 max-w-sm text-base text-slate-300">
                Sign in to continue to your dashboard, manage matches, and connect
                with other players.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
              <p className="text-sm text-slate-300">
                Demo login:
              </p>
              <p className="mt-2 text-sm">
                Email: <span className="font-semibold">test@test.com</span>
              </p>
              <p className="text-sm">
                Password: <span className="font-semibold">123</span>
              </p>
            </div>
          </section>

          <section className="p-6 sm:p-8 md:p-10">
            <div className="mx-auto w-full max-w-md">
              <p className="text-sm font-medium text-slate-500">Login</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Enter your email and password below.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="mt-6 min-h-[24px]">
                {message && (
                  <p
                    className={`text-sm font-medium ${
                      message === "Login success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}