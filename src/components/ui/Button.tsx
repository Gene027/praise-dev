import { cn } from '@/lib/utils' //className for tailwind
import { cva, VariantProps } from 'class-variance-authority'   //create css variants
import { Loader2 } from 'lucide-react'  //icons
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'text-white1 bg-primary hover:bg-[#B03A26] focus:bg-[#842B1D] disabled:opacity-20',
        secondary: 'text-primary border-[1.5px] border-solid border-primary'
        ,
        text:
          'bg-green-800  text-white hover:bg-green-600 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 dark:border-slate-700',
      },
      size: {
        sm: 'h-9 px-2 rounded-md',
        md: 'h-10 py-2 px-4',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

//this gives the button component all html attributes like onClick etc
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean,
  icon?: React.ReactNode,
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, icon, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : icon }
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
