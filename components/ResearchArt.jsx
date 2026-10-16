/*
 * Research illustrations, drawn in the site's keyboard style: pastel fills,
 * 3px ink outlines, rounded corners. Each is a 480 × 300 inline SVG and is
 * decorative (the text beside it describes the work).
 */

const INK = "#111111";
const line = { stroke: INK, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" };

function Svg({ children }) {
  return (
    <svg className="paper-svg" viewBox="0 0 480 300" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

/** A friendly robot face, reused for the physical and the on-screen robot. */
function RobotHead({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="0" y="0" width="110" height="88" rx="30" fill="#fff" {...line} />
      <rect x="16" y="18" width="78" height="40" rx="18" fill="#241c32" />
      <circle cx="38" cy="38" r="7" fill="#a9ddff" />
      <circle cx="72" cy="38" r="7" fill="#a9ddff" />
      <path d="M42 70 q13 9 26 0" fill="none" {...line} />
      <circle cx="-6" cy="44" r="8" fill="#ffb7d5" {...line} />
      <circle cx="116" cy="44" r="8" fill="#ffb7d5" {...line} />
    </g>
  );
}

/** Virtual or Physical? — a physical robot and its on-screen twin, teaching High Valyrian. */
export function RobotsArt() {
  return (
    <Svg>
      <rect width="480" height="300" fill="#ffe9f2" />
      {/* Speech bubble: a High Valyrian phrase */}
      <path d="M34 24 h176 a14 14 0 0 1 14 14 v26 a14 14 0 0 1 -14 14 h-110 l-18 16 l2 -16 h-50 a14 14 0 0 1 -14 -14 v-26 a14 14 0 0 1 14 -14 z" fill="#fff" {...line} />
      <text className="art-text" x="122" y="57" textAnchor="middle" fontSize="19" fontStyle="italic">Valar morghulis</text>

      {/* Physical robot */}
      <RobotHead x={62} y={100} />
      <rect x="82" y="194" width="70" height="56" rx="16" fill="#c8b6ff" {...line} />
      <path d="M82 210 l-26 26 M152 210 l26 26" fill="none" {...line} />
      <path d="M30 262 H210" {...line} />

      {/* VS badge */}
      <circle cx="240" cy="150" r="26" fill="#ffe446" {...line} />
      <text className="art-text" x="240" y="158" textAnchor="middle" fontSize="20" fontWeight="900">VS</text>

      {/* Virtual robot on a screen */}
      <rect x="282" y="90" width="170" height="130" rx="16" fill="#a9ddff" {...line} />
      <rect x="296" y="104" width="142" height="102" rx="8" fill="#e6f5ff" stroke={INK} strokeWidth="2" />
      <RobotHead x={329} y={118} s={0.72} />
      <path d="M367 220 v24 M332 246 h70" fill="none" {...line} />
      <path d="M286 262 H452" {...line} />

      {/* Sparkles for engagement */}
      <path d="M220 214 l6 -14 l6 14 l-6 14 z M436 52 l5 -12 l5 12 l-5 12 z" fill="#ffb7d5" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Svg>
  );
}

/** One putting pose: keypoints joined by bones, with the putter. */
function Skeleton({ x, y, swing, faded }) {
  const j = {
    head: [70, 26], neck: [70, 42], ls: [54, 50], rs: [86, 50], le: [58 + swing * 0.3, 72], re: [82 + swing * 0.3, 72],
    hands: [70 + swing, 90], pelvis: [70, 92], lh: [61, 96], rh: [79, 96], lk: [58, 120], rk: [82, 120], la: [56, 142], ra: [84, 142],
  };
  const bones = [
    ["neck", "ls"], ["neck", "rs"], ["ls", "le"], ["rs", "re"], ["le", "hands"], ["re", "hands"],
    ["neck", "pelvis"], ["pelvis", "lh"], ["pelvis", "rh"], ["lh", "lk"], ["rh", "rk"], ["lk", "la"], ["rk", "ra"],
  ];
  const colors = ["#ffb7d5", "#ffe446", "#b9f2df", "#a9ddff", "#c8b6ff"];
  return (
    <g transform={`translate(${x} ${y})`} opacity={faded ? 0.45 : 1}>
      <path d={`M${j.hands[0]} ${j.hands[1]} L${70 + swing * 2.2} 144`} stroke="#8b4d20" strokeWidth="4" strokeLinecap="round" />
      {bones.map(([a, b]) => (
        <path key={a + b} d={`M${j[a][0]} ${j[a][1]} L${j[b][0]} ${j[b][1]}`} {...line} />
      ))}
      <circle cx={j.head[0]} cy={j.head[1]} r="12" fill="#fff" {...line} />
      {Object.entries(j)
        .filter(([k]) => k !== "head")
        .map(([k, [cx, cy]], i) => (
          <circle key={k} cx={cx} cy={cy} r="4.5" fill={colors[i % colors.length]} stroke={INK} strokeWidth="2" />
        ))}
    </g>
  );
}

/** 2D pose estimation with LSTM feature propagation across video frames. */
export function PoseArt() {
  const frames = [
    { x: 24, swing: -10 },
    { x: 170, swing: 0 },
    { x: 316, swing: 10 },
  ];
  return (
    <Svg>
      <rect width="480" height="300" fill="#efeaff" />
      {frames.map((f, i) => (
        <g key={f.x}>
          <rect x={f.x} y="22" width="140" height="164" rx="14" fill="#fff" {...line} />
          <rect x={f.x + 10} y="30" width="22" height="7" rx="3.5" fill="#c8b6ff" />
          <Skeleton x={f.x} y={34} swing={f.swing} faded={i === 0} />
          <path d={`M${f.x + 70} 186 v26`} {...line} />
          <rect x={f.x + 20} y="214" width="100" height="40" rx="12" fill="#c8b6ff" {...line} />
          <text className="art-text" x={f.x + 70} y="240" textAnchor="middle" fontSize="16" fontWeight="900">LSTM</text>
        </g>
      ))}
      {/* Features propagate frame to frame */}
      <path d="M140 234 h50 m-10 -8 l10 8 l-10 8 M286 234 h50 m-10 -8 l10 8 l-10 8" fill="none" {...line} />
      <text className="art-text" x="240" y="284" textAnchor="middle" fontSize="13">features propagated across frames · PCK</text>
    </Svg>
  );
}

/** Multimodal object recognition: modality encoders, weighted and squeezed into one prediction. */
export function MultimodalArt() {
  const streams = [
    { y: 34, label: "CNN", icon: "vision", color: "#a9ddff" },
    { y: 122, label: "LSTM", icon: "audio", color: "#ffd98e" },
    { y: 210, label: "CNN", icon: "depth", color: "#ffb7d5" },
  ];
  return (
    <Svg>
      <rect width="480" height="300" fill="#e3f7ef" />
      {/* The object */}
      <path d="M26 122 h62 v62 a18 18 0 0 1 -18 18 h-26 a18 18 0 0 1 -18 -18 z" fill="#ffd98e" {...line} />
      <path d="M88 136 h8 a14 14 0 0 1 0 28 h-8" fill="none" {...line} />
      <path d="M44 110 q6 -10 0 -20 M60 110 q6 -10 0 -20" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />

      {streams.map((s) => (
        <g key={s.y}>
          <path d={`M106 162 C120 162 112 ${s.y + 28} 128 ${s.y + 28}`} fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="5 5" />
          <rect x="128" y={s.y} width="62" height="56" rx="12" fill="#fff" {...line} />
          {s.icon === "vision" && (
            <g>
              <path d={`M140 ${s.y + 28} q19 -18 38 0 q-19 18 -38 0 z`} fill={s.color} {...line} />
              <circle cx="159" cy={s.y + 28} r="6" fill={INK} />
            </g>
          )}
          {s.icon === "audio" && (
            <path d={`M138 ${s.y + 28} h6 l4 -14 l6 28 l6 -24 l6 18 l4 -8 h10`} fill="none" {...line} />
          )}
          {s.icon === "depth" && (
            <g>
              {[0, 1, 2].map((r) =>
                [0, 1, 2].map((c) => (
                  <rect key={`${r}${c}`} x={140 + c * 13} y={s.y + 10 + r * 13} width="11" height="11" rx="2" fill={(r + c) % 2 ? s.color : "#fff"} stroke={INK} strokeWidth="1.5" />
                ))
              )}
            </g>
          )}
          <path d={`M190 ${s.y + 28} h16`} {...line} />
          <rect x="206" y={s.y + 8} width="62" height="40" rx="12" fill={s.color} {...line} />
          <text className="art-text" x="237" y={s.y + 34} textAnchor="middle" fontSize="15" fontWeight="900">{s.label}</text>
          {/* Modality weight */}
          <circle cx="292" cy={s.y + 28} r="12" fill="#fff" {...line} />
          <text className="art-text" x="292" y={s.y + 33} textAnchor="middle" fontSize="12" fontWeight="900">w</text>
          <path d={`M268 ${s.y + 28} h12 M304 ${s.y + 28} C322 ${s.y + 28} 318 150 336 150`} fill="none" {...line} />
        </g>
      ))}

      {/* Squeeze / fusion */}
      <path d="M336 96 L392 128 V172 L336 204 Z" fill="#c8b6ff" {...line} />
      <text className="art-text" x="360" y="155" textAnchor="middle" fontSize="12" fontWeight="900">fuse</text>
      <path d="M392 150 h16" {...line} />
      <rect x="408" y="128" width="58" height="44" rx="12" fill="#fff" {...line} />
      <text className="art-text" x="437" y="156" textAnchor="middle" fontSize="15" fontWeight="900">mug</text>
    </Svg>
  );
}

/** Context-aware spell checking: edit-distance candidates scored in context by an HMM. */
export function SpellArt() {
  const candidates = [
    { x: 120, word: "brown", best: true },
    { x: 220, word: "brawn" },
    { x: 320, word: "bran" },
  ];
  return (
    <Svg>
      <rect width="480" height="300" fill="#fff4d6" />
      {/* The sentence */}
      <rect x="28" y="22" width="424" height="60" rx="14" fill="#fff" {...line} />
      <text className="art-text art-mono" x="52" y="60" fontSize="22">the quick</text>
      <text className="art-text art-mono" x="186" y="60" fontSize="22" fill="#d94f8a">brwn</text>
      <text className="art-text art-mono" x="252" y="60" fontSize="22">fox jumps</text>
      <path d="M186 68 q4 5 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" fill="none" stroke="#d94f8a" strokeWidth="2.5" strokeLinecap="round" />

      {/* Norvig-style candidates */}
      {candidates.map((c) => (
        <g key={c.word}>
          <path d={`M216 84 L${c.x + 40} 106`} fill="none" stroke={INK} strokeWidth="2" strokeDasharray="4 4" />
          <rect x={c.x} y="106" width="80" height="34" rx="17" fill={c.best ? "#b9f2df" : "#fff"} {...line} />
          <text className="art-text" x={c.x + 40} y="128" textAnchor="middle" fontSize="15" fontWeight="700">{c.word}</text>
        </g>
      ))}
      <text className="art-text" x="240" y="160" textAnchor="middle" fontSize="12">candidates one edit away</text>

      {/* HMM states: the best path through context */}
      {[
        { x: 100, word: "quick" },
        { x: 240, word: "brown", best: true },
        { x: 380, word: "fox" },
      ].map((s) => (
        <g key={s.word}>
          <circle cx={s.x} cy="226" r="36" fill={s.best ? "#b9f2df" : "#ffd98e"} {...line} />
          <text className="art-text" x={s.x} y="231" textAnchor="middle" fontSize="15" fontWeight="900">{s.word}</text>
        </g>
      ))}
      <path d="M168 168 L226 192" fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="5 5" />
      <path d="M136 226 H204 m-10 -8 l10 8 l-10 8 M276 226 H344 m-10 -8 l10 8 l-10 8" fill="none" {...line} />
      <text className="art-text" x="240" y="290" textAnchor="middle" fontSize="13">hidden Markov model picks the word that fits</text>
    </Svg>
  );
}

export const RESEARCH_ART = {
  robots: RobotsArt,
  pose: PoseArt,
  multimodal: MultimodalArt,
  spell: SpellArt,
};
