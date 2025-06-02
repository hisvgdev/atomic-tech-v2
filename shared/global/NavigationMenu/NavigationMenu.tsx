"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/assets/images/logo.svg";

export const NavigationMenu = () => {
  const [isOnDark, setIsOnDark] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnDark(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "10px 0px 0px 0px",
        threshold: [0.5],
      }
    );

    const trigger = triggerRef.current;
    if (trigger) observer.observe(trigger);

    return () => {
      if (trigger) observer.unobserve(trigger);
    };
  }, []);

  return (
    <>
      <div ref={triggerRef} className="h-px w-full" />

      <div className="w-full sticky top-0 z-20 flex justify-center items-center py-5">
        <div
          className={`min-w-96 rounded-full backdrop-blur-lg p-3.5 ${
            isOnDark ? "bg-white/10" : "bg-[#0B0B0B0D]"
          }`}
        >
          <div className="flex items-center justify-between">
            <Image
              src={logo}
              alt="logo"
              className={`transition-all duration-500 w-32 h-auto ${
                isOnDark ? "brightness-200" : "brightness-0"
              }`}
            />
            <Button
              className="p-5 rounded-full cursor-pointer max-w-40 w-full"
              style={{
                background:
                  "linear-gradient(104.62deg, #00636F 0%, #000809 47.79%)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-xl">Меню</span>
                <div className="flex flex-col gap-1 justify-center h-full">
                  <div className="w-7 h-0.5 bg-white/50" />
                  <div className="w-7 h-0.5 bg-white/50" />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
