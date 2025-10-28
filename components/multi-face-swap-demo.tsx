"use client"

import { getTranslation, type Language } from "@/lib/translations"
import { useState, useRef, useEffect } from "react"

interface MultiFaceSwapDemoProps {
  lang?: Language
} 

export function MultiFaceSwapDemo({ lang = "en" }: MultiFaceSwapDemoProps) {
  const translation = getTranslation(lang)
  
  const [sourceImage, setSourceImage] = useState<string | null>(null)
  const [targetImage, setTargetImage] = useState<string | null>(null)
  const [sourceFile, setSourceFile] = useState<File | null>(null)
  const [targetFile, setTargetFile] = useState<File | null>(null)
  const [faceIndex, setFaceIndex] = useState<number>(0)
  const [resultImage, setResultImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [animationToggle, setAnimationToggle] = useState(false)
  
  const sourceInputRef = useRef<HTMLInputElement>(null)
  const targetInputRef = useRef<HTMLInputElement>(null)
  const leftSectionRef = useRef<HTMLDivElement>(null)

  // Animation effect during loading
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (loading && sourceImage && targetImage) {
      interval = setInterval(() => {
        setAnimationToggle(prev => !prev)
      }, 2000) // Switch every 2 seconds
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [loading, sourceImage, targetImage])

  const scrollToTop = () => {
    if (window.innerWidth < 1024 && leftSectionRef.current) { // Mobile check
      leftSectionRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }

  const handleSourceUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
      if (!validTypes.includes(file.type)) {
        setError(translation.invalidFileType)
        return
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError(translation.fileSizeError)
        return
      }

      setError(null)
      setSourceFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setSourceImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTargetUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
      if (!validTypes.includes(file.type)) {
        setError(translation.invalidFileType)
        return
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError(translation.fileSizeError)
        return
      }

      setError(null)
      setTargetFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setTargetImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleMultiFaceSwap = async () => {
    if (!sourceFile || !targetFile) {
      setError(translation.uploadBothImages)
      return
    }

    scrollToTop() // Scroll to top on mobile
    setLoading(true)
    setError(null)
    setResultImage(null)

    const formData = new FormData()
    formData.append('source', sourceFile)
    formData.append('target', targetFile)
    formData.append('face_index', faceIndex.toString())

    try {
      const response = await fetch('https://api.onlinefaceswap.net/multifaceswap?video=false', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail?.[0]?.msg || errorData.message || translation.processError)
      }

      const data = await response.json()

      if (!data?.output_file) {
        throw new Error(translation.invalidResponse)
      }

      // Construct the full URL for the result image
      const resultUrl = `https://api.onlinefaceswap.net/assets/${data.output_file}`
      setResultImage(resultUrl)

    } catch (error) {
      console.error('Multi-HOT51 error:', error)
      setError(error instanceof Error ? error.message : translation.generalError)
    } finally {
      setLoading(false)
      setAnimationToggle(false)
    }
  }

  const handleDownload = async () => {
    if (!resultImage) return

    try {
      const response = await fetch(resultImage)
      if (!response.ok) throw new Error(translation.downloadError)

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `multi-face-swap-${Date.now()}.png`)
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Download failed:', err)
      setError(translation.downloadError)
    }
  }

  const canSwap = sourceImage && targetImage && !loading

  // Get the image to display in left section
  const getLeftSectionImage = () => {
    if (resultImage) {
      return resultImage
    }
    if (loading && sourceImage && targetImage) {
      return animationToggle ? sourceImage : targetImage
    }
    return "/multi/hero.webp"
  }

  const getLeftSectionAlt = () => {
    if (resultImage) {
      return translation.multiFaceSwapResult
    }
    if (loading) {
      return animationToggle ? translation.sourceImage : translation.targetImageAlt
    }
    return translation.multiimagealt
  }

  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center mb-20">
      {/* Left image container */}
      <div 
        ref={leftSectionRef}
        className="relative w-full max-w-xl aspect-[640/441] rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src={getLeftSectionImage()}
          alt={getLeftSectionAlt()}
          className={`w-full h-full ${
            resultImage ? 'object-contain' : 'object-cover'
          } rounded-xl transition-opacity duration-500 ${
            loading ? 'opacity-80' : 'opacity-100'
          }`}
          fetchPriority="high"
          width={640}
          height={441}
        />
        
        {/* Loading overlay with analyzing animation */}
        {loading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="mb-4">
                <div className="animate-pulse">
                  <div className="h-1 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full mb-2 animate-pulse"></div>
                  <div className="h-1 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full mb-2 animate-pulse delay-75"></div>
                  <div className="h-1 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
              <p className="text-sm font-medium">{translation.analyzing}</p>
            </div>
          </div>
        )}

        {/* Download button overlay for result */}
        {resultImage && !loading && (
          <div className="absolute bottom-4 right-4">
            <button
              onClick={handleDownload}
              className="bg-[#ffdb01] hover:bg-pink-500 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                <path d="M480-315.33 284.67-510.67l47.33-48L446.67-444v-356h66.66v356L628-558.67l47.33 48L480-315.33ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67V-362h66.67v135.33h506.66V-362H800v135.33q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z"/>
              </svg>
              {translation.download}
            </button>
          </div>
        )}
      </div>

      {/* Right controls column */}
      <div className="flex flex-col space-y-6 max-w-[477px] min-w-[342px] w-full">
        <div className="flex gap-4">
          {/* Source Face Upload Button */}
          <div className="flex-1">
            <input
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleSourceUpload}
              ref={sourceInputRef}
              className="hidden"
              disabled={loading}
            />
            {sourceImage ? (
              <div 
                onClick={() => !loading && sourceInputRef.current?.click()}
                className={`dashed-orangish-border rounded-xl w-full aspect-[1/1.2] min-h-[200px] ${
                  loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-pink-500'
                } transition relative overflow-hidden`}
              >
                <img 
                  src={sourceImage} 
                  alt="Source face preview" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-2 left-2 bg-[#ffdb01] text-black px-2 py-1 rounded text-xs">
                  {translation.sourceFaceUploaded}
                </div>
              </div>
            ) : (
              <button 
                onClick={() => sourceInputRef.current?.click()}
                disabled={loading}
                className={`dashed-orangish-border rounded-xl w-full aspect-[1/1.2] flex flex-col items-center justify-center gap-3 py-16 px-4 min-h-[200px] text-gray-600 dark:text-gray-300 transition ${
                  loading 
                    ? 'cursor-not-allowed opacity-50' 
                    : 'cursor-pointer hover:text-gray-900 dark:hover:text-white hover:border-pink-500'
                }`}
              >
                <svg className="w-8 h-8 text-[#ffdb01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="text-xs select-none">{translation.uploadSourceFace}</span>
              </button>
            )}
          </div>

          {/* Target Image Upload Button */}
          <div className="flex-1">
            <input
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleTargetUpload}
              ref={targetInputRef}
              className="hidden"
              disabled={loading}
            />
            {targetImage ? (
              <div 
                onClick={() => !loading && targetInputRef.current?.click()}
                className={`dashed-orangish-border rounded-xl w-full aspect-[1/1.2] min-h-[200px] ${
                  loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-pink-500'
                } transition relative overflow-hidden`}
              >
                <img 
                  src={targetImage} 
                  alt="Target image preview" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-2 left-2 bg-[#ffdb01] text-black px-2 py-1 rounded text-xs">
                  {translation.targetImageUploaded}
                </div>
              </div>
            ) : (
              <button 
                onClick={() => targetInputRef.current?.click()}
                disabled={loading}
                className={`dashed-orangish-border rounded-xl w-full aspect-[1/1.2] flex flex-col items-center justify-center gap-3 py-16 px-4 min-h-[200px] text-gray-600 dark:text-gray-300 transition ${
                  loading 
                    ? 'cursor-not-allowed opacity-50' 
                    : 'cursor-pointer hover:text-gray-900 dark:hover:text-white hover:border-pink-500'
                }`}
              >
                <svg className="w-8 h-8 text-[#ffdb01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-xs select-none">{translation.uploadTargetImage}</span>
              </button>
            )}
          </div>
        </div>



        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center text-sm">
            {error}
          </div>
        )}
 
        <button
          onClick={handleMultiFaceSwap}
          disabled={!canSwap}
          className={`text-white text-sm rounded-full py-3 font-semibold select-none transition-all ${
            canSwap 
              ? 'bg-[#4a2e19] hover:bg-[#5a3520] cursor-pointer' 
              : 'bg-gray-400 cursor-not-allowed btn-disabled'
          }`}
        >
          {loading ? translation.processing : translation.swapMultiFaces}
        </button>
      </div>
    </section>
  )
}
