import { StaticImageData } from "next/image";

export interface CaseCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: StaticImageData;
  badgeContent: {
    title: string;
    description: string;
  }[];
  tags: {
    id: string;
    title: string;
    icon: string;
  }[];
}