"use client";

import { useEffect, useRef, useState } from "react";
import { KEYS } from "@/config/site";
import { useDialogs } from "./DialogProvider";

const KEY_W = 146;
const KEY_H = 161;

// Automatic sequence timing (ms). One key every HOLD + GAP = 340ms.
const START_DELAY = 800;
const HOLD = 190;
const GAP = 150;
const REST = 1600;

/** Thin angled seams joining the face corners to the base corners. */
function Seams({ w, h }) {
  const faceBottom = h - 33;
  // 45° points on the face (r=29, inset 10/6) and base (r=38) corner arcs.
  const f = 29 * (1 - Math.SQRT1_2);
  const b = 38 * (1 - Math.SQRT1_2);
  const lines = [
    [10 + f, 6 + f, b, b],
    [w - 10 - f, 6 + f, w - b, b],
    [10 + f, faceBottom - f, b, h - b],
    [w - 10 - f, faceBottom - f, w - b, h - b],
  ];
  return (
    <svg className="key-seams" viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden="true" focusable="false">
      {lines.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </svg>
  );
}

function ReturnArrow() {
  return (
    <svg className="key-return" viewBox="0 0 120 92" aria-hidden="true" focusable="false">
      <path d="M100 8v34a18 18 0 0 1-18 18H24" />
      <path d="M46 36 20 60l26 24" />
    </svg>
  );
}

function Key({ data, pressed, onOpen }) {
  const w = data.w ?? KEY_W;
  const h = data.h ?? KEY_H;
  const style = {
    "--x": `${data.x}px`,
    "--y": `${data.y}px`,
    "--w": `${w}px`,
    "--h": `${h}px`,
    "--face": data.face,
    "--base": data.base,
  };
  const className = `key${data.enter ? " key-enter" : ""}${data.y > 0 ? " key-lower" : ""}`;

  const inner = (
    <>
      <span className="key-base" aria-hidden="true">
        <Seams w={w} h={h} />
      </span>
      <span className="key-face" aria-hidden="true">
        {data.enter ? <ReturnArrow /> : <span className="key-letter">{data.letter}</span>}
        <span className="key-caption">{data.caption}</span>
      </span>
    </>
  );

  if (data.href) {
    const external = data.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a
        className={className}
        style={style}
        href={data.href}
        aria-label={data.external ? `${data.caption} (opens in a new tab)` : data.caption}
        data-pressed={pressed}
        {...external}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      style={style}
      aria-label={data.caption}
      aria-haspopup="dialog"
      data-pressed={pressed}
      onClick={(event) => onOpen(data.dialog, event.currentTarget, data.face)}
    >
      {inner}
    </button>
  );
}

export default function Keyboard() {
  const { openDialog, isOpen } = useDialogs();
  const [pressed, setPressed] = useState(-1);
  const [pointerInside, setPointerInside] = useState(false);
  const [keyFocused, setKeyFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true); // assume reduced until checked
  const nextIndex = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(query.matches);
    const syncVisibility = () => setPageHidden(document.hidden);
    syncMotion();
    syncVisibility();
    query.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);
    return () => {
      query.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  const paused = pointerInside || keyFocused || isOpen || pageHidden || reducedMotion;

  useEffect(() => {
    if (paused) return undefined;
    let timer;

    const press = () => {
      const index = nextIndex.current;
      setPressed(index);
      timer = setTimeout(() => {
        setPressed(-1);
        const isLast = index === KEYS.length - 1;
        nextIndex.current = isLast ? 0 : index + 1;
        timer = setTimeout(press, isLast ? REST : GAP);
      }, HOLD);
    };

    timer = setTimeout(press, START_DELAY);
    return () => {
      clearTimeout(timer);
      setPressed(-1); // never leave a key stuck down
    };
  }, [paused]);

  // Only keyboard focus pauses the sequence; a key that keeps focus after a
  // mouse click (or after its dialog closes) should not freeze it.
  const handleFocus = (event) => setKeyFocused(event.target.matches(":focus-visible"));
  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setKeyFocused(false);
  };

  return (
    <div className="keyboard">
      <div className="keyboard-frame">
        <div
          className="keyboard-stage"
          role="group"
          aria-label="Portfolio keyboard"
          onPointerEnter={() => setPointerInside(true)}
          onPointerLeave={() => setPointerInside(false)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {KEYS.map((key, index) => (
            <Key key={key.id} data={key} pressed={pressed === index} onOpen={openDialog} />
          ))}
        </div>
      </div>
    </div>
  );
}
