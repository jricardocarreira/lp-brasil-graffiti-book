import { Box } from "@mui/joy";
import { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

interface YoutubeVideoProps {
  embed: string;
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
  const [height, setHeight] = useState(0);
  const gridRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!gridRef.current) return;
      // Define altura como 80% da altura da viewport
      const viewportHeight = window.innerHeight;
      setHeight(viewportHeight * 0.8);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const embedLink = `https://www.youtube.com/shorts/${props.embed}`;
  
  const frameComp = {
    url: embedLink,
    width: `${height * 0.5625}px`, // Proporção para shorts (9:16)
    height: `${height}px`,
    light: false, // Mostra o player padrão do YouTube
    playing: false, // Não inicia automaticamente
    controls: true // Mostra os controles
  };

  return (
    <Box 
      ref={gridRef} 
      sx={{ 
        borderRadius: "10px", 
        overflow: "hidden",
        aspectRatio: '9/16', // Proporção vertical para shorts
        height: `${height}px`,
        maxWidth: '100%',
        mx: 'auto' // Centraliza o container
      }}
    >
      <ReactPlayer {...frameComp} />
    </Box>
  );
}
