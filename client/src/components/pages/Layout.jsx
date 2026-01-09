import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { Menu, X } from 'lucide-react'

const Layout = () => {
  const [sidebar, setSidebar] = useState(true)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      {/* ===== LEFT SIDEBAR (ONLY LOGO HERE) ===== */}
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

      {/* ===== RIGHT CONTENT ===== */}
      <div className="flex-1 flex flex-col">

        {/* ===== TOP NAVBAR (NO LOGO HERE ❌) ===== */}
        <div className="h-16 flex items-center px-6 border-b bg-white">
          <button
            className="ml-auto sm:hidden"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ===== PAGE CONTENT ===== */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Layout
