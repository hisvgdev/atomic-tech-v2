import { StaticImageData } from 'next/image'

export type RatingPosition = 'top' | 'bottom'

export interface ArticleCardProps {
  title: string

  // Optional media & meta
  date?: string
  imgCover?: StaticImageData

  // Appearance
  classNames?: string

  // Behavior & features
  tag?: string
  withTag?: boolean;
  hasRating?: boolean
  rating?: number
  ratingPosition?: RatingPosition
}
