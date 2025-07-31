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

  const handleSkip = () => setFade(true);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <video
        src="/avatar.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          maxWidth: '100vw',
          maxHeight: '100vh',
          width: '100vw',
          height: '100vh',
          objectFit: 'contain',
          background: 'white',
        }}
        className="rounded-none"
      />
      <button
        onClick={handleSkip}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-pastelBlue text-cartoonBlack font-cartoon px-6 py-3 rounded-cartoon shadow-cartoon text-lg hover:bg-pastelPink hover:text-cartoonWhite transition-all duration-300 animate-bouncey"
        style={{zIndex: 100}}
      >
        Click to skip
      </button>
    </div>
  );
}
