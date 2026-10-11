"use client";

import { useEffect, useState } from "react";
import { EXPERIENCE_START } from "@/config/site";

const UNITS = [
  { key: "years", label: "Years", short: "Yrs", color: "#ffb7d5" },
  { key: "months", label: "Months", short: "Mos", color: "#c8b6ff" },
  { key: "days", label: "Days", short: "Days", color: "#b9f2df" },
  { key: "hours", label: "Hours", short: "Hrs", color: "#ffd98e" },
  { key: "minutes", label: "Minutes", short: "Min", color: "#a9ddff" },
  { key: "seconds", label: "Seconds", short: "Sec", color: "#d9f28f" },
];

/** Calendar difference between the start date (local midnight) and now. */
function elapsed(now = new Date()) {
  const [sy, sm, sd] = EXPERIENCE_START.split("-").map(Number);
  let years = now.getFullYear() - sy;
  let months = now.getMonth() - (sm - 1);
  let days = now.getDate() - sd;
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (days < 0) {
    // Borrow the length of the previous calendar month.
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }
  return { years, months, days, hours, minutes, seconds };
}

const pad = (n) => String(n).padStart(2, "0");

/**
 * Live "time in the industry" clock since EXPERIENCE_START. Recomputed from
 * the current time every second, so it never drifts. The static HTML holds
 * the build-time value; the browser takes over on load.
 */
export default function ExperienceClock({ size = "small" }) {
  const [time, setTime] = useState(elapsed);

  useEffect(() => {
    let interval;
    setTime(elapsed());
    // Align ticks to the start of each second.
    const align = setTimeout(() => {
      setTime(elapsed());
      interval = setInterval(() => setTime(elapsed()), 1000);
    }, 1000 - new Date().getMilliseconds());
    return () => {
      clearTimeout(align);
      clearInterval(interval);
    };
  }, []);

  const spoken = `${time.years} years, ${time.months} months and ${time.days} days`;

  return (
    <div className={`clock clock-${size}`}>
      <span className="sr-only" suppressHydrationWarning>
        {spoken}
      </span>
      <ol className="clock-units" aria-hidden="true">
        {UNITS.map((unit) => (
          <li key={unit.key} className="clock-unit" style={{ "--unit": unit.color }}>
            <span className="clock-value" suppressHydrationWarning>
              {pad(time[unit.key])}
            </span>
            <span className="clock-label">{size === "small" ? unit.short : unit.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
