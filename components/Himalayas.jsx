import { LINKS } from "@/config/site";

/*
 * "Where I'm from" — an inline SVG of the Himalayas drawn in the same
 * language as the keyboard: pastel fills, 3px ink outlines, hard edges.
 * The whole 1440 × 560 scene is always shown: it scales to the page width
 * and is never cropped.
 */

const INK = "#111111";

// Ridge lines as [x, y] points; peaks get snow caps.
const FAR_RIDGE = [
  [0, 330], [120, 250], [210, 290], [330, 170], [420, 240], [520, 140], [610, 220],
  [720, 80], [830, 200], [910, 150], [1000, 230], [1110, 125], [1210, 220], [1320, 175], [1440, 260],
];
const MID_RIDGE = [
  [0, 400], [140, 305], [260, 365], [380, 265], [500, 350], [640, 255], [760, 345],
  [900, 245], [1040, 335], [1180, 270], [1300, 335], [1440, 295],
];

const ridgePath = (points) =>
  `M${points.map(([x, y]) => `${x} ${y}`).join(" L")} V560 H0 Z`;

/** Snow cap for each local peak: follows the slopes down `depth` px, zig-zag hem. */
function snowCaps(points, depth) {
  const caps = [];
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i];
    const [lx, ly] = points[i - 1];
    const [rx, ry] = points[i + 1];
    if (py >= ly || py >= ry) continue; // not a peak
    const d = Math.min(depth, (ly - py) * 0.6, (ry - py) * 0.6);
    const y = py + d;
    const xl = px - ((px - lx) * d) / (ly - py);
    const xr = px + ((rx - px) * d) / (ry - py);
    const w = xr - xl;
    caps.push(
      `M${xl} ${y} L${px} ${py} L${xr} ${y} L${xl + w * 0.75} ${y - d * 0.22} L${xl + w * 0.55} ${y + d * 0.08} L${xl + w * 0.32} ${y - d * 0.25} Z`
    );
  }
  return caps;
}

// Prayer flags hang from a sagging line between two poles.
const FLAG_COLORS = ["#a9ddff", "#ffffff", "#ffb7d5", "#b9f2df", "#ffe446"];
const LINE = { x0: 800, y0: 334, cx: 920, cy: 392, x1: 1040, y1: 330 };
const flags = Array.from({ length: 8 }, (_, i) => {
  const t = (i + 1) / 9;
  const x = (1 - t) ** 2 * LINE.x0 + 2 * (1 - t) * t * LINE.cx + t ** 2 * LINE.x1;
  const y = (1 - t) ** 2 * LINE.y0 + 2 * (1 - t) * t * LINE.cy + t ** 2 * LINE.y1;
  return { x, y, color: FLAG_COLORS[i % FLAG_COLORS.length], delay: `${(i % 4) * -0.6}s` };
});

const TREES = [
  [70, 455, 1], [120, 448, 0.8], [250, 446, 0.9], [680, 448, 1], [720, 455, 0.8],
  [1120, 446, 1.1], [1165, 452, 0.85], [1290, 450, 0.9],
];

function Cloud({ x, y, scale = 1, className }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        className={className}
        d="M0 40 C-4 22 14 10 30 16 C36 -2 66 -6 78 12 C94 2 118 12 116 32 C130 34 132 52 116 54 H8 C-6 54 -8 42 0 40 Z"
        fill="#fff"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </g>
  );
}

export default function Himalayas() {
  return (
    <section className="origin" id="origin" aria-labelledby="origin-title">
      <div className="origin-head">
        <h2 id="origin-title" className="section-title">
          From the <em className="accent-serif">Himalayas.</em>
        </h2>
        <div className="origin-copy">
          <p className="section-lead">
            That’s where I’m from, and where the handle <strong>@himalayansailor</strong> comes from.
          </p>
          <a className="button button-light" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            @himalayansailor on Instagram <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <svg className="origin-scene" viewBox="0 0 1440 560" role="img" aria-labelledby="origin-scene-title">
        <title id="origin-scene-title">
          Illustration of snow-capped Himalayan peaks with prayer flags and a small sailboat on a mountain lake
        </title>
        <defs>
          <linearGradient id="origin-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f1f0ff" />
            <stop offset="0.6" stopColor="#fff7fb" />
            <stop offset="1" stopColor="#ffdfa0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="560" fill="url(#origin-sky)" />

        {/* Sun and sky */}
        <circle cx="1130" cy="110" r="48" fill="#ffe446" stroke={INK} strokeWidth="3" />
        <Cloud x={180} y={60} scale={1.1} className="origin-cloud" />
        <Cloud x={860} y={30} scale={0.8} className="origin-cloud origin-cloud-slow" />
        <path d="M420 120 q10 -10 20 0 q10 -10 20 0 M480 96 q8 -8 16 0 q8 -8 16 0" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />

        {/* Far range */}
        <path d={ridgePath(FAR_RIDGE)} fill="#c8b6ff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        {snowCaps(FAR_RIDGE, 55).map((d) => (
          <path key={d} d={d} fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        ))}

        {/* Middle range */}
        <path d={ridgePath(MID_RIDGE)} fill="#c6d7ff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        {snowCaps(MID_RIDGE, 34).map((d) => (
          <path key={d} d={d} fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        ))}

        {/* Foothills */}
        <path
          d="M0 455 C200 405 360 475 560 435 S900 405 1100 445 S1360 425 1440 432 V560 H0 Z"
          fill="#b9f2df"
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {TREES.map(([x, y, s]) => (
          <path
            key={`${x}-${y}`}
            d={`M${x} ${y - 46 * s} L${x + 16 * s} ${y - 18 * s} H${x + 8 * s} L${x + 20 * s} ${y} H${x - 20 * s} L${x - 8 * s} ${y - 18 * s} H${x - 16 * s} Z`}
            fill="#2caa85"
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        ))}

        {/* Prayer flags */}
        <path d="M800 440 V322 M1040 446 V318" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <path d={`M${LINE.x0} ${LINE.y0} Q${LINE.cx} ${LINE.cy} ${LINE.x1} ${LINE.y1}`} fill="none" stroke={INK} strokeWidth="2.5" />
        {flags.map((f) => (
          <rect
            key={f.x}
            className="origin-flag"
            x={f.x - 11}
            y={f.y}
            width="22"
            height="28"
            rx="2"
            fill={f.color}
            stroke={INK}
            strokeWidth="2.5"
            style={{ animationDelay: f.delay }}
          />
        ))}

        {/* Lake and the sailor */}
        <path d="M0 492 C240 482 480 500 720 490 S1200 482 1440 494 V560 H0 Z" fill="#a9ddff" stroke={INK} strokeWidth="3" />
        <path d="M120 520 h60 M540 534 h90 M980 518 h70 M1260 538 h80" stroke="#3886c9" strokeWidth="3" strokeLinecap="round" />
        <g transform="translate(210 0)">
          <g className="origin-boat">
            <path d="M330 404 V492" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <path d="M334 410 L392 482 H334 Z" fill="#ffb7d5" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M326 420 L286 482 H326 Z" fill="#ffe446" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M270 492 H402 L384 516 H290 Z" fill="#d96c44" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </section>
  );
}
