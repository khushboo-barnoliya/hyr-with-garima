import { r as reactExports, j as jsxRuntimeExports, L as Link, E as ExternalBlob } from "./index-BLaxd34b.js";
import { c as createLucideIcon, u as useTransformations, a as useTestimonials, L as Layout, m as motion, B as Badge, b as Button } from "./useBackend-CKG5PE8y.js";
import { C as Card, a as CardContent } from "./card-emnBK9cC.js";
import { I as Input } from "./input-B1VeGqv0.js";
import { S as Skeleton, C as ChevronRight, B as BeforeAfterSlider } from "./BeforeAfterSlider-CAkW148b.js";
import { C as Calendar } from "./calendar-DmMOsX3A.js";
import { S as Star } from "./star-Cb0Aklli.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const makePlaceholderBlob = (url) => ExternalBlob.fromURL(url);
const SAMPLE_TRANSFORMATIONS = [
  {
    id: BigInt(1),
    clientName: "Priya Sharma",
    description: "Lost 22kg in 5 months with personalized training & nutrition coaching. Completely transformed her fitness mindset.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg"
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg"
    ),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(2),
    clientName: "Rahul Mehta",
    description: "Complete body recomposition. Shed body fat while building lean muscle mass through structured progressive training.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg"
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg"
    ),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(3),
    clientName: "Anjali Patel",
    description: "Post-pregnancy fitness transformation. Regained strength, confidence, and vitality through a carefully designed program.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg"
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg"
    ),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(4),
    clientName: "Vikram Nair",
    description: "From sedentary lifestyle to competitive physique. 8-month journey of discipline, nutrition, and consistent training.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg"
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg"
    ),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(5),
    clientName: "Sneha Gupta",
    description: "Athletic performance upgrade. Focused on functional strength and body composition for marathon running goals.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg"
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg"
    ),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(6),
    clientName: "Arjun Kapoor",
    description: "Busy professional who found balance. Lost significant weight and built sustainable healthy habits for life.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg"
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg"
    ),
    createdAt: BigInt(0)
  }
];
const SAMPLE_TESTIMONIALS = [
  {
    id: BigInt(1),
    clientName: "Priya Sharma",
    content: "Garima's approach completely changed my relationship with fitness. The personalized meal plans and training sessions made transformation feel achievable.",
    rating: BigInt(5),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(2),
    clientName: "Rahul Mehta",
    content: "I had tried everything before HYR. In 4 months I lost 15kg and built real muscle. The tracking tools kept me accountable.",
    rating: BigInt(5),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(3),
    clientName: "Anjali Patel",
    content: "After my pregnancy I felt lost. Garima created a program tailored to my body and goals. I'm stronger now than before — truly life-changing.",
    rating: BigInt(5),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(4),
    clientName: "Vikram Nair",
    content: "8 months of consistent effort with Garima's guidance and I'm unrecognisable. The nutrition hub made it so easy to stay on track.",
    rating: BigInt(5),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(5),
    clientName: "Sneha Gupta",
    content: "Running my first marathon was a dream. HYR's athletic performance program helped me hit it while achieving the best body composition of my life.",
    rating: BigInt(5),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(6),
    clientName: "Arjun Kapoor",
    content: "I was skeptical at first but the results after just 3 months were undeniable. Garima's system is structured, supportive, and it actually works.",
    rating: BigInt(4),
    createdAt: BigInt(0)
  }
];
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-center gap-0.5",
      "aria-label": `${rating} out of 5 stars`,
      children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          size: 12,
          className: star <= rating ? "fill-accent text-accent" : "text-muted-foreground",
          "aria-hidden": "true"
        },
        star
      ))
    }
  );
}
function TransformationCard({
  item,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index % 3 * 0.1 },
      "data-ocid": `transformation-card-${item.id}`,
      className: "flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth shadow-subtle hover:shadow-elevated group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BeforeAfterSlider,
          {
            beforeImage: item.beforeImage.getDirectURL(),
            afterImage: item.afterImage.getDirectURL(),
            className: "w-full aspect-[4/3]",
            initialPosition: 44
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-3 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground", children: item.clientName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mt-1 leading-relaxed", children: item.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-auto pt-3 border-t border-border text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12, "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(
              Number(item.createdAt) / 1e6 || Date.now()
            ).toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric"
            }) })
          ] })
        ] })
      ]
    }
  );
}
function TestimonialCard({
  item,
  index
}) {
  const initials = item.clientName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index % 3 * 0.1 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full bg-card border-border hover:border-primary/30 transition-smooth shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col gap-3 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-xs", children: initials }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: item.clientName }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: Number(item.rating) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1 italic", children: [
          "“",
          item.content,
          "”"
        ] })
      ] }) })
    }
  );
}
function GalleryPage() {
  const { data: transformations, isLoading: tLoading } = useTransformations();
  const { data: testimonials, isLoading: testLoading } = useTestimonials();
  const [search, setSearch] = reactExports.useState("");
  const displayTransformations = transformations && transformations.length > 0 ? transformations : SAMPLE_TRANSFORMATIONS;
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : SAMPLE_TESTIMONIALS;
  const filtered = displayTransformations.filter((t) => {
    return !search || t.clientName.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-16 border-b border-border relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.12 0.02 280) 0%, oklch(0.15 0.04 215) 60%, oklch(0.12 0.03 185) 100%)"
        },
        "data-ocid": "gallery-header",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.68 0.22 185 / 0.7), transparent 60%)",
                transform: "translate(30%, -30%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "text-center flex flex-col items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "border-accent/40 text-accent bg-accent/10 text-xs tracking-widest uppercase",
                    children: "Transformation Gallery"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight", children: [
                  "PROOF OF",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.68 0.22 185)" }, children: "TRANSFORMATION" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl text-lg", children: "Real people, real results. Drag the sliders on any card to witness incredible before & after transformations." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-xl", children: displayTransformations.length }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "transformations documented" })
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-background", "data-ocid": "transformations-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Search,
            {
              size: 16,
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Search transformations...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "pl-9 bg-card border-border",
              "data-ocid": "gallery-search"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 15, "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            filtered.length,
            " results"
          ] })
        ] })
      ] }),
      tLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full aspect-[4/3] rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-1/2" })
      ] }, k)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "gallery-empty",
          className: "text-center py-20 flex flex-col items-center gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                size: 28,
                className: "text-muted-foreground",
                "aria-hidden": "true"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: "No transformations found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "Try adjusting your search to find the transformation stories you're looking for." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setSearch(""),
                className: "border-primary/40 text-primary hover:bg-primary/10",
                children: "Clear search"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TransformationCard,
        {
          item,
          index: i
        },
        String(item.id)
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 border-t border-border",
        style: {
          background: "linear-gradient(180deg, oklch(0.14 0.015 250) 0%, oklch(0.12 0.008 280) 100%)"
        },
        "data-ocid": "gallery-testimonials",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "border-accent/40 text-accent bg-accent/10 text-xs tracking-widest uppercase mb-4",
                    children: "Client Stories"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight", children: [
                  "IN THEIR",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.72 0.25 55)" }, children: "OWN WORDS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl mx-auto", children: "Every transformation is a human story. Read what our members have to say about their journey with HYR." })
              ]
            }
          ),
          testLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: ["tsk-1", "tsk-2", "tsk-3", "tsk-4", "tsk-5", "tsk-6"].map(
            (k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 rounded-xl" }, k)
          ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: displayTestimonials.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { item, index: i }, String(item.id))) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-card border-t border-border",
        "data-ocid": "gallery-cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "flex flex-col items-center gap-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl text-foreground tracking-tight", children: [
                "READY TO BE OUR",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.68 0.22 185)" }, children: "NEXT SUCCESS STORY?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Book your first personalized training session and start your transformation journey today." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "lg",
                    "data-ocid": "gallery-cta-book",
                    className: "bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8 gap-2 shadow-elevated",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/booking", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, "aria-hidden": "true" }),
                      "Book Your Session"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    variant: "outline",
                    size: "lg",
                    "data-ocid": "gallery-cta-home",
                    className: "border-border text-foreground hover:bg-muted/50 font-display font-bold px-8 gap-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
                      "Back to Home",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18, "aria-hidden": "true" })
                    ] })
                  }
                )
              ] })
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  GalleryPage as default
};
