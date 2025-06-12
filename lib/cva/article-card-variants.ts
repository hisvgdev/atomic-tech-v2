import { cva } from 'class-variance-authority'

export const articleCardVariants = cva(
  'rounded-3xl border border-[#C8C8C8] bg-transparent shadow-none flex flex-col overflow-hidden transition-all',
  {
    variants: {
      withTag: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      withTag: false,
    },
  }
)
