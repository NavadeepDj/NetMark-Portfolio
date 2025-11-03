"use client";

import { useEffect, useRef } from "react";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";

export default function ContactConfetti() {
  const confettiRef = useRef<ConfettiRef>(null);

  useEffect(() => {
    // Always fire a base confetti when the contact page loads
    confettiRef.current?.fire({ particleCount: 300, spread: 200 });

    // If a flag was set (e.g., user clicked the Contact button), fire extra confetti
    try {
      if (sessionStorage.getItem("contactConfetti") === "1") {
        confettiRef.current?.fire({ particleCount: 300, spread: 200, origin: { y: 0.4 } });
        sessionStorage.removeItem("contactConfetti");
      }
    } catch {}
  }, []);

  return (
    <Confetti
      ref={confettiRef}
    //   className="pointer-events-none absolute inset-0 z-0"
            className="absolute left-0 top-0 z-0 size-full"

      manualstart
    />
  );
}
