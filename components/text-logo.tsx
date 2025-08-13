"use client"

interface TextLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function TextLogo({ className = "", size = "md" }: TextLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  }

  return <div className={`font-bold text-white ${sizeClasses[size]} ${className}`}>Carlos Freire</div>
}
