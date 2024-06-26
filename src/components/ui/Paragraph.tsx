import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const paragraphVariants = cva(
  'text-text font-raleway text:sm',
  {
    variants: {
      size: {
        default: '',
        sm: '',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size }), className)}>
        {children}
      </p>
    )
  }
)

Paragraph.displayName = 'Paragraph'  //for debugging purposes

export default Paragraph
