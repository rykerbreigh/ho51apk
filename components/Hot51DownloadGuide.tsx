"use client"

import React from "react"
import { Globe, Shield, FolderSearch, Download, Rocket, Smartphone, HardDrive, Wifi, AlertCircle } from "lucide-react"

export function Hot51DownloadGuide() {
  const androidSteps = [
    {
      number: "1",
      title: "Visit our Website",
      description: "First, visit our website and download the APK file using the given download button. It will take a few minutes, so please be patient.",
      icon: Globe,
    },
    {
      number: "2",
      title: "Enable Unknown Sources",
      description: "As we know, third-party apps need permission from Android devices. Your next step is to open Settings and enable permissions from 'Unknown sources'.",
      icon: Shield,
    },
    {
      number: "3",
      title: "Find the APK File",
      description: "While enabling permissions, your file will be downloaded, and you can locate it in the gallery download section.",
      icon: FolderSearch,
    },
    {
      number: "4",
      title: "Install the APK",
      description: "Now, it's finally time to install the app. Open the APK file from the download section and tap the install button. Wait a few seconds to complete.",
      icon: Download,
    },
    {
      number: "5",
      title: "Launch the App",
      description: "Once installed, you can find the app icon and launch it from your Mobile home screen.",
      icon: Rocket,
    },
  ]

  const androidRequirements = [
    { label: "Android", value: "Must be 5.0 Or Up", icon: Smartphone },
    { label: "Ram", value: "4GB of RAM for smooth streaming", icon: HardDrive },
    { label: "Storage", value: "200 MB free space", icon: FolderSearch },
    { label: "Internet", value: "Stable wifi or Mobile data", icon: Wifi },
  ]

  const iosSteps = [
    {
      number: "1",
      title: "Download Installer",
      description: "For iOS devices, you can use the jailbreaking method, which requires installers like Panda Helper or App Valley. You can download the installer from their official site.",
      icon: Globe,
    },
    {
      number: "2",
      title: "Allow Permissions",
      description: "After downloading, you have to download and install it on your mobile device. To do this, go to Settings > General > Device Management, select the file, and tap 'On trust.'",
      icon: Shield,
    },
    {
      number: "3",
      title: "Download APK File",
      description: "The installer is now ready. Download the iOS APK file from our website and locate it in your gallery.",
      icon: FolderSearch,
    },
    {
      number: "4",
      title: "Install the File",
      description: "Once the file is downloaded and located, open the installer and navigate to the file within it. Select the APK file and start the installation process.",
      icon: Download,
    },
    {
      number: "5",
      title: "Launch",
      description: "After installation, you can launch the app from the Home screen.",
      icon: Rocket,
    },
  ]

  const iosRequirements = [
    { label: "iOS", value: "iPhone 11 or Up", icon: Smartphone },
    { label: "Storage", value: "500 Mb space for APK file and installer", icon: FolderSearch },
    { label: "Ram", value: "Minimum 4GB of RAM", icon: HardDrive },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Method to Download HOT51 for Android and iOS
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          To avoid malware and errors during the downloading and installation process on both Android and iOS, follow the guide below.
        </p>
      </div>

      {/* Android Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-green-500 p-3 rounded-lg">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">For Android</h3>
        </div>

        <div className="space-y-6 mb-8">
          {androidSteps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Android Requirements */}
        <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            Requirements:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {androidRequirements.map((req, index) => {
              const IconComponent = req.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">{req.label}:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{req.value}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* iOS Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-500 p-3 rounded-lg">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">For iOS</h3>
        </div>

        <div className="space-y-6 mb-8">
          {iosSteps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* iOS Requirements */}
        <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
          <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Requirements:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {iosRequirements.map((req, index) => {
              const IconComponent = req.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">{req.label}:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{req.value}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Note:</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you want to download the standard Hot51 app or the mod APK file, the installation method is simple, and you must use the same installers to install it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}