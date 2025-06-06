import { StaticImageData } from "next/image";

export interface BlogCardProps {
  title: string;
  date: string;
  imgCover: StaticImageData;
}