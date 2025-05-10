import React from "react";

function About() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
          About <span className="text-pink-500">Comfy</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          At <span className="font-semibold text-indigo-600">Comfy</span>, we
          believe that everyone deserves the luxury of a good night’s sleep.
          That’s why we craft premium comforters designed for ultimate warmth,
          softness, and breathability — making your bed the coziest place on
          earth.
        </p>
        <p className="text-gray-600 text-base md:text-lg">
          From ethically sourced materials to exceptional craftsmanship, we’re
          committed to bringing comfort and joy into your everyday life — one
          snuggly blanket at a time.
        </p>
      </div>
    </section>
  );
}

export default About;
