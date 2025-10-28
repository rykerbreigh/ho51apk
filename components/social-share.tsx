'use client'

import { useState } from 'react'
import { t } from '@/lib/translations'
import type { Language } from '@/lib/translations'

interface SocialShareProps {
  title: string
  language?: Language
}

export function SocialShare({ title, language = 'en' }: SocialShareProps) {
  const [showCopied, setShowCopied] = useState(false)

  const handleTwitterShare = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
    }
  }

  const handleFacebookShare = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    }
  }

  const handlePinterestShare = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href
      window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`, '_blank')
    }
  }

  const handleCopyLink = async () => {
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(window.location.href)
        setShowCopied(true)
        
        // Hide the "Copied!" message after 2 seconds
        setTimeout(() => {
          setShowCopied(false)
        }, 2000)
      } catch (err) {
        console.error('Failed to copy link:', err)
      }
    }
  }

  return (
    <div className="flex items-center space-x-4 mb-6">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {t("share", language)}:
      </span>
      
      <button 
        onClick={handleTwitterShare}
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-[15px] transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg> 
      </button>
      
      <button 
        onClick={handleFacebookShare}
        className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-3 py-2 rounded-[15px] transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg> 
      </button>
      
      <button 
        onClick={handlePinterestShare} 
        className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-[15px] transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.958 1.404-5.958s-.359-.219-.359-1.219c0-1.142.662-1.997 1.487-1.997.701 0 1.04.526 1.04 1.156 0 .703-.448 1.754-.719 2.728-.219.922.461 1.675 1.353 1.675 1.627 0 2.877-1.715 2.877-4.188 0-2.188-1.571-3.717-3.818-3.717-2.601 0-4.129 1.949-4.129 3.966 0 .786.303 1.628.681 2.086.074.09.084.169.062.26-.068.282-.22.896-.249 1.021-.041.179-.134.219-.309.132-1.215-.566-1.976-2.343-1.976-3.773 0-3.071 2.23-5.891 6.428-5.891 3.365 0 5.985 2.401 5.985 5.616 0 3.351-2.115 6.05-5.045 6.05-.984 0-1.911-.513-2.227-1.155l-.623 2.374c-.225.871-.834 1.964-1.241 2.629.934.289 1.93.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
        </svg> 
      </button>
      
      {showCopied ? (
        <div className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-[15px] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium">{t("copied", language)}</span>
        </div>
      ) : (
        <button 
          onClick={handleCopyLink}
          className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-[15px] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg> 
        </button>
      )}
    </div>
  )
}
