"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 3000);
    const onLoad = () => setFade(true);
    window.addEventListener("load", onLoad);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <video
        src="/avatar.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-40 h-40 rounded-cartoon shadow-cartoon animate-bouncey border-4 border-pastelBlue"
      />
    </div>
  );
}
