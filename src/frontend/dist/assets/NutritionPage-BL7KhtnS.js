import { j as jsxRuntimeExports, c as cn, r as reactExports, P as PageLoading, G as GoalType } from "./index-BLaxd34b.js";
import { c as createLucideIcon, h as useMyMealPlan, i as useMyMacroLogs, j as useRecipeGuides, k as useLogMacros, L as Layout, m as motion, B as Badge, b as Button } from "./useBackend-CKG5PE8y.js";
import { C as Card } from "./card-emnBK9cC.js";
import { I as Input } from "./input-B1VeGqv0.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent, P as Plus, L as Label } from "./tabs-DZ0QK3m3.js";
import { u as ue } from "./index-BLvi-Fth.js";
import { C as ChartNoAxesColumn, B as BookOpen } from "./chart-no-axes-column-CGuhT0Op.js";
import { S as Save } from "./save-D1ZVc3c4.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
];
const Utensils = createLucideIcon("utensils", __iconNode);
function MacroProgressBar({
  label,
  value,
  target,
  unit = "g",
  colorClass = "bg-primary",
  className
}) {
  const percent = Math.min(100, target > 0 ? value / target * 100 : 0);
  const isOver = value > target;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn("space-y-1.5", className),
      "data-ocid": `macro-bar-${label.toLowerCase()}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body font-medium text-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: cn(
                "font-mono text-xs",
                isOver ? "text-destructive" : "text-muted-foreground"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: isOver ? "text-destructive font-bold" : "text-foreground font-semibold",
                    children: value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "/",
                  target,
                  unit
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-2 bg-muted rounded-full overflow-hidden",
            "aria-label": `${label}: ${value} of ${target}${unit}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "h-full rounded-full transition-all duration-500 ease-out",
                  colorClass,
                  isOver && "bg-destructive"
                ),
                style: { width: `${percent}%` }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            Math.round(percent),
            "%"
          ] }),
          isOver && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-destructive text-xs", children: [
            "+",
            value - target,
            unit,
            " over"
          ] })
        ] })
      ]
    }
  );
}
const DEMO_GUIDES = [
  {
    id: "1",
    title: "High-Protein Meal Prep Guide",
    description: "30 recipes for hitting your protein goals. Perfect for muscle gain phase.",
    goalType: GoalType.muscleGain,
    filename: "high-protein-guide.pdf",
    file: { getDirectURL: () => "#" }
  },
  {
    id: "2",
    title: "Low-Carb Fat Loss Cookbook",
    description: "Delicious keto-friendly meals that keep you satiated while burning fat.",
    goalType: GoalType.weightLoss,
    filename: "low-carb-cookbook.pdf",
    file: { getDirectURL: () => "#" }
  },
  {
    id: "3",
    title: "Plant-Based Power Nutrition",
    description: "Complete plant-based guide with full amino acid profile coverage.",
    goalType: GoalType.maintenance,
    filename: "plant-based-guide.pdf",
    file: { getDirectURL: () => "#" }
  },
  {
    id: "4",
    title: "Endurance Athlete Fuel Guide",
    description: "Carb-cycling and periodization for endurance performance and recovery.",
    goalType: GoalType.endurance,
    filename: "endurance-fuel.pdf",
    file: { getDirectURL: () => "#" }
  }
];
const DEMO_MEAL_PLAN = {
  id: BigInt(1),
  name: "Lean Bulk Protocol",
  description: "Designed to build lean muscle while minimizing fat gain. High protein, moderate carbs.",
  dailyCalories: BigInt(2800),
  proteinGrams: BigInt(180),
  carbsGrams: BigInt(320),
  fatGrams: BigInt(75),
  goalType: GoalType.muscleGain,
  createdAt: BigInt(0)
};
function NutritionPage() {
  const { data: mealPlan, isLoading: planLoading } = useMyMealPlan();
  const { data: macroLogs, isLoading: logsLoading } = useMyMacroLogs();
  const { data: guides, isLoading: guidesLoading } = useRecipeGuides();
  const logMacros = useLogMacros();
  const [macroForm, setMacroForm] = reactExports.useState({
    date: BigInt(Date.now()) * BigInt(1e6),
    calories: BigInt(0),
    proteinGrams: BigInt(0),
    carbsGrams: BigInt(0),
    fatGrams: BigInt(0),
    notes: ""
  });
  const displayPlan = mealPlan ?? DEMO_MEAL_PLAN;
  const displayGuides = (guides == null ? void 0 : guides.length) ? guides : DEMO_GUIDES;
  const todayLog = macroLogs == null ? void 0 : macroLogs[0];
  const handleLogSubmit = async (e) => {
    e.preventDefault();
    try {
      await logMacros.mutateAsync({
        ...macroForm,
        date: BigInt(Date.now()) * BigInt(1e6)
      });
      ue.success("Macros logged successfully!");
      setMacroForm({
        date: BigInt(0),
        calories: BigInt(0),
        proteinGrams: BigInt(0),
        carbsGrams: BigInt(0),
        fatGrams: BigInt(0),
        notes: ""
      });
    } catch {
      ue.error("Failed to log macros. Please try again.");
    }
  };
  const goalTypeLabel = (gt) => {
    const labels = {
      [GoalType.weightLoss]: "Weight Loss",
      [GoalType.muscleGain]: "Muscle Gain",
      [GoalType.maintenance]: "Maintenance",
      [GoalType.endurance]: "Endurance"
    };
    return labels[gt] ?? gt;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent/15 text-accent border-accent/30 text-xs tracking-widest uppercase", children: "Nutrition Hub" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-3", children: "YOUR NUTRITION COMMAND CENTER" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-lg max-w-xl", children: "Your custom meal plan, macro tracker, and recipe guides — all in one place." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "plan", className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "bg-card border border-border",
          "data-ocid": "nutrition-tabs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "plan",
                className: "gap-1.5",
                "data-ocid": "tab-meal-plan",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { size: 15, "aria-hidden": "true" }),
                  " Meal Plan"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "macros",
                className: "gap-1.5",
                "data-ocid": "tab-macros",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 15, "aria-hidden": "true" }),
                  " Track Macros"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "guides",
                className: "gap-1.5",
                "data-ocid": "tab-recipes",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 15, "aria-hidden": "true" }),
                  " Recipe Guides"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "plan", className: "space-y-6", children: planLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, { label: "Loading your meal plan..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-6 shadow-subtle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-6 gap-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-2 bg-accent/15 text-accent border-accent/30 text-xs", children: goalTypeLabel(displayPlan.goalType) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: displayPlan.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1 max-w-lg", children: displayPlan.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-primary", children: Number(displayPlan.dailyCalories) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-body", children: "kcal / day" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MacroProgressBar,
                {
                  label: "Protein",
                  value: Number((todayLog == null ? void 0 : todayLog.proteinGrams) ?? 0),
                  target: Number(displayPlan.proteinGrams),
                  colorClass: "bg-primary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MacroProgressBar,
                {
                  label: "Carbs",
                  value: Number((todayLog == null ? void 0 : todayLog.carbsGrams) ?? 0),
                  target: Number(displayPlan.carbsGrams),
                  colorClass: "bg-accent"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MacroProgressBar,
                {
                  label: "Fats",
                  value: Number((todayLog == null ? void 0 : todayLog.fatGrams) ?? 0),
                  target: Number(displayPlan.fatGrams),
                  colorClass: "bg-chart-3"
                }
              )
            ] }),
            !todayLog && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-4 text-center", children: "Log today's macros to see your progress" })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "macros", className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-6 shadow-subtle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18, className: "text-primary", "aria-hidden": "true" }),
            "Log Today's Macros"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "calories",
                    className: "text-sm font-body text-muted-foreground",
                    children: "Calories (kcal)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "calories",
                    type: "number",
                    min: 0,
                    value: Number(macroForm.calories) || "",
                    onChange: (e) => setMacroForm((f) => ({
                      ...f,
                      calories: BigInt(e.target.value || "0")
                    })),
                    className: "bg-muted border-border",
                    "data-ocid": "input-calories"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "protein",
                    className: "text-sm font-body text-muted-foreground",
                    children: "Protein (g)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "protein",
                    type: "number",
                    min: 0,
                    value: Number(macroForm.proteinGrams) || "",
                    onChange: (e) => setMacroForm((f) => ({
                      ...f,
                      proteinGrams: BigInt(e.target.value || "0")
                    })),
                    className: "bg-muted border-border",
                    "data-ocid": "input-protein"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "carbs",
                    className: "text-sm font-body text-muted-foreground",
                    children: "Carbs (g)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "carbs",
                    type: "number",
                    min: 0,
                    value: Number(macroForm.carbsGrams) || "",
                    onChange: (e) => setMacroForm((f) => ({
                      ...f,
                      carbsGrams: BigInt(e.target.value || "0")
                    })),
                    className: "bg-muted border-border",
                    "data-ocid": "input-carbs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "fats",
                    className: "text-sm font-body text-muted-foreground",
                    children: "Fats (g)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "fats",
                    type: "number",
                    min: 0,
                    value: Number(macroForm.fatGrams) || "",
                    onChange: (e) => setMacroForm((f) => ({
                      ...f,
                      fatGrams: BigInt(e.target.value || "0")
                    })),
                    className: "bg-muted border-border",
                    "data-ocid": "input-fats"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                className: "w-full bg-primary text-primary-foreground hover:bg-primary/90",
                disabled: logMacros.isPending,
                "data-ocid": "btn-log-macros",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 15, className: "mr-1.5", "aria-hidden": "true" }),
                  logMacros.isPending ? "Saving..." : "Save Today's Macros"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-6 shadow-subtle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-4", children: "Recent Logs" }),
          logsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, { label: "Loading logs..." }) : !(macroLogs == null ? void 0 : macroLogs.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-10 text-muted-foreground",
              "data-ocid": "macros-empty",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChartNoAxesColumn,
                  {
                    size: 36,
                    className: "mx-auto mb-3 opacity-30",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm", children: "No macro logs yet. Start tracking today!" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-h-80 overflow-y-auto pr-1", children: macroLogs.slice(0, 10).map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-muted/40 rounded-lg p-3 flex items-center justify-between gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-body", children: new Date(
                    Number(log.date) / 1e6
                  ).toLocaleDateString() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-body font-medium text-foreground", children: [
                    Number(log.calories),
                    " kcal"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-mono", children: [
                    "P: ",
                    Number(log.proteinGrams),
                    "g"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent font-mono", children: [
                    "C: ",
                    Number(log.carbsGrams),
                    "g"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-chart-3 font-mono", children: [
                    "F: ",
                    Number(log.fatGrams),
                    "g"
                  ] })
                ] })
              ]
            },
            String(log.id)
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "guides", children: guidesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, { label: "Loading recipe guides..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: displayGuides.map((guide, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          "data-ocid": `recipe-guide-${guide.id}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-5 flex flex-col gap-3 h-full shadow-subtle hover:shadow-elevated hover:border-accent/30 transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-video bg-muted/50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              BookOpen,
              {
                size: 32,
                className: "text-muted-foreground/40",
                "aria-hidden": "true"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "w-fit text-xs", children: goalTypeLabel(guide.goalType) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-sm leading-snug", children: guide.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body flex-1", children: guide.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full border-accent/30 text-accent hover:bg-accent/10 mt-auto",
                asChild: true,
                "data-ocid": `btn-download-guide-${guide.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: guide.file.getDirectURL(),
                    download: guide.filename,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Download,
                        {
                          size: 14,
                          className: "mr-1.5",
                          "aria-hidden": "true"
                        }
                      ),
                      "Download"
                    ]
                  }
                )
              }
            )
          ] })
        },
        String(guide.id)
      )) }) })
    ] }) })
  ] });
}
export {
  NutritionPage as default
};
