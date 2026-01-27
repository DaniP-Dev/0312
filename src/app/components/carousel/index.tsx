import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./carousel.css";

const images = [
  "/images/hero/hero-1.jpeg",
  "/images/hero/hero-2.jpeg",
  "/images/hero/hero-3.jpeg",
];

const AUTOPLAY_MS = 2500;

const Index = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const tRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (tRef.current) clearTimeout(tRef.current);
    tRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => {
      if (tRef.current) clearTimeout(tRef.current);
    };
  }, [current, next]);

  const getPosClass = useCallback(
    (idx: number) => {
      // distancia circular: -1 izquierda, 0 centro, +1 derecha
      const raw = idx - current;
      const half = Math.floor(total / 2);
      let d = raw;
      if (d > half) d -= total;
      if (d < -half) d += total;

      if (d === 0) return "is-center";
      if (d === -1) return "is-left";
      if (d === 1) return "is-right";
      if (d === -2) return "is-far-left";
      if (d === 2) return "is-far-right";
      return "is-hidden";
    },
    [current, total],
  );

  if (total === 0) return null;

  return (
    <div className="carousel3d w-full h-full rounded-lg">
      <div className="carousel3d__stage">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`slide-${idx + 1}`}
            className={`carousel3d__slide ${getPosClass(idx)}`}
            draggable={false}
          />
        ))}
      </div>

      <button
        className="carousel3d__btn carousel3d__btn--left"
        onClick={prev}
        type="button"
      >
        Prev
      </button>
      <button
        className="carousel3d__btn carousel3d__btn--right"
        onClick={next}
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export default Index;
