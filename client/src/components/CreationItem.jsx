import React, { useState } from 'react'
import Markdown from 'react-markdown'

const CreationItem = ({ item }) => {

  const [expanded, setExpanded] = useState(false)

  // Type-specific styling
  const typeStyles = {
    image: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      gradient: 'from-purple-500 to-pink-500'
    },
    text: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      gradient: 'from-blue-500 to-cyan-500'
    },
    default: {
      bg: 'bg-gray-50',
      border: 'border-gray-200',
      text: 'text-gray-700',
      gradient: 'from-gray-500 to-slate-500'
    }
  }

  const style = typeStyles[item.type] || typeStyles.default

  return (
    <div
      className='group max-w-5xl bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden'
    >
      {/* Header - Always Visible */}
      <div
        onClick={() => setExpanded(!expanded)}
        className='p-5 cursor-pointer'
      >
        <div className='flex justify-between items-start gap-4'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-base font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-slate-900 transition-colors'>
              {item.prompt}
            </h2>
            <div className='flex items-center gap-3 text-sm text-gray-500'>
              <span className='flex items-center gap-1'>
                <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(item.created_at).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <span className={`${style.bg} ${style.border} ${style.text} px-4 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap`}>
              {item.type}
            </span>
            
            {/* Expand/Collapse Icon */}
            <div className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
              <svg className='w-5 h-5 text-gray-400' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-5 pb-5 border-t border-gray-100'>
          {item.type === 'image' ? (
            <div className='mt-4'>
              <div className='relative rounded-lg overflow-hidden bg-gray-50 border border-gray-200'>
                <img
                  src={item.content}
                  alt="Generated content"
                  className='w-full max-w-2xl mx-auto hover:scale-105 transition-transform duration-500'
                />
              </div>
            </div>
          ) : (
            <div className='mt-4 max-h-96 overflow-y-auto text-sm text-slate-700 leading-relaxed'>
              <div className='prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded'>
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreationItem