import React, { useState, useRef } from 'react';

interface GlassCard3DProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
  highlightGold?: boolean;
  onClick?: () => void;
}

export const GlassCard3D: React.FC<GlassCard3DProps> = ({
  children,
  className = '',
  style = {},
  intensity = 12,
  highlightGold = false,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setShine({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setShine((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        position: 'relative',
        transform,
        transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
        transformStyle: 'preserve-3d',
        backgroundColor: 'rgba(14, 26, 46, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: highlightGold ? '1px solid var(--color-border-gold-bright)' : '1px solid var(--color-border-gold)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: highlightGold
          ? '0 20px 45px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.18), 0 0 25px rgba(197, 168, 128, 0.18)'
          : '0 16px 36px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.12)',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
    >
      {/* Specular 3D Holographic Shine Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255, 255, 255, ${shine.opacity}), transparent 55%)`,
          pointerEvents: 'none',
          transition: 'background 0.1s ease',
          zIndex: 1
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};
