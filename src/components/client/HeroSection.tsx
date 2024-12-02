import { IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";
import { MdOutlinePauseCircle, MdOutlinePlayCircle } from "react-icons/md";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Type the videoRef
  const [isPlaying, setIsPlaying] = useState<boolean>(true); // Type isPlaying as boolean
  const [isMuted, setIsMuted] = useState<boolean>(true); // Type isMuted as boolean

  useEffect(() => {
    if (videoRef.current) {
      // Set the video to start at the predefined time
      videoRef.current.currentTime = 100;
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const [iconSize, setIconSize] = useState<number>(40); // Type iconSize as number

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIconSize(80);
      } else {
        setIconSize(40);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call the function initially to set the icon size on page load
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
    id="intro"
      className="relative mt-[90px] w-full h-[50vh] md:h-[89vh] bg-cover bg-center"
      style={{ backgroundImage: "url(/images/Hero.png)" }}

    >
      
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-full z-[20] h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
      />

      {/* Custom Controls */}
      <div className="absolute max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:flex max-sm:items-center max-sm:h-full max-sm:justify-center  md:bottom-8 md:right-8 md:px-10 flex space-x-4">
        <IconButton
          onClick={handlePlayPause}
          className="!p-2 !text-white !rounded-full !shadow-lg"
        >
          {isPlaying ? (
           <MdOutlinePauseCircle fontSize={iconSize} /> 
          ) : (
           <MdOutlinePlayCircle fontSize={iconSize} /> 
          )}
        </IconButton>
        <IconButton
          onClick={handleMuteUnmute}
          className="  md:p-2 max-sm:absolute max-sm:right-5 max-sm:bottom-0 md:!block rounded-full shadow-lg !text-white"
        >
          {isMuted ?  <GoMute fontSize={35} />:<GoUnmute fontSize={35} /> }
        </IconButton>
      </div>
    </div>
  );
};

export default HeroSection;
