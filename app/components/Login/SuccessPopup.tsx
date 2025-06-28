"use client";

import { useEffect } from "react";
import {
  SuccessPopupProps
} from "../../types/Form";

export default function SuccessPopup({ message, visible, onClose }: SuccessPopupProps) {
  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        onClose();
        window.location.href = "/";
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-zinc-800 px-4 py-2 rounded-full flex items-center justify-center gap-2">
      <span className="text-white font-semibold">{message}</span>
    </div>
  );
}
