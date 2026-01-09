import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

  const navigate = useNavigate()

  return (
    <div className='relative flex flex-col w-full justify-center items-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen px-4 sm:px-20 xl:px-32 overflow-hidden'>
       
       {/* Floating Elements for Visual Interest */}
       <div className='absolute inset-0 overflow-hidden pointer-events-none'>
         <div className='absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse'></div>
         <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
       </div>

       {/* Main Content */}
       <div className='relative z-10 text-center mb-8 animate-fade-in'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm'>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
          </span>
          <span className='text-sm font-medium text-gray-700'>AI-Powered Content Creation</span>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mx-auto leading-tight mb-6'>
          Create amazing content <br /> 
          <span className='bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient'>
            with AI tools
          </span>
        </h1>
        
        <p className='mt-6 max-w-xs sm:max-w-lg 2xl:max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed'>
          Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow effortlessly.
        </p>
       </div>

       {/* CTA Buttons */}
       <div className='relative z-10 flex flex-wrap justify-center gap-4 mb-10'>
        <button
          onClick={() => navigate('/ai')}
          className='group bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center gap-2'
        >
          Start creating now
          <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <button className='group bg-white/80 backdrop-blur-sm hover:bg-white font-semibold px-8 py-4 rounded-xl border border-gray-300 hover:border-gray-400 hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center gap-2'>
          <svg className='w-5 h-5 text-gray-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch demo
        </button>
       </div>

       {/* Trust Badge */}
       <div className='relative z-10 flex items-center gap-3 text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm'>
        <div className='flex -space-x-2'>
          <img src={assets.user_group} alt="Users" className='h-8 w-8 rounded-full border-2 border-white' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-gray-900'>10k+</span>
          <span className='text-sm'>people trust us</span>
        </div>
        <div className='flex gap-0.5'>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className='w-4 h-4 text-yellow-400 fill-current' viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
       </div>

       {/* Feature Highlights */}
       <div className='relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto'>
        <div className='bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
          <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4'>
            <svg className='w-6 h-6 text-white' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className='font-semibold text-gray-900 mb-2'>Lightning Fast</h3>
          <p className='text-sm text-gray-600'>Generate content in seconds with our optimized AI models</p>
        </div>

        <div className='bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
          <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4'>
            <svg className='w-6 h-6 text-white' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className='font-semibold text-gray-900 mb-2'>Secure & Private</h3>
          <p className='text-sm text-gray-600'>Your data is encrypted and never shared with third parties</p>
        </div>

        <div className='bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
          <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4'>
            <svg className='w-6 h-6 text-white' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className='font-semibold text-gray-900 mb-2'>Premium Quality</h3>
          <p className='text-sm text-gray-600'>Industry-leading AI models for professional results</p>
        </div>
       </div>

       <style jsx>{`
         @keyframes gradient {
           0%, 100% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
         }
         .animate-gradient {
           background-size: 200% auto;
           animation: gradient 3s ease infinite;
         }
         @keyframes fade-in {
           from { opacity: 0; transform: translateY(20px); }
           to { opacity: 1; transform: translateY(0); }
         }
         .animate-fade-in {
           animation: fade-in 0.8s ease-out;
         }
         .delay-1000 {
           animation-delay: 1s;
         }
       `}</style>
    </div>
  )
}

export default Hero