import { u as useAuth, j as jsxRuntimeExports, L as Link, E as ExternalBlob } from "./index-BLaxd34b.js";
import { c as createLucideIcon, u as useTransformations, a as useTestimonials, L as Layout, m as motion, B as Badge, b as Button } from "./useBackend-CKG5PE8y.js";
import { C as ChevronRight, B as BeforeAfterSlider, S as Skeleton } from "./BeforeAfterSlider-CAkW148b.js";
import { C as Calendar } from "./calendar-DmMOsX3A.js";
import { U as Users } from "./users-qqJWaj6-.js";
import { S as Star } from "./star-Cb0Aklli.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const makePlaceholderBlob = (url) => ExternalBlob.fromURL(url);
const SAMPLE_TRANSFORMATIONS = [
  {
    id: BigInt(1),
    clientName: "Priya Sharma",
    description: "Lost 22kg in 5 months with personalized training & nutrition coaching.",
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
    description: "Complete body recomposition. Shed body fat while building lean muscle mass.",
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
    description: "Post-pregnancy transformation. Regained strength, confidence, and vitality.",
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
    content: "Garima's approach completely changed my relationship with fitness. The personalized meal plans and training sessions made transformation feel achievable, not overwhelming.",
    rating: BigInt(5),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(2),
    clientName: "Rahul Mehta",
    content: "I had tried everything before HYR. In 4 months I lost 15kg and built real muscle. The tracking tools kept me accountable and the results speak for themselves.",
    rating: BigInt(5),
    createdAt: BigInt(0)
  },
  {
    id: BigInt(3),
    clientName: "Anjali Patel",
    content: "After my pregnancy I felt lost. Garima created a program tailored to my body and goals. I'm stronger now than before — truly life-changing.",
    rating: BigInt(5),
    createdAt: BigInt(0)
  }
];
const STATS = [
  { value: "500+", label: "Transformations", icon: Zap },
  { value: "98%", label: "Success Rate", icon: TrendingUp },
  { value: "6+", label: "Years Experience", icon: Award },
  { value: "1,200+", label: "Active Members", icon: Users }
];
const FEATURES = [
  {
    icon: TrendingUp,
    iconColor: "text-primary",
    title: "Personalized Training",
    desc: "Custom programs built around your goals, schedule, and current fitness level.",
    href: "/booking",
    cta: "Book a Session",
    ocid: "feature-training"
  },
  {
    icon: Flame,
    iconColor: "text-accent",
    title: "Nutrition Hub",
    desc: "Tailored meal plans, macro tracking, and downloadable recipe guides.",
    href: "/nutrition",
    cta: "Explore Nutrition",
    ocid: "feature-nutrition"
  },
  {
    icon: Award,
    iconColor: "text-primary",
    title: "Progress Portal",
    desc: "Log measurements weekly and watch your transformation unfold through charts.",
    href: "/progress",
    cta: "Track Progress",
    ocid: "feature-progress"
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
          size: 13,
          className: star <= rating ? "fill-accent text-accent" : "text-muted-foreground",
          "aria-hidden": "true"
        },
        star
      ))
    }
  );
}
function TestimonialCard({
  item,
  index
}) {
  const initials = item.clientName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.12 },
      "data-ocid": `testimonial-card-${item.id}`,
      className: "bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-smooth shadow-subtle hover:shadow-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-sm", children: initials }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: item.clientName }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: Number(item.rating) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1 italic", children: [
          "“",
          item.content,
          "”"
        ] })
      ]
    }
  );
}
function TransformationPreviewCard({
  item,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      "data-ocid": `transformation-card-${item.id}`,
      className: "bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth shadow-subtle hover:shadow-elevated group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BeforeAfterSlider,
          {
            beforeImage: item.beforeImage.getDirectURL(),
            afterImage: item.afterImage.getDirectURL(),
            className: "aspect-[4/3]",
            initialPosition: 44
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-1", children: item.clientName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: item.description })
        ] })
      ]
    }
  );
}
function HomePage() {
  const { data: transformations, isLoading: tLoading } = useTransformations();
  const { data: testimonials, isLoading: testLoading } = useTestimonials();
  const { isAuthenticated, handleLogin } = useAuth();
  const displayTransformations = transformations && transformations.length > 0 ? transformations.slice(0, 3) : SAMPLE_TRANSFORMATIONS;
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials.slice(0, 3) : SAMPLE_TESTIMONIALS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "hero",
        "data-ocid": "hero-section",
        className: "relative min-h-[92vh] flex items-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.10 0.015 280) 0%, oklch(0.14 0.04 220) 40%, oklch(0.12 0.06 185) 70%, oklch(0.09 0.02 280) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.68 0.22 185 / 0.6) 0%, transparent 70%)",
                transform: "translate(30%, -20%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.72 0.25 55 / 0.5) 0%, transparent 70%)",
                transform: "translate(-20%, 20%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 opacity-5 pointer-events-none",
              style: {
                backgroundImage: "linear-gradient(oklch(0.68 0.22 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.68 0.22 185) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: -16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: "border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase px-4 py-1.5 gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 12, "aria-hidden": "true" }),
                        "Fitness Transformation Studio"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.1 },
                  className: "font-display font-black leading-none tracking-tight",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "block text-5xl sm:text-6xl lg:text-7xl",
                        style: { color: "oklch(0.68 0.22 185)" },
                        children: "REWRITE"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-5xl sm:text-6xl lg:text-7xl text-foreground", children: "YOUR STORY." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "block text-3xl sm:text-4xl lg:text-5xl mt-1",
                        style: { color: "oklch(0.72 0.25 55)" },
                        children: "TRANSFORM WITH GARIMA."
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.25 },
                  className: "text-muted-foreground text-lg leading-relaxed max-w-lg",
                  children: "Science-backed training, personalized nutrition, and a proven system that has transformed 500+ lives. Your body's potential is waiting — let's unlock it together."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.35 },
                  className: "flex flex-wrap gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        asChild: true,
                        size: "lg",
                        "data-ocid": "hero-cta-book",
                        className: "bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base px-8 shadow-elevated transition-smooth",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/booking", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "mr-2", "aria-hidden": "true" }),
                          "Book Session"
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        asChild: true,
                        variant: "outline",
                        size: "lg",
                        "data-ocid": "hero-cta-gallery",
                        className: "border-foreground/20 text-foreground hover:bg-foreground/5 font-display font-bold text-base px-8 transition-smooth",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", children: [
                          "View Transformations",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ChevronRight,
                            {
                              size: 18,
                              className: "ml-1",
                              "aria-hidden": "true"
                            }
                          )
                        ] })
                      }
                    ),
                    !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "lg",
                        "data-ocid": "hero-cta-login",
                        onClick: handleLogin,
                        className: "text-muted-foreground hover:text-foreground font-display font-bold text-base px-8",
                        children: "Member Login"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.5, delay: 0.5 },
                  className: "flex items-center gap-3 pt-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: ["P", "R", "A", "K"].map((initial) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "aria-hidden": "true",
                        className: "w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-display font-bold text-primary-foreground",
                        style: {
                          background: `oklch(${0.55 + ["P", "R", "A", "K"].indexOf(initial) * 0.04} 0.22 185)`
                        },
                        children: initial
                      },
                      initial
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "1,200+ members" }),
                      " ",
                      "transformed their lives"
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 40 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7, delay: 0.2 },
                className: "hidden lg:block",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "absolute -inset-4 rounded-2xl opacity-30",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.68 0.22 185 / 0.4), oklch(0.72 0.25 55 / 0.2))",
                        filter: "blur(20px)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    BeforeAfterSlider,
                    {
                      beforeImage: "/assets/generated/transformation-placeholder.dim_600x400.jpg",
                      afterImage: "/assets/generated/hero-transformation.dim_1200x700.jpg",
                      className: "relative rounded-2xl shadow-elevated w-full aspect-[4/3]",
                      initialPosition: 42
                    }
                  )
                ] })
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-y border-border", "data-ocid": "stats-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: STATS.map(({ value, label, icon: Icon }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.08 },
        className: "flex items-center gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, className: "text-primary", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-2xl text-foreground leading-none", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 tracking-wide", children: label })
          ] })
        ]
      },
      label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "gallery-preview",
        className: "py-20",
        style: {
          background: "linear-gradient(180deg, oklch(0.12 0.008 280) 0%, oklch(0.14 0.015 250) 100%)"
        },
        "data-ocid": "transformations-preview",
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
                    children: "Proven Results"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight", children: [
                  "REAL RESULTS.",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.72 0.25 55)" }, children: "INSPIRING STORIES." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl mx-auto", children: "Drag the slider to see the incredible transformations our members have achieved with our personalized programs." })
              ]
            }
          ),
          tLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: ["sk-t1", "sk-t2", "sk-t3"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full aspect-[4/3] rounded-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" })
          ] }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: displayTransformations.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TransformationPreviewCard,
            {
              item,
              index: i
            },
            String(item.id)
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: 0.3 },
              className: "text-center mt-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "outline",
                  size: "lg",
                  "data-ocid": "btn-view-gallery",
                  className: "border-primary/40 text-primary hover:bg-primary/10 font-display font-bold gap-2",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", children: [
                    "More Success Stories",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18, "aria-hidden": "true" })
                  ] })
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30 border-y border-border",
        "data-ocid": "success-stories",
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
                    className: "border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase mb-4",
                    children: "Client Testimonials"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight", children: [
                  "WHAT OUR",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.68 0.22 185)" }, children: "MEMBERS SAY" })
                ] })
              ]
            }
          ),
          testLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: ["s-a", "s-b", "s-c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-52 rounded-xl" }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: displayTestimonials.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { item, index: i }, String(item.id))) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "features-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-center mb-12",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl text-foreground tracking-tight", children: [
            "EVERYTHING YOU NEED TO",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.68 0.22 185)" }, children: "TRANSFORM" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: FEATURES.map((feature, i) => {
        const Icon = feature.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.12 },
            className: "bg-card border border-border rounded-xl p-7 flex flex-col gap-4 hover:border-primary/40 hover:shadow-elevated transition-smooth group",
            "data-ocid": feature.ocid,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Icon,
                {
                  size: 24,
                  className: feature.iconColor,
                  "aria-hidden": "true"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-2", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feature.desc })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  asChild: true,
                  className: "mt-auto w-fit border-border text-foreground hover:bg-muted/60 transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: feature.href, children: [
                    feature.cta,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        size: 14,
                        className: "ml-1",
                        "aria-hidden": "true"
                      }
                    )
                  ] })
                }
              )
            ]
          },
          feature.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "bottom-cta",
        className: "relative py-24 overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.14 0.04 220) 0%, oklch(0.10 0.02 280) 50%, oklch(0.13 0.05 185) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 opacity-10 pointer-events-none",
              style: {
                backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.68 0.22 185 / 0.8), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.72 0.25 55 / 0.6), transparent 50%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "flex flex-col items-center gap-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight leading-tight", children: [
                  "YOUR TRANSFORMATION",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.68 0.22 185)" }, children: "STARTS TODAY" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl", children: "Join 1,200+ members who have transformed their bodies and minds with Garima's proven system." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      size: "lg",
                      "data-ocid": "cta-book-now",
                      className: "bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-lg px-10 py-6 shadow-elevated transition-smooth",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/booking", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "mr-2", "aria-hidden": "true" }),
                        "Start Your Journey"
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      variant: "ghost",
                      size: "lg",
                      "data-ocid": "cta-gallery",
                      className: "text-foreground hover:bg-foreground/5 font-display font-bold text-lg px-10 py-6",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", children: "See Proof First" })
                    }
                  )
                ] })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  HomePage as default
};
