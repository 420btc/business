"use client"

interface TextLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function TextLogo({ className = "", size = "md" }: TextLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl sm:text-4xl font-bold leading-tight",
    xl: "text-4xl sm:text-5xl font-bold leading-tight",
  }

  return <div className={`font-bold leading-tight text-white ${sizeClasses[size]} ${className}`}>Wolty</div>
}
