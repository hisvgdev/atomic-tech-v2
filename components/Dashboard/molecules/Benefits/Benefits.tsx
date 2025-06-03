import { Button } from "@/components/ui/button";
import React from "react";

export const Benefits = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-12">
      <h1 className="font-bold text-7xl">Масштабируем бизнес через IT</h1>
      <section
        data-dark="true"
        className="w-full h-dvh bg-black py-32 px-24 rounded-[3.125rem]"
      >
        <div className="flex items-center justify-center">
          <div className="w-full flex items-center justify-between">
            {/* Left Side */}
            <div></div>
            {/* Right Side */}
            <div className="flex flex-col items-center justify-center gap-14 max-w-lg w-full">
              <div></div>
              <Button
                className="w-full py-8 rounded-full flex items-center gap-6 cursor-pointer"
                style={{
                  background:
                    "radial-gradient(79.83% 100% at 50% 100%, #E99FF3 0%, #AE3FD9 25%, #7315AB 50%, #441171 75%, #1A0730 100%)",
                }}
              >
                <span className="font-medium text-lg">Обсудить проект</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
