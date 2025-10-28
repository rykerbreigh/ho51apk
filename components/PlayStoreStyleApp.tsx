"use client";
import { useState, useEffect } from "react";
import { Shield, Users, Star, Share , Zap, Coins, Video, Download, Crown } from "lucide-react"
import Link from 'next/link';

export default function PlayStoreStyleApp() {
  
const images = [
  "images/hot51-mod-apk.webp",
  "images/hot51-mod-apk-unlocked-all.webp",
  "images/hot51-mod-apk-unlock-room.webp",
  "images/hot51-mod-apk-2025.webp",
];

const [currentImage, setCurrentImage] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300); // fade out before switching
  }, 2000);

  return () => clearInterval(interval);
}, []);


  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Download Hot51 MOD APK v1.1.589 For Android | Unlocked All',
        text: 'Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section className="">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Left Content */}
            <div className="flex-1 text-gray-900 dark:text-gray-100">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:leading-[1.2] leading-[1.2]">
               Free Download Hot51 MOD APK Latest Version - Unlimited Money 
              </h1> 
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Hot51 live is considered one of the top-rated streaming apps in Indonesia, where you can enjoy a diverse range of entertainment content. It is a premium hub for the modern generation, offering content such as dance, live concerts, music, talk shows, and gaming tournaments in real time. Yes, you heard it right - it's all live, and you can enjoy it without leaving the comfort of your own home.
             </p>

              {/* App Info Row */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-white dark:bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    src="images/favicon.webp"
                    alt="Game Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xl font-bold">4.7</span>
                      <Star className="w-4 h-4 fill-pink-400 text-pink-400" />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">21.2M reviews</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xl font-bold mb-1">1M+</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Downloads</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <span className="text-sm bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-gray-800 dark:text-white">3+</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Rated for 3+</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link 
                  href="/download"
                  className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download now
                </Link>
                
                <button 
                  onClick={handleShare}
                  className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Share className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>

              {/* Device Compatibility */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="w-4 h-4 border border-gray-400 dark:border-gray-500 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-sm"></div>
                </div>
                <span>This app is available for your device</span>
              </div>

             {/* Security Features */}
<div className="flex flex-wrap items-center gap-4">
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
    <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
      <Coins className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Unlimited Coins</span>
  </div>
 
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
      <Crown className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">VIP Unlocked</span>
  </div>
 
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
      <Video className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">HD 4K Streaming</span>
  </div>
 
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
      <Shield className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Ad-Free</span>
  </div>

  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
      <Download className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Free Download</span>
  </div>
</div>
            </div>

            {/* Right Content - Mobile Image */}
            <div className="flex-1 lg:max-w-md">
              <div className="flex justify-center">
           <img
  src={images[currentImage]}
  alt="Mobile App Screenshot"
  className="h-auto"
  style={{
    maxWidth: "389px",
    opacity: fade ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  }}
/>


              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Additional Info Section */}
<div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-gray-900 dark:text-gray-100">
     <h2 className="text-2xl font-bold mb-4">About HOT51 Mod APK</h2>
<p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
  HOT51 Mod APK is the enhanced version of the popular live streaming platform, offering unlimited coins, premium VIP membership, and ad-free HD/4K streaming completely free. This modified version unlocks all premium features that normally require payment or subscription. Since it's not an official release, it's unavailable on the Google Play Store, but you can download it safely from our website using the button above.
</p>
      
      {/* App Details */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-sm">
        <div>
          <span className="font-semibold mb-2 block">Version</span>
          <p className="text-gray-600 dark:text-gray-400">2.1.5</p>
        </div>
        <div>
          <span className="font-semibold mb-2 block">Size</span>
          <p className="text-gray-600 dark:text-gray-400">38MB</p>
        </div>
        <div>
          <span className="font-semibold mb-2 block">Requirements</span>
          <p className="text-gray-600 dark:text-gray-400">Android 6.0+</p>
        </div>
      </div>
    </div>
  </div>
</div>



    </section>
  );
}