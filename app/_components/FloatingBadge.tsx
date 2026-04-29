"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { IconShield } from "./icons";

type Pos = { x: number; y: number };

const STORAGE_KEY = "cicanda:badge-pos";
const PADDING = 16;
const DRAG_THRESHOLD = 3;

function clamp(pos: Pos, w: number, h: number): Pos {
  const maxX = Math.max(PADDING, window.innerWidth - w - PADDING);
  const maxY = Math.max(PADDING, window.innerHeight - h - PADDING);
  return {
    x: Math.min(Math.max(pos.x, PADDING), maxX),
    y: Math.min(Math.max(pos.y, PADDING), maxY),
  };
}

function loadStoredPos(): Pos | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Pos>;
    if (typeof parsed.x === "number" && typeof parsed.y === "number") {
      return { x: parsed.x, y: parsed.y };
    }
  } catch {
    // ignore parse errors
  }
  return null;
}

export function FloatingBadge() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    offsetX: number;
    offsetY: number;
    startX: number;
    startY: number;
    moved: boolean;
  } | null>(null);
  const [pos, setPos] = useState<Pos | null>(null);
  const [snapping, setSnapping] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const stored = loadStoredPos();
    const initial =
      stored ??
      {
        x: window.innerWidth - rect.width - PADDING,
        y: window.innerHeight - rect.height - PADDING,
      };
    setPos(clamp(initial, rect.width, rect.height));

    const onResize = () => {
      const r = node.getBoundingClientRect();
      setPos((p) => (p ? clamp(p, r.width, r.height) : p));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!pos) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
    } catch {
      // ignore quota errors
    }
  }, [pos]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    drag.current = {
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
    };
    node.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const node = ref.current;
    if (!d || !node) return;
    if (!d.moved) {
      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      d.moved = true;
    }
    const rect = node.getBoundingClientRect();
    setPos(
      clamp(
        { x: e.clientX - d.offsetX, y: e.clientY - d.offsetY },
        rect.width,
        rect.height,
      ),
    );
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    drag.current = null;
    ref.current?.releasePointerCapture(e.pointerId);
    if (!d?.moved) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const targetX =
      centerX < window.innerWidth / 2
        ? PADDING
        : window.innerWidth - rect.width - PADDING;
    setSnapping(true);
    setPos((p) =>
      p ? clamp({ x: targetX, y: p.y }, rect.width, rect.height) : p,
    );
  };

  const onTransitionEnd = () => setSnapping(false);

  return (
    <div
      ref={ref}
      className={`floating-badge${snapping ? " is-snapping" : ""}`}
      role="note"
      aria-label="ISO-aligned delivery — drag to reposition"
      style={pos ? { left: pos.x, top: pos.y } : { visibility: "hidden" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onTransitionEnd={onTransitionEnd}
    >
      <div className="floating-badge__ico">
        <IconShield size={20} />
      </div>
      <div>
        <div className="floating-badge__t1">ISO-aligned delivery</div>
        <div className="floating-badge__t2">Vetted partners only</div>
      </div>
    </div>
  );
}
