import { Box } from "@mui/joy";
import React, { useRef, useState, useEffect } from "react";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

interface YoutubeVideoProps {
  embed: string;
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
  const [width, setWidth] = useState(0);
  const gridRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!gridRef.current) return;
      setWidth(gridRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const embedLink = `https://www.youtube.com/embed/${props.embed}`;
  
  const frameComp = {
    url: embedLink,
    width: `${width}px`,
    height: `${width * 0.5625}px`,
    light: true,
    playing: true,
  };

  return (
    <Box ref={gridRef} sx={{ borderRadius: "10px", overflow: "hidden" }}>
      <ReactPlayer {...frameComp} />
    </Box>
  );
}
