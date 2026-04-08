import { c as createLucideIcon } from "./useBackend-CKG5PE8y.js";
import { j as jsxRuntimeExports, c as cn } from "./index-BLaxd34b.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function StatsCard({
  label,
  value,
  unit,
  delta,
  deltaPositive,
  icon: Icon,
  iconColor = "text-primary",
  className,
  "data-ocid": ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": ocid ?? "stats-card",
      className: cn(
        "bg-card border border-border rounded-xl p-5 flex flex-col gap-3 shadow-subtle",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body text-muted-foreground uppercase tracking-wide", children: label }),
          Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("p-2 rounded-lg bg-muted", iconColor), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, "aria-hidden": "true" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-display font-bold text-foreground leading-none", children: value }),
          unit && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body text-muted-foreground mb-0.5", children: unit })
        ] }),
        delta !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex items-center gap-1 text-xs font-medium",
              deltaPositive ? "text-primary" : "text-destructive"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: deltaPositive ? "▲" : "▼" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: delta })
            ]
          }
        )
      ]
    }
  );
}
export {
  StatsCard as S,
  Trash2 as T
};
