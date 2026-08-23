import { useEffect, useRef } from "react";

export function CreativeCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let time = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * ratio);
      canvas.height = Math.round(rect.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw() {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;
      context.strokeStyle = "rgba(244, 241, 232, 0.11)";

      for (let x = 0; x < width; x += 42) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y < height; y += 42) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      const cx = width * 0.52;
      const cy = height * 0.52;
      const pulse = media.matches ? 0 : Math.sin(time * 0.018) * 12;

      context.save();
      context.translate(cx, cy);
      context.rotate(media.matches ? -0.15 : time * 0.0014);
      context.strokeStyle = "#79f2c0";
      context.lineWidth = 2;
      context.strokeRect(-105 - pulse / 2, -105 - pulse / 2, 210 + pulse, 210 + pulse);
      context.restore();

      context.beginPath();
      context.arc(cx - 75, cy + 52, 84 + pulse * 0.35, 0, Math.PI * 2);
      context.strokeStyle = "rgba(91, 124, 255, 0.92)";
      context.lineWidth = 14;
      context.stroke();

      context.beginPath();
      context.arc(cx + 92, cy - 62, 48, 0, Math.PI * 2);
      context.fillStyle = "rgba(255, 107, 87, 0.84)";
      context.fill();

      if (!media.matches) {
        time += 1;
        frameId = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="creative-canvas" aria-hidden="true" />;
}
