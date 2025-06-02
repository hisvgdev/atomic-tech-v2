import React, { FC } from "react";
import { AppLayoutProps } from "./AppLayout.props";
import NavigationMenu from "../NavigationMenu";

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="overflow-auto overscroll-none themed-scrollbar scroll-smooth h-dvh">
      <NavigationMenu />
      {children}
    </div>
  );
};
