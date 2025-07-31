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

  const [videoError, setVideoError] = useState(false);
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-700 border-4 border-red-500 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {!videoError ? (
        <video
          src="/avatar.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
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
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <span className="text-red-600 font-bold text-xl mb-4">Video failed to load</span>
          <span className="text-gray-500">Check that <b>/public/avatar.mp4</b> exists and is a valid video file.</span>
        </div>
      )}
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
