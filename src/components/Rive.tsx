import { useRive } from "@rive-app/react-canvas";
import { CSSProperties } from "react";

interface RiveProps {
  src: string;
  state: string;
  style: CSSProperties;
}

export default function Rive(props: RiveProps) {
  const { RiveComponent } = useRive({
    src: props.src,
    stateMachines: props.state,
    autoplay: true,
  });
  return <RiveComponent style={props.style} />;
}
