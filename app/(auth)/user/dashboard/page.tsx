"use client";
import { useEffect, useState } from "react";
import UserDashboard from "../../../components/SubscriptionsDashboard/UserDashboard";
import { checkLogin } from "../../../utils/auth";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin().then((loggedIn) => {
      setIsLoggedIn(loggedIn);
      setLoading(false);
      if (!loggedIn) {
        window.location.href = "/get-started";
      }
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-lg">Checking authentication...</span>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null; // Sudah di-redirect
  }

  return <UserDashboard />;
}
