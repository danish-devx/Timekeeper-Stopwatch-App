import { useEffect, useRef, useState } from "react";
import stopwatchImage from "../../assets/pngwing.com (5).png";

const formatTime = (milliseconds) => {
  const totalCentiseconds = Math.floor(milliseconds / 10);
  const centiseconds = totalCentiseconds % 100;
  const totalSeconds = Math.floor(totalCentiseconds / 100);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    centiseconds: String(centiseconds).padStart(2, "0"),
  };
};

const Stopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const startedAt = useRef(0);
  const savedElapsed = useRef(0);

  useEffect(() => {
    if (!isRunning) return undefined;

    const timer = window.setInterval(() => {
      setElapsed(savedElapsed.current + Date.now() - startedAt.current);
    }, 10);

    return () => window.clearInterval(timer);
  }, [isRunning]);

  const toggleTimer = () => {
    if (isRunning) {
      savedElapsed.current = elapsed;
      setIsRunning(false);
      return;
    }

    startedAt.current = Date.now();
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsed(0);
    savedElapsed.current = 0;
    setLaps([]);
  };

  const addLap = () => {
    if (!isRunning && elapsed === 0) return;

    setLaps((currentLaps) => [
      { number: currentLaps.length + 1, value: elapsed },
      ...currentLaps,
    ]);
  };

  const time = formatTime(elapsed);
  const bestLap = laps.length ? Math.min(...laps.map((lap) => lap.value)) : 0;

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#101313] text-[#f5f0e8]"
      style={{ "--stopwatch-image": `url("${stopwatchImage}")` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(190,90,43,0.18),transparent_32%),linear-gradient(120deg,rgba(16,19,19,0.98)_8%,rgba(16,19,19,0.78)_58%,rgba(16,19,19,0.93))]" />
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--stopwatch-image)] bg-[length:680px_auto] bg-[right_8%_center] bg-no-repeat opacity-30 mix-blend-screen md:bg-[length:760px_auto]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-7 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-[#e87843]/60 text-sm font-semibold text-[#f18a51]">
              TS
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
              Timekeeper
            </span>
          </div>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.28em] text-white/35 sm:block">
            Precision instrument / 01
          </span>
          <span
            className="h-2 w-2 rounded-full bg-[#e87843] shadow-[0_0_16px_#e87843]"
            aria-label="System ready"
          />
        </header>

        <section className="grid flex-1 items-center gap-14 py-12 lg:grid-cols-[1fr_0.66fr] lg:gap-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#e87843]">
              Focused time, measured beautifully
            </p>
            <h1 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.02em] text-[#fff9ef] sm:text-7xl">
              Every second
              <br />
              <em className="font-light text-[#e87843]">counts.</em>
            </h1>

            <div className="mt-14 border-y border-white/10 py-8 sm:mt-20 sm:py-10">
              <div className="flex items-end gap-2 font-mono text-5xl font-light tracking-[-0.06em] text-white sm:text-8xl">
                <span>{time.hours}</span>
                <span className="pb-2 text-[#e87843] sm:pb-4">:</span>
                <span>{time.minutes}</span>
                <span className="pb-2 text-[#e87843] sm:pb-4">:</span>
                <span>{time.seconds}</span>
                <span className="mb-1 w-14 text-xl tracking-normal text-white/40 sm:mb-3 sm:w-20 sm:text-2xl">
                  .{time.centiseconds}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/35">
                <span className="h-px w-8 bg-[#e87843]" /> Hrs &nbsp; Min &nbsp;
                Sec &nbsp; Csec
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={toggleTimer}
                className="min-w-36 cursor-pointer bg-[#e87843] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1b1714] transition hover:bg-[#ff9a63] focus:outline-none focus:ring-2 focus:ring-[#e87843] focus:ring-offset-2 focus:ring-offset-[#101313]"
              >
                {isRunning ? "Pause" : elapsed ? "Resume" : "Start"}
              </button>
              <button
                type="button"
                onClick={addLap}
                disabled={elapsed === 0}
                className="cursor-pointer border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white/75 transition hover:border-white/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                Lap
              </button>
              <button
                type="button"
                onClick={resetTimer}
                className="cursor-pointer px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
              >
                Reset
              </button>
            </div>
          </div>

          <aside className="w-full max-w-sm justify-self-end border border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="flex items-start justify-between border-b border-white/10 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Session log
                </p>
                <p className="mt-2 font-serif text-2xl text-white">
                  Laps & splits
                </p>
              </div>
              <span className="font-mono text-xs text-[#e87843]">
                {String(laps.length).padStart(2, "0")}
              </span>
            </div>
            <div className="max-h-80 min-h-48 overflow-y-auto p-3">
              {laps.length ? (
                laps.map((lap) => {
                  const lapTime = formatTime(lap.value);
                  return (
                    <div
                      key={lap.number}
                      className="flex items-center justify-between border-b border-white/5 px-3 py-4 last:border-0"
                    >
                      <span className="font-mono text-xs text-white/35">
                        LAP {String(lap.number).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-sm text-white/80">
                        {lapTime.minutes}:{lapTime.seconds}.
                        {lapTime.centiseconds}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#e87843]">
                        {lap.value === bestLap ? "Best" : ""}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="flex h-44 items-center justify-center text-center text-xs uppercase leading-6 tracking-[0.2em] text-white/25">
                  Your splits
                  <br />
                  will appear here
                </div>
              )}
            </div>
            <div className="flex justify-between border-t border-white/10 px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
              <span>Live precision</span>
              <span className="text-white/55">10 ms</span>
            </div>
          </aside>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.22em] text-white/30 sm:flex-row sm:justify-between">
          <span>Designed for deep work</span>
          <span>© 2026 / timekeeper studio</span>
        </footer>
      </div>
    </main>
  );
};

export default Stopwatch;
