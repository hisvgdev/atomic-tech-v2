import React, { HTMLProps } from "react";

export interface GradientButtonProps {
  hasIsRoute?: boolean;
  routePath?: string;
  children?: React.ReactNode;
  title?: string;
  titleSize?: string;
  iconSize?: number;
  classNames?: HTMLProps<HTMLElement>["className"];
  secondClassnames?: HTMLProps<HTMLElement>['className']
}