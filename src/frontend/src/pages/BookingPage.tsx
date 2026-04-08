import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  CheckCircle,
  Clock,
  ListChecks,
  Users,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { PageLoading } from "../components/LoadingSpinner";
import {
  useBookSession,
  useCancelBooking,
  useMyBookings,
  useSessions,
} from "../hooks/useBackend";
import type { TrainingSession } from "../types";

function formatDate(ts: bigint | number): string {
  const ms = typeof ts === "bigint" ? Number(ts) / 1_000_000 : ts;
  return new Date(ms).toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatTime(ts: bigint | number): string {
  const ms = typeof ts === "bigint" ? Number(ts) / 1_000_000 : ts;
  return new Date(ms).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function durationMinutes(s: TrainingSession): number {
  return Math.round(
    (Number(s.endTime) - Number(s.startTime)) / 1_000_000 / 60_000,
  );
}

const DEMO_SESSIONS: TrainingSession[] = [
  {
    id: BigInt(1),
    title: "Strength Foundations",
    description:
      "Build core strength and learn proper lifting technique with Garima.",
    startTime: BigInt(Date.now() + 86400000) * BigInt(1_000_000),
    endTime: BigInt(Date.now() + 86400000 + 3600000) * BigInt(1_000_000),
    capacity: BigInt(6),
    bookedCount: BigInt(3),
  },
  {
    id: BigInt(2),
    title: "Fat Burn HIIT",
    description:
      "High intensity interval training designed to maximize calorie burn.",
    startTime: BigInt(Date.now() + 172800000) * BigInt(1_000_000),
    endTime: BigInt(Date.now() + 172800000 + 2700000) * BigInt(1_000_000),
    capacity: BigInt(8),
    bookedCount: BigInt(7),
  },
  {
    id: BigInt(3),
    title: "Nutrition Assessment",
    description:
      "One-on-one session to build your personalized macro plan and meal strategy.",
    startTime: BigInt(Date.now() + 259200000) * BigInt(1_000_000),
    endTime: BigInt(Date.now() + 259200000 + 5400000) * BigInt(1_000_000),
    capacity: BigInt(1),
    bookedCount: BigInt(0),
  },
  {
    id: BigInt(4),
    title: "Progressive Cardio",
    description:
      "Endurance-focused training to build aerobic capacity and stamina.",
    startTime: BigInt(Date.now() + 345600000) * BigInt(1_000_000),
    endTime: BigInt(Date.now() + 345600000 + 3000000) * BigInt(1_000_000),
    capacity: BigInt(10),
    bookedCount: BigInt(4),
  },
  {
    id: BigInt(5),
    title: "Full Body Strength",
    description:
      "Complete compound movement program for total body development.",
    startTime: BigInt(Date.now() + 432000000) * BigInt(1_000_000),
    endTime: BigInt(Date.now() + 432000000 + 4500000) * BigInt(1_000_000),
    capacity: BigInt(6),
    bookedCount: BigInt(6),
  },
  {
    id: BigInt(6),
    title: "Recovery & Mobility",
    description:
      "Yoga-based recovery session to improve flexibility and reduce DOMS.",
    startTime: BigInt(Date.now() + 518400000) * BigInt(1_000_000),
    endTime: BigInt(Date.now() + 518400000 + 3600000) * BigInt(1_000_000),
    capacity: BigInt(12),
    bookedCount: BigInt(2),
  },
];

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<"sessions" | "mybookings">(
    "sessions",
  );
  const { data: sessions, isLoading } = useSessions();
  const { data: myBookings, isLoading: bookingsLoading } = useMyBookings();
  const bookSession = useBookSession();
  const cancelBooking = useCancelBooking();

  const displaySessions = sessions?.length ? sessions : DEMO_SESSIONS;
  const bookedSessionIds = new Set(
    myBookings?.map((b) => String(b.sessionId)) ?? [],
  );

  const handleBook = async (session: TrainingSession) => {
    try {
      await bookSession.mutateAsync(session.id);
      toast.success(`Booked: ${session.title}`);
    } catch {
      toast.error("Failed to book session. Please try again.");
    }
  };

  const handleCancel = async (bookingId: bigint, sessionTitle?: string) => {
    try {
      await cancelBooking.mutateAsync(bookingId);
      toast.success(
        sessionTitle ? `Cancelled: ${sessionTitle}` : "Booking cancelled.",
      );
    } catch {
      toast.error("Failed to cancel. Please try again.");
    }
  };

  const handleCancelBySession = async (sessionId: bigint) => {
    const booking = myBookings?.find(
      (b) => String(b.sessionId) === String(sessionId),
    );
    if (!booking) return;
    const session = displaySessions.find(
      (s) => String(s.id) === String(sessionId),
    );
    await handleCancel(booking.id, session?.title);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-card border-b border-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 text-xs tracking-widest uppercase">
              Booking Calendar
            </Badge>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              BOOK YOUR SESSION
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-xl">
              Choose from personalized training sessions with Garima. Book your
              spot today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Bar */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-0">
          <button
            type="button"
            onClick={() => setActiveTab("sessions")}
            className={`px-5 py-3.5 text-sm font-body font-medium border-b-2 transition-smooth flex items-center gap-2 ${
              activeTab === "sessions"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            data-ocid="tab-sessions"
          >
            <Calendar size={15} aria-hidden="true" />
            Available Sessions
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("mybookings")}
            className={`px-5 py-3.5 text-sm font-body font-medium border-b-2 transition-smooth flex items-center gap-2 ${
              activeTab === "mybookings"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            data-ocid="tab-my-bookings"
          >
            <ListChecks size={15} aria-hidden="true" />
            My Bookings
            {(myBookings?.length ?? 0) > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold leading-none">
                {myBookings?.length}
              </span>
            )}
          </button>
        </div>
      </section>

      {/* Sessions Tab */}
      {activeTab === "sessions" && (
        <section className="py-10 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {isLoading ? (
              <PageLoading label="Loading sessions..." />
            ) : displaySessions.length === 0 ? (
              <div
                className="text-center py-20 text-muted-foreground"
                data-ocid="sessions-empty"
              >
                <Calendar
                  size={48}
                  className="mx-auto mb-4 opacity-30"
                  aria-hidden="true"
                />
                <p className="font-body text-lg">
                  No sessions available right now.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {displaySessions.map((session, i) => {
                  const isBooked = bookedSessionIds.has(String(session.id));
                  const isFull = session.bookedCount >= session.capacity;
                  const spotsLeft =
                    Number(session.capacity) - Number(session.bookedCount);

                  return (
                    <motion.div
                      key={String(session.id)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i % 6) * 0.08 }}
                      data-ocid={`session-card-${session.id}`}
                    >
                      <Card
                        className={`bg-card border p-5 flex flex-col gap-4 h-full shadow-subtle hover:shadow-elevated transition-smooth ${isBooked ? "border-primary/40" : "border-border"}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-display font-bold text-foreground">
                              {session.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-body mt-1 line-clamp-2">
                              {session.description}
                            </p>
                          </div>
                          {isBooked && (
                            <CheckCircle
                              size={18}
                              className="text-primary shrink-0 mt-1"
                              aria-hidden="true"
                            />
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Calendar size={14} aria-hidden="true" />
                            <span className="font-body">
                              {formatDate(session.startTime)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock size={14} aria-hidden="true" />
                            <span className="font-body">
                              {formatTime(session.startTime)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock size={14} aria-hidden="true" />
                            <span className="font-body">
                              {durationMinutes(session)}min
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Users size={14} aria-hidden="true" />
                            <span
                              className={`font-body ${spotsLeft <= 2 ? "text-destructive font-semibold" : ""}`}
                            >
                              {isFull ? "Full" : `${spotsLeft} spots left`}
                            </span>
                          </div>
                        </div>

                        <div className="mt-auto">
                          {isBooked ? (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-destructive/40 text-destructive hover:bg-destructive/10"
                              onClick={() => handleCancelBySession(session.id)}
                              disabled={cancelBooking.isPending}
                              data-ocid={`btn-cancel-${session.id}`}
                            >
                              <XCircle
                                size={14}
                                className="mr-1.5"
                                aria-hidden="true"
                              />
                              Cancel Booking
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                              onClick={() => handleBook(session)}
                              disabled={isFull || bookSession.isPending}
                              data-ocid={`btn-book-${session.id}`}
                            >
                              {isFull ? "Session Full" : "Book Session"}
                            </Button>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* My Bookings Tab */}
      {activeTab === "mybookings" && (
        <section className="py-10 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {bookingsLoading ? (
              <PageLoading label="Loading your bookings..." />
            ) : !myBookings?.length ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 text-muted-foreground"
                data-ocid="my-bookings-empty"
              >
                <ListChecks
                  size={52}
                  className="mx-auto mb-5 opacity-30"
                  aria-hidden="true"
                />
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  No bookings yet
                </h3>
                <p className="font-body text-sm mb-6">
                  Browse available sessions and book your first training session
                  with Garima.
                </p>
                <Button
                  onClick={() => setActiveTab("sessions")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-ocid="btn-browse-sessions"
                >
                  Browse Sessions
                </Button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <h2 className="font-display font-bold text-xl text-foreground mb-6">
                  Your Upcoming Bookings
                </h2>
                {myBookings.map((booking, i) => {
                  const session = displaySessions.find(
                    (s) => String(s.id) === String(booking.sessionId),
                  );
                  return (
                    <motion.div
                      key={String(booking.id)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      data-ocid={`my-booking-row-${booking.id}`}
                    >
                      <Card className="bg-card border-border p-5 shadow-subtle hover:shadow-elevated transition-smooth">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                              <CheckCircle
                                size={20}
                                className="text-primary"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <h3 className="font-display font-bold text-foreground">
                                {session?.title ?? "Training Session"}
                              </h3>
                              <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                                {session && (
                                  <>
                                    <span className="flex items-center gap-1">
                                      <Calendar size={12} aria-hidden="true" />
                                      {formatDate(session.startTime)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Clock size={12} aria-hidden="true" />
                                      {formatTime(session.startTime)} ·{" "}
                                      {durationMinutes(session)}min
                                    </span>
                                  </>
                                )}
                                <Badge variant="secondary" className="text-xs">
                                  {booking.status}
                                </Badge>
                              </div>
                              <div className="text-xs text-muted-foreground font-body mt-1">
                                Booked{" "}
                                {new Date(
                                  Number(booking.bookedAt) / 1_000_000,
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-destructive/40 text-destructive hover:bg-destructive/10 shrink-0"
                            onClick={() =>
                              handleCancel(booking.id, session?.title)
                            }
                            disabled={cancelBooking.isPending}
                            data-ocid={`btn-cancel-booking-${booking.id}`}
                          >
                            <XCircle
                              size={14}
                              className="mr-1.5"
                              aria-hidden="true"
                            />
                            Cancel
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
}
