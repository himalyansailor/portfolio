"use client";

import { useEffect, useRef, useState } from "react";
import { MARQUEE_MESSAGE } from "@/config/site";

const SPEED = 48; // px per second

/** Renders the sentence, styling the standalone "." separators. */
function Message() {
  const parts = MARQUEE_MESSAGE.split(" . ");
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <>
          {" "}
          <span className="marquee-dot">.</span>{" "}
        </>
      )}
    </span>
  ));
}

function Group({ copies, itemRef }) {
  return (
    <div className="marquee-group">
      {Array.from({ length: copies }, (_, i) => (
        <span key={i} className="marquee-item" ref={i === 0 ? itemRef : undefined}>
          <Message />
          <span className="marquee-star">✦</span>
        </span>
      ))}
    </div>
  );
}

/**
 * Seamless marquee: two identical groups in a max-content track, animated
 * from 0 to -50% (exactly one group width). Each group repeats the sentence
 * until it is at least as wide as the screen, and the duration follows the
 * rendered width so the speed stays constant.
 */
export default function Marquee() {
  const itemRef = useRef(null);
  const [copies, setCopies] = useState(2);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const measure = () => {
      const itemWidth = itemRef.current?.getBoundingClientRect().width;
      if (!itemWidth) return;
      const span = Math.max(window.innerWidth, window.screen?.width ?? 0);
      const needed = Math.max(1, Math.ceil(span / itemWidth));
      setCopies(needed);
      setDuration((itemWidth * needed) / SPEED);
    };

    measure();
    document.fonts?.ready.then(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(itemRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="marquee">
      <p className="marquee-static">
        <Message />
      </p>
      <div
        className="marquee-track"
        aria-hidden="true"
        data-ready={duration ? "true" : undefined}
        style={duration ? { "--marquee-duration": `${duration.toFixed(2)}s` } : undefined}
      >
        <Group copies={copies} itemRef={itemRef} />
        <Group copies={copies} />
      </div>
    </div>
  );
}
