import { useState, useEffect } from "react";

const images = [
  { src: "/reso2025.png", title: "Tech Revolution" },
  { src: "/reo.png", title: "Innovators Meet" },
  { src: "/resoOrange.png", title: "Future of Technology" }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(""); // Track direction

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setSlideDirection("-translate-x-full"); // Move left
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setSlideDirection("translate-x-0");
    }, 300); // Same smooth animation
  };

  const nextSlide = () => {
    setSlideDirection("translate-x-full"); // Move right
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setSlideDirection("translate-x-0");
    }, 300); // Same timing as prevSlide
  };

  return (
    <div className="h-screen bg-transparent flex flex-col items-center justify-center relative px-4">
      <h1
        className="font-extrabold text-4xl md:text-5xl text-white tracking-widest mb-4 text-center"
        style={{
          WebkitTextStroke: "1px #ff6347",
        }}
      >
        EVENTS
      </h1>

      {/* Dynamic Subheading */}
      <h2 className="text-2xl text-red-400 font-semibold mb-6">
        {images[currentIndex].title}
      </h2>

      {/* Image Container - Responsive */}
      <div className="relative w-full max-w-[1000px] h-[900px] md:h-[500px] rounded-xl overflow-hidden border border-red-400">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="Event"
            className={`absolute w-full h-full object-cover transition-transform duration-300 ease-in-out 
            ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : slideDirection + " opacity-0"
            }`}
          />
        ))}
      </div>
      <div> 
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-red-500 p-2 rounded-full shadow-lg hover:bg-red-300 transition"
      >
        <img
          src="/less.svg"
          alt="Left"
          className="w-6 h-6 opacity-80 hover:opacity-100 transition"
        />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-red-500 p-2 rounded-full shadow-lg hover:bg-red-300 transition"
      >
        <img
          src="/greater.svg"
          alt="Right"
          className="w-6 h-6 opacity-80 hover:opacity-100 transition"
        />
      </button>
      </div>
    </div>
  );
}