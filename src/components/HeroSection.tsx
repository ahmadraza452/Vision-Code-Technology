import { useEffect, useRef, ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  rightContent?: ReactNode;
  className?: string;
}

const HeroSection = ({ children, rightContent, className = "" }: HeroSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const STAR_COUNT = 1800;
    const ROYAL_BLUE = "65, 105, 225";
    const starColors = ["#ffffff", "#87CEEB", "#4169E1", "#1E90FF", "#002366"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth - 0.5;
      mouseRef.current.targetY = e.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    interface Star {
      x: number; y: number; z: number;
      px: number; py: number; vx: number; vy: number;
      size: number; brightness: number;
      twinkleSpeed: number; twinkleOffset: number;
      color: string;
    }

    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const arm = Math.floor(Math.random() * 3);
      const t = Math.random() * Math.PI * 6;
      const r = 0.05 + Math.random() * 0.95;
      const angle = t + (arm * Math.PI * 2) / 3 + r * Math.PI * 2.5;
      stars.push({
        x: Math.cos(angle) * r * 0.45,
        y: Math.sin(angle) * r * 0.45,
        z: Math.random(),
        px: 0, py: 0, vx: 0, vy: 0,
        size: Math.random() * 1.8 + 0.2,
        brightness: 0.5 + Math.random() * 0.5,
        twinkleSpeed: 0.01 + Math.random() * 0.04,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    const draw = () => {
      time++;
      const W = canvas.width;
      const H = canvas.height;
      const cx = W * 0.5;
      const cy = H * 0.5;
      const scale = Math.min(W, H);

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, W, H);
      const rot = time * 0.00015;

      stars.forEach((s) => {
        const cosR = Math.cos(rot);
        const sinR = Math.sin(rot);
        const perspective = 0.6 + s.z * 0.4;
        const rx = s.x * cosR - s.y * sinR;
        const ry = s.x * sinR + s.y * cosR;
        const bx = cx + rx * scale * perspective;
        const by = cy + ry * scale * perspective;

        const mX = (mouseRef.current.targetX + 0.5) * W;
        const mY = (mouseRef.current.targetY + 0.5) * H;
        const dx = mX - bx;
        const dy = mY - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) * 0.005;
          s.vx += dx * force;
          s.vy += dy * force;
        }
        s.vx *= 0.94;
        s.vy *= 0.94;
        s.px = bx - mouseRef.current.x * 70 * s.z + s.vx;
        s.py = by - mouseRef.current.y * 70 * s.z + s.vy;

        const twinkle = 0.5 + 0.5 * Math.sin(time * s.twinkleSpeed + s.twinkleOffset);
        ctx.fillStyle = `rgba(${hexToRgb(s.color)}, ${s.brightness * twinkle})`;
        ctx.beginPath();
        ctx.arc(s.px, s.py, s.size * perspective, 0, Math.PI * 2);
        ctx.fill();
      });

      const hubGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 0.4);
      hubGlow.addColorStop(0, `rgba(${ROYAL_BLUE}, 0.15)`);
      hubGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = hubGlow;
      ctx.globalCompositeOperation = "screen";
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className={`relative h-screen w-full overflow-hidden bg-[#00040a] ${className}`}>
      {/* Background Video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 z-0"
        style={{ filter: "brightness(0.2) saturate(1.8)" }}
      >
        <source src="https://cdn.pixabay.com/video/2020/09/06/49028-458020898_large.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 35, 102, 0.4) 0%, rgba(0, 2, 8, 1) 80%)",
        }}
      />

      {/* Galaxy Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ mixBlendMode: "screen", pointerEvents: "none" }}
      />

      {/* Content: Left text + Right image */}
      <div className="relative z-10 container mx-auto h-full px-6 md:px-12">
        {rightContent ? (
          // TWO COLUMN layout when rightContent is provided
          <div className="h-full flex items-center justify-between gap-8">
            {/* Left: Text content */}
            <div className="flex-1 max-w-xl text-white">
              {children}
            </div>
            {/* Right: Image/widget */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              {rightContent}
            </div>
          </div>
        ) : (
          // SINGLE COLUMN layout (original behavior)
          <div className="h-full flex flex-col justify-center items-start text-left text-white">
            <div className="max-w-2xl">
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

export default HeroSection;