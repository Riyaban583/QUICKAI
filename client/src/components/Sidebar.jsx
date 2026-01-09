import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Protect, useUser, useClerk } from '@clerk/clerk-react'
import { assets } from '../assets/assets'
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  Scissors,
  SquarePen,
  Users,
  LogOut,
  Settings,
  Crown,
  ChevronRight,
  X
} from 'lucide-react'

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
]

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser()
  const { signOut, openUserProfile } = useClerk()
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <>
      {/* Mobile Overlay */}
      {sidebar && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-64 h-full bg-white border-r border-gray-200 flex flex-col justify-between shadow-xl
        max-md:fixed top-0 bottom-0 z-50
        ${sidebar ? 'translate-x-0' : 'max-md:-translate-x-full'}
        transition-all duration-300 ease-in-out`}
      >
        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col h-full">
          {/* LOGO & CLOSE BUTTON */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
            <img src={assets.logo} alt="Quick AI" className="h-8" />
            <button
              onClick={() => setSidebar(false)}
              className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* USER PROFILE CARD */}
          <div 
            onClick={openUserProfile}
            className="m-4 p-4 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={user?.imageUrl}
                  alt="User avatar"
                  className="w-12 h-12 rounded-full ring-2 ring-white shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-sm font-semibold text-gray-900 truncate">
                  {user?.fullName}
                </h1>
                <Protect 
                  plan="premium" 
                  fallback={
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      Free Plan
                    </span>
                  }
                >
                  <span className="text-xs text-primary flex items-center gap-1 font-medium">
                    <Crown className="w-3 h-3" />
                    Premium
                  </span>
                </Protect>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 px-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            <div className="space-y-1">
              {navItems.map(({ to, label, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/ai'}
                  onClick={() => setSidebar(false)}
                  onMouseEnter={() => setHoveredItem(to)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={({ isActive }) =>
                    `group relative px-3 py-2.5 flex items-center gap-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-5 h-5 transition-transform ${
                        isActive || hoveredItem === to ? 'scale-110' : ''
                      }`} />
                      <span className="flex-1">{label}</span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Upgrade Banner for Free Users */}
            <Protect 
              plan="premium" 
              fallback={
                <div className="mt-6 mx-1 p-4 bg-gradient-to-br from-primary to-purple-600 rounded-xl text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-5 h-5" />
                    <h3 className="font-semibold text-sm">Upgrade to Premium</h3>
                  </div>
                  <p className="text-xs text-white/90 mb-3">
                    Unlock unlimited access to all AI tools
                  </p>
                  <button className="w-full py-2 bg-white text-primary font-semibold text-sm rounded-lg hover:bg-gray-100 transition-colors">
                    Upgrade Now
                  </button>
                </div>
              }
            >
              <div />
            </Protect>
          </nav>
        </div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className="border-t border-gray-200">
          {/* Settings */}
          <button 
            onClick={openUserProfile}
            className="w-full px-4 py-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <Settings className="w-5 h-5 text-gray-500" />
            Settings
          </button>

          {/* User Info & Logout */}
          <div className="p-4 flex items-center justify-between bg-gray-50">
            <div
              onClick={openUserProfile}
              className="flex gap-3 items-center cursor-pointer group flex-1 min-w-0"
            >
              <img 
                src={user?.imageUrl} 
                className="w-9 h-9 rounded-full ring-2 ring-white shadow-sm" 
                alt="" 
              />
              <div className="flex-1 min-w-0">
                <h1 className="text-sm font-semibold text-gray-900 truncate group-hover:text-primary transition-colors">
                  {user?.fullName}
                </h1>
                <p className="text-xs text-gray-500">
                  View Profile
                </p>
              </div>
            </div>

            <button
              onClick={signOut}
              className="p-2 hover:bg-red-50 rounded-lg transition-all group"
              title="Sign out"
            >
              <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar