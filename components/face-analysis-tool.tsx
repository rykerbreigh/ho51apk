"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Scan, Star, Share2, QrCode, Eye, Smile, Users, BarChart3, User, Ruler } from "lucide-react"
import { t, type Language } from "@/lib/translations"

interface DetailedFeatureAnalysis {
  characteristics: Record<string, string>
  description: string
  measurements: Record<string, number>
  ratings: Record<string, number>
}
interface FaceShapeAnalysis {
  shape: string
  translated_shape: string
  description: string
  primary_percentage: number
  shape_probabilities: Record<string, number>
  measurements: Record<string, number>
  characteristics: Record<string, string>
  recommendations: string[]
}

// Update the detailed_analysis in FaceRatingResult interface
// detailed_analysis: {
//   beard: DetailedFeatureAnalysis
//   eyebrows: DetailedFeatureAnalysis
//   eyes: DetailedFeatureAnalysis
//   lips: DetailedFeatureAnalysis
//   nose: DetailedFeatureAnalysis
//   face_shape: FaceShapeAnalysis  // ADD THIS LINE
// }
interface FaceRatingResult {
  face_id: number
  overall_rating: number
  percentage: number
  rating_message: string
  language: string
  symmetry_score: number
  highlighted_image: string
  feature_ratings: {
    beard: number
    eyebrows: number
    eyes: number
    lips: number
    nose: number
  }
  detailed_analysis: {
    beard: DetailedFeatureAnalysis
    eyebrows: DetailedFeatureAnalysis
    eyes: DetailedFeatureAnalysis
    lips: DetailedFeatureAnalysis
    nose: DetailedFeatureAnalysis
    face_shape: FaceShapeAnalysis
  }
  measurements: {
    face_width: number
    face_height: number
    forehead_width: number
    interocular_distance: number
    eye_span: number
    nose_length: number
    nose_width: number
    mouth_width: number
    jaw_width: number
  }
  proportions: {
    face_ratio: number
    forehead_ratio: number
    eye_spacing_ratio: number
    nose_length_ratio: number
    nose_width_ratio: number
    mouth_width_ratio: number
    jaw_width_ratio: number
  }
}

interface AnalysisData {
  tool_type: string
  face_count: number
  mesh_highlighting: boolean
  original_image_url: string
  filename_base: string
  average_rating: number
  average_percentage: number
  highest_rated: FaceRatingResult
  individual_ratings: FaceRatingResult[]
  image_urls: {
    [key: string]: {
      highlighted: string
    }
  }
}

interface FaceAnalysisToolProps {
  lang?: Language
}

export function FaceAnalysisToolDemo({ lang = "es" }: FaceAnalysisToolProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("shape")
  const [activeFace, setActiveFace] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  // Improved scanning animation effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (loading) {
      setScanProgress(0)
      interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            return 0 // Reset for continuous scanning
          }
          return prev + 1.5 // Smoother animation
        })
      }, 30) // Faster update rate
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [loading])

  // Auto-process when image is uploaded
  useEffect(() => {
    if (uploadedFile && !loading && !analysisData) {
      analyzeImage()
    }
  }, [uploadedFile])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
      if (!validTypes.includes(file.type)) {
        setError(t("invalidFileType", lang))
        return
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError(t("fileSizeError", lang))
        return
      }

      setError(null)
      setUploadedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
      setAnalysisData(null)
    }
  }

  const analyzeImage = async () => {
    if (!uploadedFile) return

    setLoading(true)
    setError(null)
    setScanProgress(0)

    try {
      // Create form data with binary image, tool_type, and language
      const formData = new FormData()
      formData.append("image", uploadedFile)
      formData.append("tool_type", "face_rating")
      formData.append("language", lang) // Add language parameter

      // Call the face analysis API with binary image
      const response = await fetch("https://api.testdebelleza.com/api/analyze", {
        method: "POST",
        body: formData, // Send as binary form data with tool_type and language
      })

      if (!response.ok) {
        throw new Error(t("analysisError", lang))
      }

      const result = await response.json()
      console.log("API Response:", result) // Debug log

      if (!result.success) {
        throw new Error(result.message || t("analysisError", lang))
      }

      if (result.data.face_count === 0) {
        throw new Error(t("noFaceDetected", lang))
      }

      setAnalysisData(result.data)
      setActiveFace(0)
      setActiveTab("shape")
    } catch (error) {
      console.error("Analysis error:", error)
      setError(error instanceof Error ? error.message : t("errorOccurred", lang))
    } finally {
      setLoading(false)
      setScanProgress(0)
    }
  }

  const resetAnalysis = () => {
    setUploadedImage(null)
    setUploadedFile(null)
    setAnalysisData(null)
    setError(null)
    setLoading(false)
    setScanProgress(0)
    setActiveFace(0)
    setActiveTab("shape")
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return "text-green-600 dark:text-green-400"
    if (rating >= 6) return "text-pink-600 dark:text-pink-400"
    if (rating >= 4) return "text-orange-600 dark:text-orange-400"
    return "text-red-600 dark:text-red-400"
  }

  const getProgressColor = (rating: number) => {
    if (rating >= 8) return "bg-green-500"
    if (rating >= 6) return "bg-pink-500"
    if (rating >= 4) return "bg-orange-500"
    return "bg-red-500"
  }

  const currentFace = analysisData?.individual_ratings?.[activeFace]

  // Tab configuration with icons
  const tabConfig = [
    { value: "shape", label: t("shape", lang), icon: User, mobileOnly: false },
    { value: "score", label: t("score", lang), icon: Star, mobileOnly: false },
    { value: "others", label: t("others", lang), icon: BarChart3, mobileOnly: false },
    { value: "eyes", label: t("eyes", lang), icon: Eye, mobileOnly: false },
    { value: "brows", label: t("brows", lang), icon: User, mobileOnly: false },
    { value: "lips", label: t("lips", lang), icon: Smile, mobileOnly: false },
    { value: "nose", label: t("nose", lang), icon: Users, mobileOnly: false },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 mb-11">
      {/* Upload Section */}
      {!analysisData && (
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
          {/* Left image container */}
          <div className="relative w-full max-w-2xl">
            <div
              ref={imageContainerRef}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-teal-400 to-teal-600"
            >
              {uploadedImage ? (
                <img
                  src={uploadedImage || "/placeholder.svg"}
                  alt={t("uploadedFace", lang)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="/images/featured.webp"
                  alt="Featured face analysis example"
                  className="w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-100"
                  fetchPriority="high"
                  width={640}
                  height={441}
                />
              )}
              {loading && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center">
                  {/* Scanning line animation */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent shadow-lg shadow-pink-400/50 transition-all duration-75 ease-linear"
                      style={{
                        top: `${scanProgress}%`,
                        opacity: loading ? 1 : 0,
                      }}
                    />
                    <div
                      className="absolute left-0 right-0 h-8 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent transition-all duration-75 ease-linear"
                      style={{
                        top: `${Math.max(0, scanProgress - 4)}%`,
                        opacity: loading ? 1 : 0,
                      }}
                    />
                  </div>

                  <div className="text-white text-center space-y-4 z-10">
                    <div className="space-y-2">
                      <Scan className="w-10   mx-auto animate-pulse text-pink-400" />
                      <p className="font-medium text-lg">{t("scanningFace", lang)}</p>
                      <Progress
                        value={scanProgress}
                        className="w-48 mx-auto h-2 bg-gray-700"
                      />
                      <p className="text-sm text-gray-300">{Math.round(scanProgress)}%</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right controls column */}
          <div className="flex flex-col space-y-6 max-w-md w-full">
            <div className="border-2 border-dashed border-pink-400 dark:border-pink-500 rounded-xl p-8 hover:border-pink-500 dark:hover:border-pink-400 transition-colors bg-white dark:bg-gray-800">
              <div className="text-center space-y-6">
                <div className="mx-auto w-24 h-24 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                  <Upload className="w-12 h-12 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t("uploadImage", lang)}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t("fileRequirements", lang)}</p>
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                    className="hidden"
                    disabled={loading}
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={loading}
                    className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500 text-black py-3 px-6 rounded-xl font-semibold transition-colors"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {t("chooseImage", lang)}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Error Display */}
      {error && (
        <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 text-red-700 dark:text-red-300">
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
              <p>{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Section */}
      {analysisData && currentFace && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image and Actions */}
            <div className="space-y-6">
              {/* Face Image */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <img
                  src={
                    analysisData.image_urls[`face_${currentFace.face_id || "/placeholder.svg"}`]?.highlighted ||
                    analysisData.original_image_url ||
                    uploadedImage ||
                    "/placeholder.svg"
                  }
                  alt={t("analyzedFace", lang)}
                  className="w-full h-auto"
                />
              </div>

              {/* Feature Ratings Overview */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-3 text-pink-600 dark:text-pink-400">{t("featureRatings", lang)}</h4>
                <div className="space-y-3">
                  {Object.entries(currentFace.feature_ratings).map(([feature, rating]) => (
                    <div key={feature} className="flex items-center justify-between">
                      <span className="capitalize text-sm text-gray-700 dark:text-gray-300">{t(feature, lang)}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(rating)}`}
                            style={{ width: `${(rating / 10) * 100}%` }}
                          />
                        </div>
                        <span className={`text-sm font-semibold ${getRatingColor(rating)}`}>{rating.toFixed(1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={resetAnalysis}
                  variant="outline"
                  className="w-full border-pink-500 dark:border-pink-400 text-pink-600 dark:text-pink-400 hover:bg-pink-500 hover:text-black dark:hover:bg-pink-400 dark:hover:text-black py-3 rounded-xl font-semibold bg-transparent"
                >
                  {t("uploadNew", lang)}
                </Button>
              </div>
            </div>

            {/* Right Column - Analysis Results */}
            <div className="lg:col-span-2">
              {/* Face Selection Tabs (if multiple faces) */}
              {analysisData.face_count > 1 && (
                <div className="mb-6">
                  <div className="flex gap-2">
                    {Array.from({ length: analysisData.face_count }, (_, i) => (
                      <Button
                        key={i}
                        onClick={() => setActiveFace(i)}
                        variant={activeFace === i ? "default" : "outline"}
                        className={`px-4 py-2 rounded-lg ${activeFace === i
                          ? "bg-pink-500 text-black hover:bg-pink-600"
                          : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                      >
                        {t("face", lang)} {i + 1}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Analysis Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid h-auto w-full grid-cols-4 md:grid-cols-7 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 gap-1">
                  {tabConfig.map(({ value, label, icon: Icon }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      className="flex items-center justify-center gap-2 text-xs md:text-sm px-2 py-2  data-[state=active]:bg-pink-500 data-[state=active]:text-black data-[state=active]:shadow-md  data-[state=active]:rounded-[11px]  transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="hidden md:inline font-medium">{label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Score Tab Content */}
                <TabsContent value="score" className="mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🌟</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{currentFace.rating_message}</h3>
                    </div>

                    {/* Circular Progress */}
                    <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
                      <div className="relative w-32 h-32">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-gray-300 dark:text-gray-700"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 50}`}
                            strokeDashoffset={`${2 * Math.PI * 50 * (1 - currentFace.percentage / 100)}`}
                            className="text-pink-500 dark:text-pink-400"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">{currentFace.percentage}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">{t("overallRating", lang)}</span>
                            <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                              {currentFace.overall_rating.toFixed(1)}/10
                            </span>
                          </div>
                          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-red-500 via-pink-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                              style={{ width: `${currentFace.percentage}%` }}
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">{t("symmetryScore", lang)}</span>
                            <span className="font-semibold text-gray-900 dark:text-white">{currentFace.symmetry_score.toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Eyes Tab Content */}
                <TabsContent value="eyes" className="mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-6">
                      <Eye className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("eyeAnalysis", lang)}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {currentFace.detailed_analysis.eyes.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Characteristics */}
                      <div>
                        <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("characteristics", lang)}</h4>
                        <div className="space-y-3">
                          {Object.entries(currentFace.detailed_analysis.eyes.characteristics).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                              <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Measurements & Ratings */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("measurements", lang)}</h4>
                          <div className="space-y-2">
                            {Object.entries(currentFace.detailed_analysis.eyes.measurements).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                <span className="font-medium text-gray-900 dark:text-white">{value.toFixed(1)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("ratings", lang)}</h4>
                          <div className="space-y-3">
                            {Object.entries(currentFace.detailed_analysis.eyes.ratings).map(([key, rating]) => (
                              <div key={key} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                  <span className={`font-semibold ${getRatingColor(rating)}`}>
                                    {rating.toFixed(1)}/10
                                  </span>
                                </div>
                                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(rating)}`}
                                    style={{ width: `${(rating / 10) * 100}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Nose Tab Content */}
                <TabsContent value="nose" className="mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-6">
                      <Users className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("noseAnalysis", lang)}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {currentFace.detailed_analysis.nose.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Characteristics */}
                      <div>
                        <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("characteristics", lang)}</h4>
                        <div className="space-y-3">
                          {Object.entries(currentFace.detailed_analysis.nose.characteristics).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                              <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Measurements & Ratings */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("measurements", lang)}</h4>
                          <div className="space-y-2">
                            {Object.entries(currentFace.detailed_analysis.nose.measurements).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                <span className="font-medium text-gray-900 dark:text-white">{value.toFixed(1)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("ratings", lang)}</h4>
                          <div className="space-y-3">
                            {Object.entries(currentFace.detailed_analysis.nose.ratings).map(([key, rating]) => (
                              <div key={key} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                  <span className={`font-semibold ${getRatingColor(rating)}`}>
                                    {rating.toFixed(1)}/10
                                  </span>
                                </div>
                                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(rating)}`}
                                    style={{ width: `${(rating / 10) * 100}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Lips Tab Content */}
                <TabsContent value="lips" className="mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-6">
                      <Smile className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("lipAnalysis", lang)}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {currentFace.detailed_analysis.lips.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Characteristics */}
                      <div>
                        <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("characteristics", lang)}</h4>
                        <div className="space-y-3">
                          {Object.entries(currentFace.detailed_analysis.lips.characteristics).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                              <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Measurements & Ratings */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("measurements", lang)}</h4>
                          <div className="space-y-2">
                            {Object.entries(currentFace.detailed_analysis.lips.measurements).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                <span className="font-medium text-gray-900 dark:text-white">{value.toFixed(1)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("ratings", lang)}</h4>
                          <div className="space-y-3">
                            {Object.entries(currentFace.detailed_analysis.lips.ratings).map(([key, rating]) => (
                              <div key={key} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                  <span className={`font-semibold ${getRatingColor(rating)}`}>
                                    {rating.toFixed(1)}/10
                                  </span>
                                </div>
                                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(rating)}`}
                                    style={{ width: `${(rating / 10) * 100}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Eyebrows Tab Content */}
                <TabsContent value="brows" className="mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-6">
                      <User className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("browAnalysis", lang)}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {currentFace.detailed_analysis.eyebrows.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Characteristics */}
                      <div>
                        <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("characteristics", lang)}</h4>
                        <div className="space-y-3">
                          {Object.entries(currentFace.detailed_analysis.eyebrows.characteristics).map(
                            ([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Measurements & Ratings */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("measurements", lang)}</h4>
                          <div className="space-y-2">
                            {Object.entries(currentFace.detailed_analysis.eyebrows.measurements).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                <span className="font-medium text-gray-900 dark:text-white">{value.toFixed(1)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("ratings", lang)}</h4>
                          <div className="space-y-3">
                            {Object.entries(currentFace.detailed_analysis.eyebrows.ratings).map(([key, rating]) => (
                              <div key={key} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                  <span className={`font-semibold ${getRatingColor(rating)}`}>
                                    {rating.toFixed(1)}/10
                                  </span>
                                </div>
                                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(rating)}`}
                                    style={{ width: `${(rating / 10) * 100}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Measurements Tab */}
                {/* Face Shape Tab */}
                <TabsContent value="shape" className="mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-24 h-16 bg-gray-200 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("faceShapeAnalysis", lang)} : <span className="text-pink-500">{currentFace.detailed_analysis.face_shape?.translated_shape} </span></h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {currentFace.detailed_analysis.face_shape?.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Primary Face Shape */}
                      <div>
                        {/* Characteristics */}
                        <div className="mt-4">
                          <h5 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("characteristics", lang)}</h5>
                          <div className="space-y-2">
                            {Object.entries(currentFace.detailed_analysis.face_shape?.characteristics || {}).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="capitalize text-gray-600 dark:text-gray-300">{key}</span>
                                <span className="font-medium text-gray-900 dark:text-white">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {currentFace.detailed_analysis.face_shape?.recommendations && (
                          <div className="mt-6">
                            <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("styleRecommendations", lang)}</h4>
                            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                              <ul className="space-y-2">
                                {currentFace.detailed_analysis.face_shape.recommendations.map((rec, index) => (
                                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>{rec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Shape Probabilities */}
                      <div>
                        <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("allShapeProbabilities", lang)}</h4>
                        <div className="space-y-3">
                          {Object.entries(currentFace.detailed_analysis.face_shape?.shape_probabilities || {})
                            .sort(([, a], [, b]) => b - a)
                            .map(([shape, percentage]) => (
                              <div key={shape} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className="font-medium text-gray-900 dark:text-white">{shape}</span>
                                  <span className="font-bold text-pink-600 dark:text-pink-400">{percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                                  <div
                                    className="bg-pink-500 dark:bg-pink-400 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>

                    {/* ADD THIS NEW SECTION - Facial Measurements */}
                    <div className="mt-8">
                      <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("facialMeasurements", lang)}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {Object.entries(currentFace.measurements).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                            <span className="capitalize text-gray-600 dark:text-gray-300 text-sm font-medium">
                              {key.replace(/_/g, " ")}
                            </span>
                            <span className="font-bold text-gray-900 dark:text-white">
                              {value.toFixed(1)}px
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* ADD THIS NEW SECTION - Facial Proportions */}
                    <div className="mt-8">
                      <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("facialProportions", lang)}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(currentFace.proportions).map(([key, value]) => (
                          <div key={key} className="space-y-2 p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                            <div className="flex justify-between items-center">
                              <span className="capitalize text-gray-600 dark:text-gray-300 text-sm font-medium">
                                {key.replace(/_/g, " ")}
                              </span>
                              <span className="font-bold text-gray-900 dark:text-white">
                                {(value * 100).toFixed(1)}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-pink-500 dark:bg-pink-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${Math.min(value * 100, 100)}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Others Tab - Summary */}
                <TabsContent value="others" className="mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-6">
                      <BarChart3 className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("analysisOverview", lang)}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("topFeatures", lang)}</h4>
                        <div className="space-y-3">
                          {Object.entries(currentFace.feature_ratings)
                            .sort(([, a], [, b]) => b - a)
                            .slice(0, 3)
                            .map(([feature, rating]) => (
                              <div
                                key={feature}
                                className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                              >
                                <span className="capitalize font-medium text-gray-900 dark:text-white">{t(feature, lang)}</span>
                                <span className={`font-bold ${getRatingColor(rating)}`}>{rating.toFixed(1)}/10</span>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4 text-pink-600 dark:text-pink-400">{t("improvementAreas", lang)}</h4>
                        <div className="space-y-3">
                          {Object.entries(currentFace.feature_ratings)
                            .sort(([, a], [, b]) => a - b)
                            .slice(0, 3)
                            .map(([feature, rating]) => (
                              <div
                                key={feature}
                                className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                              >
                                <span className="capitalize font-medium text-gray-900 dark:text-white">{t(feature, lang)}</span>
                                <span className={`font-bold ${getRatingColor(rating)}`}>{rating.toFixed(1)}/10</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      )}
      <br /><br /></div>
  )
}
