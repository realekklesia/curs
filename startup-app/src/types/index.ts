export interface Feature {
  title: string
  description: string
  icon: keyof typeof import('@/components/icons').Icons
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {} 