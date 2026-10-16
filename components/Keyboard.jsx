"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_URL, KEYS } from "@/config/site";
import { useDialogs } from "./DialogProvider";

const KEY_W = 146;
const KEY_H = 161;

// Automatic sequence timing (ms). One key every HOLD + GAP = 340ms.
const START_DELAY = 800;
const HOLD = 190;
const GAP = 150;
const REST = 1600;

// Easter egg: typing the word on a physical keyboard.
const SECRET = "portfolio";
const WAVE_STEP = 70;
const WAVE_HOLD = 220;
const TOAST_MS = 6000;

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
  const [typed, setTyped] = useState(() => new Set()); // keys pressed by typing / the wave
  const [partying, setPartying] = useState(false);
  const [toast, setToast] = useState(false);

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

  const paused = pointerInside || keyFocused || isOpen || pageHidden || reducedMotion || partying;

  // Typing on a physical keyboard presses the matching on-screen key;
  // typing the whole word sets off a wave and a little message.
  useEffect(() => {
    let progress = 0;
    const timers = new Set();
    const later = (fn, ms) => {
      const id = setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };
    const tap = (index, at = 0) => {
      later(() => setTyped((prev) => new Set(prev).add(index)), at);
      later(
        () =>
          setTyped((prev) => {
            const next = new Set(prev);
            next.delete(index);
            return next;
          }),
        at + WAVE_HOLD
      );
    };

    const onKeyDown = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return;
      if (event.target.closest?.("input, textarea, select, [contenteditable]")) return;
      if (document.querySelector("dialog[open]")) return;
      const letter = event.key.toLowerCase();
      if (letter.length !== 1) return;

      if (letter === SECRET[progress]) {
        tap(progress);
        progress += 1;
      } else {
        progress = letter === SECRET[0] ? 1 : 0;
        const match = KEYS.findIndex((k) => k.letter.toLowerCase() === letter);
        if (match !== -1) tap(match);
      }

      if (progress === SECRET.length) {
        progress = 0;
        const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!calm) {
          setPartying(true);
          for (let round = 0; round < 2; round++) {
            KEYS.forEach((_, i) => tap(i, 400 + round * (KEYS.length * WAVE_STEP + 200) + i * WAVE_STEP));
          }
          later(() => setPartying(false), 400 + 2 * (KEYS.length * WAVE_STEP + 200) + WAVE_HOLD);
        }
        setToast(true);
        later(() => setToast(false), TOAST_MS);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      timers.forEach(clearTimeout);
      setTyped(new Set());
      setPartying(false);
    };
  }, []);

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
            <Key key={key.id} data={key} pressed={pressed === index || typed.has(index)} onOpen={openDialog} />
          ))}
        </div>
      </div>
      <p className="keyboard-hint" aria-hidden="true">
        Psst: type <kbd>portfolio</kbd> on your keyboard.
      </p>
      <div className="egg-toast" role="status" data-show={toast || undefined}>
        {toast && (
          <>
            <span>You found it. Now imagine what I’d build for your team.</span>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              Let’s talk <span aria-hidden="true">↗</span>
              <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
