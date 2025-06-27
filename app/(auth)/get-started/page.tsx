"use client";

import { useState } from "react";
import AuthForm from "../../components/Login/AuthForm";
import SuccessPopup from "../../components/Login/SuccessPopup";

export default function AuthPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSuccess = (message: string) => {
    setSuccessMessage(message);
    setPopupVisible(true);
  };

  return (
    <section className="p-4">
      <div className="grid grid-cols-3 justify-center items-center h-full rounded-2xl overflow-hidden border border-zinc-200">
        {/* Static Image */}
        <div className="min-h-screen w-full py-8 px-4 hidden md:flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1567496295302-b8dbcd2913b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center overflow-hidden"></div>

        <SuccessPopup message={successMessage} visible={popupVisible} onClose={() => setPopupVisible(false)} />

        {/* Login Form */}
        <div className="h-screen col-span-3 md:col-span-2 bg-white border border-zinc-200 backdrop-blur-lg">
          <div className="flex flex-col gap-4 justify-center items-center font-[family-name:var(--font-besley)] w-full p-8 h-full">
            <h1 className="text-2xl font-semibold md:w-1/2 text-center">Login</h1>
            <AuthForm onSuccess={handleSuccess} />
          </div>
        </div>
      </div>
    </section>
  );
}
