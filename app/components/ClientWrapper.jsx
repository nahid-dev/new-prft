"use client";

import Lenis from "lenis";
import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
}
