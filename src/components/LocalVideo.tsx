import { Box } from "@mui/joy";
import React, { useRef, useState, useEffect } from "react";

interface LocalVideoProps {
  path: string;
  ratio: number;
}

export default function LocalVideo(props: LocalVideoProps) {
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

  const frameComp = {
    src: props.path,
    width: `${width}px`,
    height: `${width / props.ratio}px`,
    controls: true,
  };

  return (
    <Box ref={gridRef} sx={{ borderRadius: "10px", overflow: "hidden" }}>
      <video {...frameComp} />
    </Box>
  );
}
