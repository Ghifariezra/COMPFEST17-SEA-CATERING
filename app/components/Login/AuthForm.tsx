"use client";

import { useState } from "react";
import {
  AuthFormProps
} from "../../types/Form";

export default function AuthForm({ onSuccess }: AuthFormProps) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      onSuccess("Login successful!");
      window.location.href = "/user/dashboard";
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
      <input type="text" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded-md border border-zinc-300 bg-white text-zinc-900" required />

      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="p-3 rounded-md border border-zinc-300 bg-white text-zinc-900" required />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" disabled={loading} className="p-3 rounded-md bg-black text-white hover:bg-zinc-800 transition disabled:opacity-50 cursor-pointer">
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
