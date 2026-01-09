import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Tools', path: '/ai' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ]

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className='flex justify-between items-center py-4 px-4 sm:px-12 lg:px-20 xl:px-32'>
        {/* Logo */}
        <div 
          onClick={() => navigate('/')}
          className='flex items-center gap-2 cursor-pointer group'
        >
          <img
            src={assets.logo}
            alt="QuickAI Logo"
            className='h-8 sm:h-10 transition-transform group-hover:scale-105'
          />
          {scrolled && (
            <span className='hidden sm:flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full'>
              <Sparkles className='w-3 h-3' />
              AI Powered
            </span>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex items-center gap-1'>
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Side - Auth */}
        <div className='flex items-center gap-4'>
          {user ? (
            <div className='flex items-center gap-3'>
              <button
                onClick={() => navigate('/ai')}
                className='hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all'
              >
                Dashboard
              </button>
              <div className='scale-110'>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: 'w-10 h-10 ring-2 ring-primary/20 hover:ring-primary/40 transition-all'
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <button 
              onClick={openSignIn} 
              className='group flex items-center gap-2 rounded-full text-sm font-semibold cursor-pointer bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-6 sm:px-8 py-2.5 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300'
            >
              Get Started 
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6 text-gray-700' />
            ) : (
              <Menu className='w-6 h-6 text-gray-700' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 border-t border-gray-200' : 'max-h-0'
        }`}
      >
        <div className='px-4 py-4 bg-white/95 backdrop-blur-xl space-y-2'>
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => {
                navigate(link.path)
                setMobileMenuOpen(false)
              }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.name}
            </button>
          ))}
          {user && (
            <button
              onClick={() => {
                navigate('/ai')
                setMobileMenuOpen(false)
              }}
              className='w-full text-left px-4 py-3 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-100 transition-all'
            >
              Dashboard
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar