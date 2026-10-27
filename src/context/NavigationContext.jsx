import React, { createContext, useContext, useState, useEffect } from 'react'

const NavigationContext = createContext({
  currentPath: '/',
  navigate: () => {},
})

export function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/'
    }
    return '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (to, options = {}) => {
    if (typeof window === 'undefined') return

    // If external link (e.g. WhatsApp, Instagram, external website), open in new tab or direct
    if (to.startsWith('http') || to.startsWith('https://wa.me') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.open(to, '_blank')
      return
    }

    // Handle hash links on current page or route
    if (to.startsWith('#')) {
      const targetId = to.replace('#', '')
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    const [pathname, hash] = to.split('#')
    window.history.pushState({}, '', to)
    setCurrentPath(pathname || '/')

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: options.smooth ? 'smooth' : 'instant' })
    }
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  return useContext(NavigationContext)
}

export function Link({ href, children, className = '', onClick, ...props }) {
  const { navigate, currentPath } = useNavigation()

  const handleClick = (e) => {
    // If command/ctrl click, let browser handle new tab
    if (e.metaKey || e.ctrlKey) return

    // For internal navigation, prevent default reload
    if (!href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      e.preventDefault()
      if (onClick) onClick(e)
      navigate(href)
    }
  }

  const isExternal = href.startsWith('http')
  const isActive = currentPath === href

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isActive ? 'active-link' : ''}`}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
