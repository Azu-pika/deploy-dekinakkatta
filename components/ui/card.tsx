import React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
