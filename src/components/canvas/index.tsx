import { FC, useEffect, useRef } from "react";

const index: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);
  });

  return <canvas width="300" height="300" ref={canvasRef} />;
};

export default index;
