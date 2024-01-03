import React from 'react'

const Video = () => {
  return (
    <div className="relative min-w-64 min-h-36 bg-gray-800 overflow-hidden rounded-md group transition-transform transform hover:scale-95 shadow-md">
      {/* Video Thumbnail */}
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYEaxyWD1CfpFhv9yI-i1W1MDi3VAjfE4iuM0qgotfF7G_bTjorsUImoYoY_DHhMTeb3ios8Enl3YhXvnSp558G2UZjIt5puekdz7V-YjM-sAPfw5zvHfMjT45Cfyj7mXX10DUuedj-P58dfv75rqZl0t8QiLEwzcp-EZ_5-awWu3wTwaOiD4TVw5G/s1080/183127385_199078995223566_695517804674914485_n.jpg"  // Replace with your actual thumbnail URL
        alt="Video Thumbnail"
        className="w-full h-full object-cover hover:brightness-75 cursor-pointer"
      />

      {/* Live Label and Glowing Dot */}
      <div className="absolute top-2 right-2 flex items-center space-x-1 bg-white px-1 rounded-lg">
        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
        <span className="text-black text-sm font-semibold">Live</span>
      </div>
    </div>
  )
}

export default Video