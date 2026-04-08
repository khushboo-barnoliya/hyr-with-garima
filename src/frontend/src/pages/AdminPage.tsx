import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart2,
  BookOpen,
  Calendar,
  Dumbbell,
  FileText,
  Plus,
  Shield,
  Star,
  Trash2,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { GoalType } from "../backend";
import { Layout } from "../components/Layout";
import { PageLoading } from "../components/LoadingSpinner";
import { StatsCard } from "../components/StatsCard";
import {
  useAllBookings,
  useAllMembers,
  useAllPlanAssignments,
  useAssignPlanToMember,
  useCreateFitnessPlan,
  useCreateMealPlan,
  useCreateSession,
  useCreateTestimonial,
  useDeleteFitnessPlan,
  useDeleteMealPlan,
  useDeleteSession,
  useDeleteTestimonial,
  useFitnessPlans,
  useMealPlans,
  useSessions,
  useTestimonials,
} from "../hooks/useBackend";

// ─── Members Tab ──────────────────────────────────────────────────────────────
function MembersAdmin() {
  const { data: members, isLoading } = useAllMembers();
  const { data: fitnessPlans } = useFitnessPlans();
  const { data: mealPlans } = useMealPlans();
  const assignPlan = useAssignPlanToMember();
  const [assignFitnessForm, setAssignFitnessForm] = useState({
    memberId: "",
    planId: "",
  });
  const [assignMealForm, setAssignMealForm] = useState({
    memberId: "",
    planId: "",
  });

  const handleAssignFitness = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignFitnessForm.memberId || !assignFitnessForm.planId) {
      toast.error("Please fill in both fields.");
      return;
    }
    try {
      await assignPlan.mutateAsync(assignFitnessForm);
      toast.success("Fitness plan assigned!");
      setAssignFitnessForm({ memberId: "", planId: "" });
    } catch {
      toast.error("Failed to assign fitness plan.");
    }
  };

  const handleAssignMeal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignMealForm.memberId || !assignMealForm.planId) {
      toast.error("Please fill in both fields.");
      return;
    }
    try {
      await assignPlan.mutateAsync(assignMealForm);
      toast.success("Meal plan assigned!");
      setAssignMealForm({ memberId: "", planId: "" });
    } catch {
      toast.error("Failed to assign meal plan.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Assignment Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        <Card className="bg-card border-border p-5 shadow-subtle">
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <Dumbbell size={16} className="text-primary" aria-hidden="true" />
            Assign Fitness Plan
          </h3>
          <form onSubmit={handleAssignFitness} className="space-y-3">
            <div className="space-y-1.5">
              <Label
                htmlFor="af-member"
                className="text-xs font-body text-muted-foreground"
              >
                Member Principal ID
              </Label>
              <Input
                id="af-member"
                value={assignFitnessForm.memberId}
                onChange={(e) =>
                  setAssignFitnessForm((f) => ({
                    ...f,
                    memberId: e.target.value,
                  }))
                }
                placeholder="Paste member principal..."
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-af-member"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="af-plan"
                className="text-xs font-body text-muted-foreground"
              >
                Fitness Plan ID
              </Label>
              <Input
                id="af-plan"
                value={assignFitnessForm.planId}
                onChange={(e) =>
                  setAssignFitnessForm((f) => ({
                    ...f,
                    planId: e.target.value,
                  }))
                }
                placeholder="Plan ID"
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-af-plan"
              />
            </div>
            <div className="text-xs text-muted-foreground space-y-0.5">
              {(fitnessPlans ?? []).map((p) => (
                <div key={String(p.id)} className="font-mono truncate">
                  <span className="text-primary">{String(p.id)}</span> —{" "}
                  {p.name}
                </div>
              ))}
            </div>
            <Button
              type="submit"
              size="sm"
              className="bg-primary text-primary-foreground"
              disabled={assignPlan.isPending}
              data-ocid="btn-assign-fitness-plan"
            >
              {assignPlan.isPending ? "Assigning..." : "Assign Fitness Plan"}
            </Button>
          </form>
        </Card>

        <Card className="bg-card border-border p-5 shadow-subtle">
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <UtensilsCrossed
              size={16}
              className="text-accent"
              aria-hidden="true"
            />
            Assign Meal Plan
          </h3>
          <form onSubmit={handleAssignMeal} className="space-y-3">
            <div className="space-y-1.5">
              <Label
                htmlFor="am-member"
                className="text-xs font-body text-muted-foreground"
              >
                Member Principal ID
              </Label>
              <Input
                id="am-member"
                value={assignMealForm.memberId}
                onChange={(e) =>
                  setAssignMealForm((f) => ({ ...f, memberId: e.target.value }))
                }
                placeholder="Paste member principal..."
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-am-member"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="am-plan"
                className="text-xs font-body text-muted-foreground"
              >
                Meal Plan ID
              </Label>
              <Input
                id="am-plan"
                value={assignMealForm.planId}
                onChange={(e) =>
                  setAssignMealForm((f) => ({ ...f, planId: e.target.value }))
                }
                placeholder="Meal Plan ID"
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-am-plan"
              />
            </div>
            <div className="text-xs text-muted-foreground space-y-0.5">
              {(mealPlans ?? []).map((m) => (
                <div key={String(m.id)} className="font-mono truncate">
                  <span className="text-accent">{String(m.id)}</span> — {m.name}
                </div>
              ))}
            </div>
            <Button
              type="submit"
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={assignPlan.isPending}
              data-ocid="btn-assign-meal-plan"
            >
              {assignPlan.isPending ? "Assigning..." : "Assign Meal Plan"}
            </Button>
          </form>
        </Card>
      </div>

      {/* Members Table */}
      <Card className="bg-card border-border shadow-subtle overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-display font-bold text-foreground flex items-center gap-2">
            <Users size={16} className="text-primary" aria-hidden="true" />
            All Members
          </h3>
          <Badge className="bg-primary/15 text-primary border-primary/30 text-xs">
            {members?.length ?? 0} total
          </Badge>
        </div>
        {isLoading ? (
          <div className="p-6">
            <PageLoading />
          </div>
        ) : (
          <ScrollArea className="max-h-96">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Name
                  </th>
                  <th className="text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Email
                  </th>
                  <th className="text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Joined
                  </th>
                  <th className="text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Meal Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {(members ?? []).map((m, i) => (
                  <tr
                    key={String(m.id)}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                    data-ocid={`admin-member-row-${i}`}
                  >
                    <td className="px-4 py-3 font-body font-medium text-foreground">
                      {m.name}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {m.email}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">
                      {new Date(
                        Number(m.joinedAt) / 1_000_000,
                      ).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      {m.assignedMealPlanId ? (
                        <Badge className="bg-accent/15 text-accent border-accent/30 text-xs">
                          {String(m.assignedMealPlanId)}
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!members?.length && (
              <p
                className="text-muted-foreground text-sm font-body text-center py-8"
                data-ocid="members-admin-empty"
              >
                No members yet.
              </p>
            )}
          </ScrollArea>
        )}
      </Card>
    </div>
  );
}

// ─── Plans Tab ────────────────────────────────────────────────────────────────
function PlansAdmin() {
  const { data: plans, isLoading } = useFitnessPlans();
  const { data: assignments } = useAllPlanAssignments();
  const createPlan = useCreateFitnessPlan();
  const deletePlan = useDeleteFitnessPlan();
  const [form, setForm] = useState({
    name: "",
    description: "",
    durationDays: 84,
    price: 4999,
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) {
      toast.error("Plan name required.");
      return;
    }
    try {
      await createPlan.mutateAsync({
        name: form.name,
        description: form.description,
        durationDays: BigInt(form.durationDays),
        price: form.price,
      });
      toast.success("Fitness plan created!");
      setForm({ name: "", description: "", durationDays: 84, price: 4999 });
    } catch {
      toast.error("Failed to create plan.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          label="Active Plans"
          value={plans?.length ?? 0}
          icon={Dumbbell}
          data-ocid="admin-stat-plans"
        />
        <StatsCard
          label="Assignments"
          value={assignments?.length ?? 0}
          icon={Users}
          data-ocid="admin-stat-assignments"
        />
      </div>

      <Card className="bg-card border-border p-5 shadow-subtle">
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Plus size={16} className="text-primary" aria-hidden="true" /> Create
          Fitness Plan
        </h3>
        <form onSubmit={handleCreate} className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label
              htmlFor="plan-name"
              className="text-xs font-body text-muted-foreground"
            >
              Plan Name
            </Label>
            <Input
              id="plan-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="bg-muted border-border text-sm"
              data-ocid="admin-input-plan-name"
            />
          </div>
          <div className="space-y-1.5">
            <Label
              htmlFor="plan-description"
              className="text-xs font-body text-muted-foreground"
            >
              Description
            </Label>
            <Input
              id="plan-description"
              type="text"
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
              className="bg-muted border-border text-sm"
              data-ocid="admin-input-plan-description"
            />
          </div>
          <div className="space-y-1.5">
            <Label
              htmlFor="plan-duration"
              className="text-xs font-body text-muted-foreground"
            >
              Duration (days)
            </Label>
            <Input
              id="plan-duration"
              type="number"
              value={form.durationDays}
              onChange={(e) =>
                setForm((f) => ({ ...f, durationDays: Number(e.target.value) }))
              }
              className="bg-muted border-border text-sm"
              data-ocid="admin-input-plan-duration"
            />
          </div>
          <div className="space-y-1.5">
            <Label
              htmlFor="plan-price"
              className="text-xs font-body text-muted-foreground"
            >
              Price (₹)
            </Label>
            <Input
              id="plan-price"
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm((f) => ({ ...f, price: Number(e.target.value) }))
              }
              className="bg-muted border-border text-sm"
              data-ocid="admin-input-plan-price"
            />
          </div>
          <div className="sm:col-span-2">
            <Button
              type="submit"
              size="sm"
              className="bg-primary text-primary-foreground"
              disabled={createPlan.isPending}
              data-ocid="btn-create-plan"
            >
              {createPlan.isPending ? "Creating..." : "Create Plan"}
            </Button>
          </div>
        </form>
      </Card>

      {isLoading ? (
        <PageLoading />
      ) : (
        <div className="space-y-2">
          {(plans ?? []).map((p) => (
            <div
              key={String(p.id)}
              className="bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4"
              data-ocid={`admin-plan-${p.id}`}
            >
              <div className="min-w-0">
                <div className="font-body font-semibold text-foreground text-sm truncate">
                  {p.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {Number(p.durationDays)} days · ₹{p.price}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  deletePlan
                    .mutateAsync(p.id)
                    .catch(() => toast.error("Failed"))
                }
                className="p-1 text-muted-foreground hover:text-destructive shrink-0"
                aria-label="Delete plan"
                data-ocid={`btn-delete-plan-${p.id}`}
              >
                <Trash2 size={14} aria-hidden="true" />
              </Button>
            </div>
          ))}
          {!plans?.length && (
            <p
              className="text-muted-foreground text-sm font-body text-center py-6"
              data-ocid="plans-admin-empty"
            >
              No plans yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Sessions Tab ─────────────────────────────────────────────────────────────
function SessionsAdmin() {
  const { data: sessions, isLoading } = useSessions();
  const { data: bookings } = useAllBookings();
  const createSession = useCreateSession();
  const deleteSession = useDeleteSession();
  const [form, setForm] = useState({
    title: "",
    description: "",
    startTime: BigInt(Date.now() + 86400000) * BigInt(1_000_000),
    endTime: BigInt(Date.now() + 86400000 + 3600000) * BigInt(1_000_000),
    capacity: 8,
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title) {
      toast.error("Session title required.");
      return;
    }
    try {
      await createSession.mutateAsync({
        title: form.title,
        description: form.description,
        startTime: form.startTime,
        endTime: form.endTime,
        capacity: BigInt(form.capacity),
      });
      toast.success("Session created!");
      setForm((f) => ({ ...f, title: "", description: "" }));
    } catch {
      toast.error("Failed to create session.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          label="Total Sessions"
          value={sessions?.length ?? 0}
          icon={Calendar}
          data-ocid="admin-stat-sessions"
        />
        <StatsCard
          label="Total Bookings"
          value={bookings?.length ?? 0}
          icon={Users}
          data-ocid="admin-stat-bookings"
        />
      </div>

      <Card className="bg-card border-border p-5 shadow-subtle">
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Plus size={16} className="text-primary" aria-hidden="true" /> Create
          Training Session
        </h3>
        <form onSubmit={handleCreate} className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label
              htmlFor="session-title"
              className="text-xs font-body text-muted-foreground"
            >
              Title
            </Label>
            <Input
              id="session-title"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
              className="bg-muted border-border text-sm"
              data-ocid="admin-input-session-title"
            />
          </div>
          <div className="space-y-1.5">
            <Label
              htmlFor="session-capacity"
              className="text-xs font-body text-muted-foreground"
            >
              Capacity
            </Label>
            <Input
              id="session-capacity"
              type="number"
              value={form.capacity}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  capacity: Number(e.target.value),
                }))
              }
              className="bg-muted border-border text-sm"
              data-ocid="admin-input-session-capacity"
            />
          </div>
          <div className="sm:col-span-2 space-y-1.5">
            <Label
              htmlFor="session-desc"
              className="text-xs font-body text-muted-foreground"
            >
              Description
            </Label>
            <Input
              id="session-desc"
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
              className="bg-muted border-border text-sm"
              data-ocid="admin-input-session-desc"
            />
          </div>
          <div className="sm:col-span-2">
            <Button
              type="submit"
              size="sm"
              className="bg-primary text-primary-foreground"
              disabled={createSession.isPending}
              data-ocid="btn-create-session"
            >
              {createSession.isPending ? "Creating..." : "Create Session"}
            </Button>
          </div>
        </form>
      </Card>

      {isLoading ? (
        <PageLoading />
      ) : (
        <div className="space-y-2">
          {(sessions ?? []).map((s) => (
            <div
              key={String(s.id)}
              className="bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4"
              data-ocid={`admin-session-${s.id}`}
            >
              <div className="min-w-0">
                <div className="font-body font-semibold text-foreground text-sm truncate">
                  {s.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {new Date(Number(s.startTime) / 1_000_000).toLocaleString()} ·{" "}
                  {Number(s.bookedCount)}/{Number(s.capacity)} booked
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  deleteSession
                    .mutateAsync(s.id)
                    .catch(() => toast.error("Failed"))
                }
                className="p-1 text-muted-foreground hover:text-destructive shrink-0"
                aria-label="Delete"
                data-ocid={`btn-delete-session-${s.id}`}
              >
                <Trash2 size={14} aria-hidden="true" />
              </Button>
            </div>
          ))}
          {!sessions?.length && (
            <p
              className="text-muted-foreground text-sm font-body text-center py-6"
              data-ocid="sessions-admin-empty"
            >
              No sessions yet.
            </p>
          )}
        </div>
      )}

      {/* Bookings list */}
      {(bookings?.length ?? 0) > 0 && (
        <Card className="bg-card border-border shadow-subtle overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-display font-bold text-foreground flex items-center gap-2">
              <Calendar size={16} className="text-accent" aria-hidden="true" />{" "}
              All Bookings
            </h3>
          </div>
          <ScrollArea className="max-h-64">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Booking ID
                  </th>
                  <th className="text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Member
                  </th>
                  <th className="text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Session
                  </th>
                  <th className="text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {(bookings ?? []).map((b) => (
                  <tr
                    key={String(b.id)}
                    className="border-b border-border/50"
                    data-ocid={`admin-booking-${b.id}`}
                  >
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground truncate max-w-[120px]">
                      {String(b.id)}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground truncate max-w-[120px]">
                      {String(b.memberId)}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground truncate max-w-[120px]">
                      {String(b.sessionId)}
                    </td>
                    <td className="px-4 py-2.5">
                      <Badge
                        className={
                          b.status === "confirmed"
                            ? "bg-primary/15 text-primary border-primary/30 text-xs"
                            : "bg-destructive/15 text-destructive border-destructive/30 text-xs"
                        }
                      >
                        {b.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </Card>
      )}
    </div>
  );
}

// ─── Gallery & Stories Tab ────────────────────────────────────────────────────
function GalleryAdmin() {
  const { data: testimonials, isLoading: testLoading } = useTestimonials();
  const createTestimonial = useCreateTestimonial();
  const deleteTestimonial = useDeleteTestimonial();

  const [testForm, setTestForm] = useState({
    clientName: "",
    content: "",
    rating: 5,
  });

  const handleCreateTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testForm.clientName || !testForm.content) {
      toast.error("Client name and content required.");
      return;
    }
    try {
      await createTestimonial.mutateAsync({
        clientName: testForm.clientName,
        content: testForm.content,
        rating: BigInt(testForm.rating),
      });
      toast.success("Testimonial added!");
      setTestForm({ clientName: "", content: "", rating: 5 });
    } catch {
      toast.error("Failed to add testimonial.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Testimonials section */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-foreground text-lg border-b border-border pb-2">
          Testimonials
        </h3>
        <Card className="bg-card border-border p-5 shadow-subtle">
          <h4 className="font-body font-semibold text-foreground mb-4 flex items-center gap-2">
            <Plus size={15} className="text-primary" aria-hidden="true" /> Add
            Testimonial
          </h4>
          <form
            onSubmit={handleCreateTestimonial}
            className="grid sm:grid-cols-2 gap-4"
          >
            <div className="space-y-1.5">
              <Label
                htmlFor="test-name"
                className="text-xs font-body text-muted-foreground"
              >
                Client Name
              </Label>
              <Input
                id="test-name"
                value={testForm.clientName}
                onChange={(e) =>
                  setTestForm((f) => ({ ...f, clientName: e.target.value }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-test-name"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="test-rating"
                className="text-xs font-body text-muted-foreground"
              >
                Rating (1–5)
              </Label>
              <Input
                id="test-rating"
                type="number"
                min={1}
                max={5}
                value={testForm.rating}
                onChange={(e) =>
                  setTestForm((f) => ({ ...f, rating: Number(e.target.value) }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-test-rating"
              />
            </div>
            <div className="sm:col-span-2 space-y-1.5">
              <Label
                htmlFor="test-content"
                className="text-xs font-body text-muted-foreground"
              >
                Content
              </Label>
              <Input
                id="test-content"
                value={testForm.content}
                onChange={(e) =>
                  setTestForm((f) => ({ ...f, content: e.target.value }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-test-content"
              />
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                size="sm"
                className="bg-primary text-primary-foreground"
                disabled={createTestimonial.isPending}
                data-ocid="btn-add-testimonial"
              >
                {createTestimonial.isPending ? "Adding..." : "Add Testimonial"}
              </Button>
            </div>
          </form>
        </Card>

        {testLoading ? (
          <PageLoading />
        ) : (
          <div className="space-y-2">
            {(testimonials ?? []).map((t) => (
              <div
                key={String(t.id)}
                className="bg-card border border-border rounded-lg px-4 py-3 flex items-start justify-between gap-4"
                data-ocid={`admin-testimonial-${t.id}`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-body font-semibold text-foreground text-sm">
                      {t.clientName}
                    </span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: Number(t.rating) }).map((_, j) => (
                        <Star
                          key={`star-${t.id}-${j}`}
                          size={10}
                          className="fill-accent text-accent"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {t.content}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    deleteTestimonial
                      .mutateAsync(t.id)
                      .catch(() => toast.error("Failed"))
                  }
                  className="p-1 text-muted-foreground hover:text-destructive shrink-0"
                  aria-label="Delete"
                  data-ocid={`btn-delete-testimonial-${t.id}`}
                >
                  <Trash2 size={14} aria-hidden="true" />
                </Button>
              </div>
            ))}
            {!testimonials?.length && (
              <p
                className="text-muted-foreground text-sm font-body text-center py-6"
                data-ocid="testimonials-admin-empty"
              >
                No testimonials yet.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Nutrition Tab ────────────────────────────────────────────────────────────
function NutritionAdmin() {
  const { data: mealPlans, isLoading: mpLoading } = useMealPlans();
  const createMealPlan = useCreateMealPlan();
  const deleteMealPlan = useDeleteMealPlan();

  const [mpForm, setMpForm] = useState({
    name: "",
    description: "",
    goalType: GoalType.weightLoss,
    dailyCalories: 2000,
    proteinGrams: 150,
    carbsGrams: 220,
    fatGrams: 65,
  });

  const handleCreateMP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mpForm.name) {
      toast.error("Plan name required.");
      return;
    }
    try {
      await createMealPlan.mutateAsync({
        name: mpForm.name,
        description: mpForm.description,
        goalType: mpForm.goalType,
        dailyCalories: BigInt(mpForm.dailyCalories),
        proteinGrams: BigInt(mpForm.proteinGrams),
        carbsGrams: BigInt(mpForm.carbsGrams),
        fatGrams: BigInt(mpForm.fatGrams),
      });
      toast.success("Meal plan created!");
      setMpForm({
        name: "",
        description: "",
        goalType: GoalType.weightLoss,
        dailyCalories: 2000,
        proteinGrams: 150,
        carbsGrams: 220,
        fatGrams: 65,
      });
    } catch {
      toast.error("Failed to create meal plan.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Meal Plans section */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-foreground text-lg border-b border-border pb-2">
          Meal Plans
        </h3>
        <Card className="bg-card border-border p-5 shadow-subtle">
          <h4 className="font-body font-semibold text-foreground mb-4 flex items-center gap-2">
            <Plus size={15} className="text-primary" aria-hidden="true" />{" "}
            Create Meal Plan
          </h4>
          <form onSubmit={handleCreateMP} className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="mp-name"
                className="text-xs font-body text-muted-foreground"
              >
                Plan Name
              </Label>
              <Input
                id="mp-name"
                value={mpForm.name}
                onChange={(e) =>
                  setMpForm((f) => ({ ...f, name: e.target.value }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-mp-name"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="mp-goal"
                className="text-xs font-body text-muted-foreground"
              >
                Goal Type
              </Label>
              <select
                id="mp-goal"
                value={mpForm.goalType}
                onChange={(e) =>
                  setMpForm((f) => ({
                    ...f,
                    goalType: e.target.value as GoalType,
                  }))
                }
                className="w-full h-9 rounded-md border border-border bg-muted px-3 text-sm text-foreground"
                data-ocid="admin-input-mp-goal"
              >
                <option value={GoalType.weightLoss}>Weight Loss</option>
                <option value={GoalType.muscleGain}>Muscle Gain</option>
                <option value={GoalType.maintenance}>Maintenance</option>
                <option value={GoalType.endurance}>Endurance</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="mp-calories"
                className="text-xs font-body text-muted-foreground"
              >
                Daily Calories
              </Label>
              <Input
                id="mp-calories"
                type="number"
                value={mpForm.dailyCalories}
                onChange={(e) =>
                  setMpForm((f) => ({
                    ...f,
                    dailyCalories: Number(e.target.value),
                  }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-mp-calories"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="mp-protein"
                className="text-xs font-body text-muted-foreground"
              >
                Protein (g)
              </Label>
              <Input
                id="mp-protein"
                type="number"
                value={mpForm.proteinGrams}
                onChange={(e) =>
                  setMpForm((f) => ({
                    ...f,
                    proteinGrams: Number(e.target.value),
                  }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-mp-protein"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="mp-carbs"
                className="text-xs font-body text-muted-foreground"
              >
                Carbs (g)
              </Label>
              <Input
                id="mp-carbs"
                type="number"
                value={mpForm.carbsGrams}
                onChange={(e) =>
                  setMpForm((f) => ({
                    ...f,
                    carbsGrams: Number(e.target.value),
                  }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-mp-carbs"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="mp-fat"
                className="text-xs font-body text-muted-foreground"
              >
                Fat (g)
              </Label>
              <Input
                id="mp-fat"
                type="number"
                value={mpForm.fatGrams}
                onChange={(e) =>
                  setMpForm((f) => ({
                    ...f,
                    fatGrams: Number(e.target.value),
                  }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-mp-fat"
              />
            </div>
            <div className="sm:col-span-2 space-y-1.5">
              <Label
                htmlFor="mp-desc"
                className="text-xs font-body text-muted-foreground"
              >
                Description
              </Label>
              <Input
                id="mp-desc"
                value={mpForm.description}
                onChange={(e) =>
                  setMpForm((f) => ({ ...f, description: e.target.value }))
                }
                className="bg-muted border-border text-sm"
                data-ocid="admin-input-mp-desc"
              />
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                size="sm"
                className="bg-primary text-primary-foreground"
                disabled={createMealPlan.isPending}
                data-ocid="btn-create-meal-plan"
              >
                {createMealPlan.isPending ? "Creating..." : "Create Meal Plan"}
              </Button>
            </div>
          </form>
        </Card>

        {mpLoading ? (
          <PageLoading />
        ) : (
          <div className="space-y-2">
            {(mealPlans ?? []).map((m) => (
              <div
                key={String(m.id)}
                className="bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4"
                data-ocid={`admin-mealplan-${m.id}`}
              >
                <div className="min-w-0">
                  <div className="font-body font-semibold text-foreground text-sm truncate">
                    {m.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {m.goalType} · {Number(m.dailyCalories)}kcal · P:
                    {Number(m.proteinGrams)}g C:{Number(m.carbsGrams)}g F:
                    {Number(m.fatGrams)}g
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    deleteMealPlan
                      .mutateAsync(m.id)
                      .catch(() => toast.error("Failed"))
                  }
                  className="p-1 text-muted-foreground hover:text-destructive shrink-0"
                  aria-label="Delete"
                  data-ocid={`btn-delete-mealplan-${m.id}`}
                >
                  <Trash2 size={14} aria-hidden="true" />
                </Button>
              </div>
            ))}
            {!mealPlans?.length && (
              <p
                className="text-muted-foreground text-sm font-body text-center py-6"
                data-ocid="mealplans-admin-empty"
              >
                No meal plans yet.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Admin Page ──────────────────────────────────────────────────────────
export default function AdminPage() {
  const { data: sessions } = useSessions();
  const { data: plans } = useFitnessPlans();
  const { data: mealPlans } = useMealPlans();
  const { data: members } = useAllMembers();
  const { data: bookings } = useAllBookings();

  const adminTabs = [
    {
      value: "members",
      label: "Members",
      icon: Users,
      component: <MembersAdmin />,
    },
    {
      value: "plans",
      label: "Plans",
      icon: Dumbbell,
      component: <PlansAdmin />,
    },
    {
      value: "sessions",
      label: "Sessions",
      icon: Calendar,
      component: <SessionsAdmin />,
    },
    {
      value: "gallery",
      label: "Gallery & Stories",
      icon: BarChart2,
      component: <GalleryAdmin />,
    },
    {
      value: "nutrition",
      label: "Nutrition",
      icon: BookOpen,
      component: <NutritionAdmin />,
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-card border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Shield size={20} className="text-accent" aria-hidden="true" />
            </div>
            <div>
              <Badge className="mb-1 bg-accent/15 text-accent border-accent/30 text-xs tracking-widest uppercase">
                Admin
              </Badge>
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                ADMIN DASHBOARD
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            label="Members"
            value={members?.length ?? 0}
            icon={Users}
            data-ocid="admin-overview-members"
          />
          <StatsCard
            label="Active Plans"
            value={plans?.length ?? 0}
            icon={Dumbbell}
            data-ocid="admin-overview-plans"
          />
          <StatsCard
            label="Sessions"
            value={sessions?.length ?? 0}
            icon={Calendar}
            data-ocid="admin-overview-sessions"
          />
          <StatsCard
            label="Meal Plans"
            value={mealPlans?.length ?? 0}
            icon={BookOpen}
            data-ocid="admin-overview-mealplans"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            label="Bookings"
            value={bookings?.length ?? 0}
            icon={Calendar}
            iconColor="text-accent"
            data-ocid="admin-overview-bookings"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="members" className="space-y-5">
          <TabsList
            className="bg-card border border-border flex-wrap h-auto gap-1 p-1"
            data-ocid="admin-tabs"
          >
            {adminTabs.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="gap-1.5 text-xs"
                data-ocid={`admin-tab-${value}`}
              >
                <Icon size={13} aria-hidden="true" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {adminTabs.map(({ value, component }) => (
            <TabsContent key={value} value={value}>
              {component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
}
