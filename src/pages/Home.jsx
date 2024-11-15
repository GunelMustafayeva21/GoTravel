import React from "react";
import SeaVideo from "../assets/video/main.mp4";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          {/* Video Element */}
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 w-full h-[700px] object-cover z-[-1]"
          >
            <source src={SeaVideo} type="video/mp4" />
          </video>
          {/* Cover of Video Element */}
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
