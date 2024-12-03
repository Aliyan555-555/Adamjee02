import { Backdrop } from "@mui/material";
import React from "react";

interface VideoPopupProps {
  open: boolean;
  close: () => void;
  VideoComponent: React.ReactNode;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ open, close, VideoComponent }) => {
  return (
    <Backdrop open={open} sx={{ zIndex: 100000 }} onClick={close}>
      <div className="md:w-[60vw] w-[95vw] h-[300px] md:h-[70vh]">
        {VideoComponent}
      </div>
    </Backdrop>
  );
};

export default VideoPopup;
