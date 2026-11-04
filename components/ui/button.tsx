import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from './cn';

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => <button ref={ref} className={cn('button', className)} {...props} />,
);
Button.displayName = 'Button';
