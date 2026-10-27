import React from 'react'

export default function Logo({ 
  className = '', 
  variant = 'dark', // 'dark' = on black/dark background (white text), 'light' = on white/light background (dark text)
  size = 'md' 
}) {
  const isDark = variant === 'dark'

  // Height configurations
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-10 md:h-11',
    lg: 'h-11 sm:h-14 md:h-16'
  }

  const hClass = heightClasses[size] || heightClasses.md
  const logoSrc = isDark 
    ? '/assets/welurik-logo-official-light.png' 
    : '/assets/welurik-logo-official-dark.png'

  return (
    <a 
      href="/" 
      className={`inline-flex items-center select-none group transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Welurik Home"
    >
      <img
        src={logoSrc}
        alt="Welurik"
        className={`${hClass} w-auto object-contain block`}
        loading="eager"
      />
    </a>
  )
}
