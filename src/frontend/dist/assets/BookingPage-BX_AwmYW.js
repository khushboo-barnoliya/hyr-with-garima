import { r as reactExports, j as jsxRuntimeExports, P as PageLoading } from "./index-BLaxd34b.js";
import { c as createLucideIcon, d as useSessions, e as useMyBookings, f as useBookSession, g as useCancelBooking, L as Layout, m as motion, B as Badge, b as Button } from "./useBackend-CKG5PE8y.js";
import { C as Card } from "./card-emnBK9cC.js";
import { u as ue } from "./index-BLvi-Fth.js";
import { C as Calendar } from "./calendar-DmMOsX3A.js";
import { C as CircleCheckBig } from "./circle-check-big-DmrJ2V4y.js";
import { U as Users } from "./users-qqJWaj6-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
];
const ListChecks = createLucideIcon("list-checks", __iconNode);
function formatDate(ts) {
  const ms = typeof ts === "bigint" ? Number(ts) / 1e6 : ts;
  return new Date(ms).toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}
function formatTime(ts) {
  const ms = typeof ts === "bigint" ? Number(ts) / 1e6 : ts;
  return new Date(ms).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  });
}
function durationMinutes(s) {
  return Math.round(
    (Number(s.endTime) - Number(s.startTime)) / 1e6 / 6e4
  );
}
const DEMO_SESSIONS = [
  {
    id: BigInt(1),
    title: "Strength Foundations",
    description: "Build core strength and learn proper lifting technique with Garima.",
    startTime: BigInt(Date.now() + 864e5) * BigInt(1e6),
    endTime: BigInt(Date.now() + 864e5 + 36e5) * BigInt(1e6),
    capacity: BigInt(6),
    bookedCount: BigInt(3)
  },
  {
    id: BigInt(2),
    title: "Fat Burn HIIT",
    description: "High intensity interval training designed to maximize calorie burn.",
    startTime: BigInt(Date.now() + 1728e5) * BigInt(1e6),
    endTime: BigInt(Date.now() + 1728e5 + 27e5) * BigInt(1e6),
    capacity: BigInt(8),
    bookedCount: BigInt(7)
  },
  {
    id: BigInt(3),
    title: "Nutrition Assessment",
    description: "One-on-one session to build your personalized macro plan and meal strategy.",
    startTime: BigInt(Date.now() + 2592e5) * BigInt(1e6),
    endTime: BigInt(Date.now() + 2592e5 + 54e5) * BigInt(1e6),
    capacity: BigInt(1),
    bookedCount: BigInt(0)
  },
  {
    id: BigInt(4),
    title: "Progressive Cardio",
    description: "Endurance-focused training to build aerobic capacity and stamina.",
    startTime: BigInt(Date.now() + 3456e5) * BigInt(1e6),
    endTime: BigInt(Date.now() + 3456e5 + 3e6) * BigInt(1e6),
    capacity: BigInt(10),
    bookedCount: BigInt(4)
  },
  {
    id: BigInt(5),
    title: "Full Body Strength",
    description: "Complete compound movement program for total body development.",
    startTime: BigInt(Date.now() + 432e6) * BigInt(1e6),
    endTime: BigInt(Date.now() + 432e6 + 45e5) * BigInt(1e6),
    capacity: BigInt(6),
    bookedCount: BigInt(6)
  },
  {
    id: BigInt(6),
    title: "Recovery & Mobility",
    description: "Yoga-based recovery session to improve flexibility and reduce DOMS.",
    startTime: BigInt(Date.now() + 5184e5) * BigInt(1e6),
    endTime: BigInt(Date.now() + 5184e5 + 36e5) * BigInt(1e6),
    capacity: BigInt(12),
    bookedCount: BigInt(2)
  }
];
function BookingPage() {
  const [activeTab, setActiveTab] = reactExports.useState(
    "sessions"
  );
  const { data: sessions, isLoading } = useSessions();
  const { data: myBookings, isLoading: bookingsLoading } = useMyBookings();
  const bookSession = useBookSession();
  const cancelBooking = useCancelBooking();
  const displaySessions = (sessions == null ? void 0 : sessions.length) ? sessions : DEMO_SESSIONS;
  const bookedSessionIds = new Set(
    (myBookings == null ? void 0 : myBookings.map((b) => String(b.sessionId))) ?? []
  );
  const handleBook = async (session) => {
    try {
      await bookSession.mutateAsync(session.id);
      ue.success(`Booked: ${session.title}`);
    } catch {
      ue.error("Failed to book session. Please try again.");
    }
  };
  const handleCancel = async (bookingId, sessionTitle) => {
    try {
      await cancelBooking.mutateAsync(bookingId);
      ue.success(
        sessionTitle ? `Cancelled: ${sessionTitle}` : "Booking cancelled."
      );
    } catch {
      ue.error("Failed to cancel. Please try again.");
    }
  };
  const handleCancelBySession = async (sessionId) => {
    const booking = myBookings == null ? void 0 : myBookings.find(
      (b) => String(b.sessionId) === String(sessionId)
    );
    if (!booking) return;
    const session = displaySessions.find(
      (s) => String(s.id) === String(sessionId)
    );
    await handleCancel(booking.id, session == null ? void 0 : session.title);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary/15 text-primary border-primary/30 text-xs tracking-widest uppercase", children: "Booking Calendar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-3", children: "BOOK YOUR SESSION" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-lg max-w-xl", children: "Choose from personalized training sessions with Garima. Book your spot today." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab("sessions"),
          className: `px-5 py-3.5 text-sm font-body font-medium border-b-2 transition-smooth flex items-center gap-2 ${activeTab === "sessions" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
          "data-ocid": "tab-sessions",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 15, "aria-hidden": "true" }),
            "Available Sessions"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab("mybookings"),
          className: `px-5 py-3.5 text-sm font-body font-medium border-b-2 transition-smooth flex items-center gap-2 ${activeTab === "mybookings" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
          "data-ocid": "tab-my-bookings",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { size: 15, "aria-hidden": "true" }),
            "My Bookings",
            ((myBookings == null ? void 0 : myBookings.length) ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold leading-none", children: myBookings == null ? void 0 : myBookings.length })
          ]
        }
      )
    ] }) }),
    activeTab === "sessions" && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, { label: "Loading sessions..." }) : displaySessions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-20 text-muted-foreground",
        "data-ocid": "sessions-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Calendar,
            {
              size: 48,
              className: "mx-auto mb-4 opacity-30",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg", children: "No sessions available right now." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: displaySessions.map((session, i) => {
      const isBooked = bookedSessionIds.has(String(session.id));
      const isFull = session.bookedCount >= session.capacity;
      const spotsLeft = Number(session.capacity) - Number(session.bookedCount);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i % 6 * 0.08 },
          "data-ocid": `session-card-${session.id}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: `bg-card border p-5 flex flex-col gap-4 h-full shadow-subtle hover:shadow-elevated transition-smooth ${isBooked ? "border-primary/40" : "border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: session.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1 line-clamp-2", children: session.description })
                  ] }),
                  isBooked && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheckBig,
                    {
                      size: 18,
                      className: "text-primary shrink-0 mt-1",
                      "aria-hidden": "true"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14, "aria-hidden": "true" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body", children: formatDate(session.startTime) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, "aria-hidden": "true" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body", children: formatTime(session.startTime) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, "aria-hidden": "true" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body", children: [
                      durationMinutes(session),
                      "min"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14, "aria-hidden": "true" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `font-body ${spotsLeft <= 2 ? "text-destructive font-semibold" : ""}`,
                        children: isFull ? "Full" : `${spotsLeft} spots left`
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: isBooked ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "w-full border-destructive/40 text-destructive hover:bg-destructive/10",
                    onClick: () => handleCancelBySession(session.id),
                    disabled: cancelBooking.isPending,
                    "data-ocid": `btn-cancel-${session.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleX,
                        {
                          size: 14,
                          className: "mr-1.5",
                          "aria-hidden": "true"
                        }
                      ),
                      "Cancel Booking"
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50",
                    onClick: () => handleBook(session),
                    disabled: isFull || bookSession.isPending,
                    "data-ocid": `btn-book-${session.id}`,
                    children: isFull ? "Session Full" : "Book Session"
                  }
                ) })
              ]
            }
          )
        },
        String(session.id)
      );
    }) }) }) }),
    activeTab === "mybookings" && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: bookingsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, { label: "Loading your bookings..." }) : !(myBookings == null ? void 0 : myBookings.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center py-20 text-muted-foreground",
        "data-ocid": "my-bookings-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListChecks,
            {
              size: 52,
              className: "mx-auto mb-5 opacity-30",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-2", children: "No bookings yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm mb-6", children: "Browse available sessions and book your first training session with Garima." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => setActiveTab("sessions"),
              className: "bg-primary text-primary-foreground hover:bg-primary/90",
              "data-ocid": "btn-browse-sessions",
              children: "Browse Sessions"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-6", children: "Your Upcoming Bookings" }),
      myBookings.map((booking, i) => {
        const session = displaySessions.find(
          (s) => String(s.id) === String(booking.sessionId)
        );
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -16 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.07 },
            "data-ocid": `my-booking-row-${booking.id}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border p-5 shadow-subtle hover:shadow-elevated transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    size: 20,
                    className: "text-primary",
                    "aria-hidden": "true"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: (session == null ? void 0 : session.title) ?? "Training Session" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1 text-sm text-muted-foreground", children: [
                    session && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12, "aria-hidden": "true" }),
                        formatDate(session.startTime)
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12, "aria-hidden": "true" }),
                        formatTime(session.startTime),
                        " ·",
                        " ",
                        durationMinutes(session),
                        "min"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: booking.status })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground font-body mt-1", children: [
                    "Booked",
                    " ",
                    new Date(
                      Number(booking.bookedAt) / 1e6
                    ).toLocaleDateString()
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "border-destructive/40 text-destructive hover:bg-destructive/10 shrink-0",
                  onClick: () => handleCancel(booking.id, session == null ? void 0 : session.title),
                  disabled: cancelBooking.isPending,
                  "data-ocid": `btn-cancel-booking-${booking.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleX,
                      {
                        size: 14,
                        className: "mr-1.5",
                        "aria-hidden": "true"
                      }
                    ),
                    "Cancel"
                  ]
                }
              )
            ] }) })
          },
          String(booking.id)
        );
      })
    ] }) }) })
  ] });
}
export {
  BookingPage as default
};
