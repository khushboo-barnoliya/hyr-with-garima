import { j as jsxRuntimeExports, c as cn, r as reactExports } from "./index-BLaxd34b.js";
import { c as createLucideIcon } from "./useBackend-CKG5PE8y.js";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className,
  initialPosition = 50
}) {
  const [position, setPosition] = reactExports.useState(initialPosition);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const updatePosition = reactExports.useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition(x / rect.width * 100);
  }, []);
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };
  const handleTouchStart = (e) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };
  reactExports.useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e) => updatePosition(e.clientX);
    const handleTouchMove = (e) => updatePosition(e.touches[0].clientX);
    const stopDrag = () => setIsDragging(false);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", stopDrag);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", stopDrag);
    };
  }, [isDragging, updatePosition]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      "data-ocid": "before-after-slider",
      className: cn(
        "relative overflow-hidden rounded-lg select-none cursor-col-resize",
        className
      ),
      onMouseDown: handleMouseDown,
      onTouchStart: handleTouchStart,
      role: "slider",
      "aria-label": "Slide to compare before and after transformation",
      "aria-valuenow": Math.round(position),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: afterImage,
            alt: "After transformation",
            className: "w-full h-full object-cover block",
            draggable: false
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 overflow-hidden",
            style: { width: `${position}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: beforeImage,
                alt: "Before transformation",
                className: "absolute inset-0 w-full h-full object-cover block",
                style: { width: `${100 / (position / 100)}%`, maxWidth: "none" },
                draggable: false
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background/80 backdrop-blur-sm text-foreground text-xs font-display font-bold px-3 py-1 rounded tracking-widest", children: beforeLabel }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-display font-bold px-3 py-1 rounded tracking-widest", children: afterLabel }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 bottom-0 w-0.5 bg-primary pointer-events-none",
            style: { left: `${position}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground shadow-elevated flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M5 8L2 5m3 3L2 11M11 8l3-3m-3 3 3 3",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "text-primary-foreground"
                  }
                )
              }
            ) })
          }
        )
      ]
    }
  );
}
export {
  BeforeAfterSlider as B,
  ChevronRight as C,
  Skeleton as S
};
