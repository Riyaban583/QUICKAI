import React, { useState } from 'react'
import { assets } from "../assets/assets";

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-16 w-full mt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-200 pb-12">
        
        {/* LOGO + DESCRIPTION */}
        <div className="md:max-w-md">
          <img
            src={assets.logo}
            alt="QuickAI Logo"
            className="h-9 mb-6"
          />

          <p className="text-gray-600 text-sm leading-relaxed">
            Experience the power of AI with QuickAi. Transform your content creation 
            with our suite of premium AI tools. Write articles, generate images, 
            and enhance your workflow effortlessly.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-8">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row items-start md:justify-end gap-12 lg:gap-20">
          {/* Links Section */}
          <div>
            <h2 className="font-bold text-gray-900 mb-6 text-base">Company</h2>
            <ul className="text-sm space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center group">
                  Home
                  <svg className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center group">
                  About us
                  <svg className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center group">
                  Contact us
                  <svg className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center group">
                  Privacy policy
                  <svg className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-sm">
            <h2 className="font-bold text-gray-900 mb-6 text-base flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Newsletter
            </h2>
            <div className="text-sm space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Get the latest news, articles, and resources delivered to your inbox weekly.
              </p>
              <form onSubmit={handleSubscribe} className="pt-2">
                <div className="flex flex-col sm:flex-row items-stretch gap-2">
                  <input
                    className="border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-full sm:max-w-64 h-11 rounded-lg px-4 text-sm transition-all"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-primary hover:bg-primary/90 active:scale-95 sm:w-28 h-11 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={subscribed}
                  >
                    {subscribed ? (
                      <span className="flex items-center justify-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Done
                      </span>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
              </form>
              {subscribed && (
                <p className="text-green-600 text-xs flex items-center gap-1 animate-fade-in">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Successfully subscribed to our newsletter!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="pt-8 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
        <p className="text-center sm:text-left">
          Copyright {new Date().getFullYear()} ©{" "}
          <span className="font-semibold text-gray-700">Riya Bansal</span>. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer