import React from 'react'
import { assets } from '../assets/assets'
import { Quote, Star } from 'lucide-react'

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: 'John Doe',
      title: 'Marketing Director',
      company: 'TechCorp',
      content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: 'Jane Smith',
      title: 'Content Creator',
      company: 'DesignHub',
      content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: 'Sarah Wilson',
      title: 'Content Writer',
      company: 'MediaFlow',
      content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
      rating: 5,
    },
  ]

  return (
    <div className='px-4 sm:px-20 xl:px-32 py-24 bg-gradient-to-b from-white to-gray-50'>
      {/* Header Section */}
      <div className='text-center mb-16'>
        <div className='inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6'>
          <Star className='w-4 h-4 text-primary fill-current' />
          <span className='text-sm font-medium text-primary'>Testimonials</span>
        </div>
        
        <h2 className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'>
          Loved by Creators
        </h2>
        <p className='text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed'>
          Don't just take our word for it. Here's what our users are saying about their experience.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className='group relative p-8 rounded-2xl bg-white shadow-md border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden'
          >
            {/* Gradient Background on Hover */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            
            {/* Content */}
            <div className='relative z-10'>
              {/* Quote Icon */}
              <div className='w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <Quote className='w-5 h-5 text-white' />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array(5).fill(0).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-4 h-4 ${
                      starIndex < testimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300 fill-current'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className='text-gray-700 text-sm leading-relaxed mb-6'>
                "{testimonial.content}"
              </p>

              {/* Divider */}
              <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6' />

              {/* User Info */}
              <div className='flex items-center gap-4'>
                <div className='relative'>
                  <img
                    src={testimonial.image}
                    className='w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md'
                    alt={testimonial.name}
                  />
                  <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 text-sm'>
                    {testimonial.name}
                  </h3>
                  <p className='text-xs text-gray-500'>
                    {testimonial.title}
                  </p>
                  <p className='text-xs text-primary font-medium'>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity' />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className='text-center mt-16'>
        <p className='text-gray-600 mb-4'>
          Join thousands of satisfied creators
        </p>
        <button className='inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95 transition-all duration-300'>
          Start Creating Free
          <svg className='w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Testimonial