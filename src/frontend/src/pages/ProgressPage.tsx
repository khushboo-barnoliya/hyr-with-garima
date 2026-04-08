import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  CheckCircle,
  Dumbbell,
  Plus,
  Ruler,
  Save,
  Trash2,
  TrendingDown,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { PageLoading } from "../components/LoadingSpinner";
import { StatsCard } from "../components/StatsCard";
import {
  useDeleteMeasurement,
  useFitnessPlans,
  useLogMeasurement,
  useMyMeasurements,
  useMyPlans,
} from "../hooks/useBackend";
import type { BodyMeasurement } from "../types";

const DEMO_MEASUREMENTS: BodyMeasurement[] = [
  {
    id: BigInt(1),
    memberId: {} as BodyMeasurement["memberId"],
    date: BigInt(Date.now() - 56 * 86400000) * BigInt(1_000_000),
    weightKg: 88,
    waistCm: 98,
    chestCm: 104,
    armsCm: 38,
    hipsCm: 102,
    legsCm: 58,
    notes: "Starting measurements",
    loggedAt: BigInt(0),
  },
  {
    id: BigInt(2),
    memberId: {} as BodyMeasurement["memberId"],
    date: BigInt(Date.now() - 42 * 86400000) * BigInt(1_000_000),
    weightKg: 85,
    waistCm: 95,
    chestCm: 105,
    armsCm: 39,
    hipsCm: 100,
    legsCm: 59,
    notes: "Week 2 check-in",
    loggedAt: BigInt(0),
  },
  {
    id: BigInt(3),
    memberId: {} as BodyMeasurement["memberId"],
    date: BigInt(Date.now() - 28 * 86400000) * BigInt(1_000_000),
    weightKg: 82,
    waistCm: 91,
    chestCm: 106,
    armsCm: 40,
    hipsCm: 98,
    legsCm: 60,
    notes: "Good progress",
    loggedAt: BigInt(0),
  },
  {
    id: BigInt(4),
    memberId: {} as BodyMeasurement["memberId"],
    date: BigInt(Date.now() - 14 * 86400000) * BigInt(1_000_000),
    weightKg: 80,
    waistCm: 88,
    chestCm: 107,
    armsCm: 41,
    hipsCm: 96,
    legsCm: 61,
    notes: "Feeling great",
    loggedAt: BigInt(0),
  },
  {
    id: BigInt(5),
    memberId: {} as BodyMeasurement["memberId"],
    date: BigInt(Date.now() - 1 * 86400000) * BigInt(1_000_000),
    weightKg: 78,
    waistCm: 85,
    chestCm: 108,
    armsCm: 42,
    hipsCm: 94,
    legsCm: 62,
    notes: "Latest measurement",
    loggedAt: BigInt(0),
  },
];

function toChartData(measurements: BodyMeasurement[]) {
  return [...measurements]
    .sort((a, b) => Number(a.date) - Number(b.date))
    .map((m) => ({
      date: new Date(Number(m.date) / 1_000_000).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
      }),
      weight: m.weightKg,
      waist: m.waistCm,
      arms: m.armsCm,
    }));
}

function toLatestBarData(m: BodyMeasurement) {
  return [
    { name: "Weight (kg)", value: m.weightKg, color: "oklch(0.68 0.22 185)" },
    { name: "Waist (cm)", value: m.waistCm, color: "oklch(0.72 0.25 55)" },
    { name: "Chest (cm)", value: m.chestCm, color: "oklch(0.65 0.18 145)" },
    { name: "Arms (cm)", value: m.armsCm, color: "oklch(0.78 0.2 25)" },
    { name: "Hips (cm)", value: m.hipsCm, color: "oklch(0.62 0.2 265)" },
    { name: "Legs (cm)", value: m.legsCm, color: "oklch(0.75 0.2 160)" },
  ];
}

const INITIAL_FORM = {
  date: BigInt(Date.now()) * BigInt(1_000_000),
  weightKg: 0,
  waistCm: 0,
  chestCm: 0,
  armsCm: 0,
  hipsCm: 0,
  legsCm: 0,
  notes: "",
};

export default function ProgressPage() {
  const { data: measurements, isLoading } = useMyMeasurements();
  const logMeasurement = useLogMeasurement();
  const deleteMeasurement = useDeleteMeasurement();
  const { data: myPlans } = useMyPlans();
  const { data: fitnessPlans } = useFitnessPlans();
  const [form, setForm] = useState(INITIAL_FORM);

  const displayData = measurements?.length ? measurements : DEMO_MEASUREMENTS;
  const latest = displayData[displayData.length - 1];
  const first = displayData[0];
  const chartData = toChartData(displayData);
  const barData = latest ? toLatestBarData(latest) : [];

  const weightChange =
    latest && first ? (latest.weightKg - first.weightKg).toFixed(1) : null;
  const waistChange =
    latest && first ? (latest.waistCm - first.waistCm).toFixed(1) : null;

  // Correlate plan assignments with fitness plan details
  const planDetails = myPlans?.map((assignment) => ({
    assignment,
    plan: fitnessPlans?.find((p) => p.id === assignment.planId) ?? null,
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logMeasurement.mutateAsync({
        ...form,
        date: BigInt(Date.now()) * BigInt(1_000_000),
      });
      toast.success("Measurements logged!");
      setForm(INITIAL_FORM);
    } catch {
      toast.error("Failed to log measurements.");
    }
  };

  const handleDelete = async (id: bigint) => {
    try {
      await deleteMeasurement.mutateAsync(id);
      toast.success("Measurement deleted.");
    } catch {
      toast.error("Failed to delete.");
    }
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
              Member Portal
            </Badge>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              YOUR PROGRESS JOURNEY
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-xl">
              Track your measurements weekly and watch your transformation
              unfold in real-time.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Summary Stats */}
        {latest && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              label="Current Weight"
              value={latest.weightKg}
              unit="kg"
              delta={weightChange ? `${weightChange}kg overall` : undefined}
              deltaPositive={
                weightChange ? Number(weightChange) < 0 : undefined
              }
              icon={TrendingDown}
              data-ocid="stat-weight"
            />
            <StatsCard
              label="Waist"
              value={latest.waistCm}
              unit="cm"
              delta={waistChange ? `${waistChange}cm overall` : undefined}
              deltaPositive={waistChange ? Number(waistChange) < 0 : undefined}
              icon={TrendingDown}
              data-ocid="stat-waist"
            />
            <StatsCard
              label="Arms"
              value={latest.armsCm}
              unit="cm"
              icon={Dumbbell}
              data-ocid="stat-arms"
            />
            <StatsCard
              label="Active Plans"
              value={myPlans?.length ?? 0}
              icon={Ruler}
              data-ocid="stat-plans"
            />
          </div>
        )}

        <Tabs defaultValue="charts" className="space-y-6">
          <TabsList
            className="bg-card border border-border"
            data-ocid="progress-tabs"
          >
            <TabsTrigger
              value="charts"
              className="gap-1.5"
              data-ocid="tab-charts"
            >
              <TrendingDown size={15} aria-hidden="true" /> Progress Charts
            </TabsTrigger>
            <TabsTrigger value="log" className="gap-1.5" data-ocid="tab-log">
              <Plus size={15} aria-hidden="true" /> Log Measurements
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="gap-1.5"
              data-ocid="tab-history"
            >
              <Ruler size={15} aria-hidden="true" /> History
            </TabsTrigger>
            <TabsTrigger
              value="plans"
              className="gap-1.5"
              data-ocid="tab-my-plans"
            >
              <Dumbbell size={15} aria-hidden="true" /> My Plans
            </TabsTrigger>
          </TabsList>

          {/* Charts */}
          <TabsContent value="charts" className="space-y-6">
            {isLoading ? (
              <PageLoading label="Loading your progress..." />
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Weight & Waist Line Chart */}
                  <Card className="bg-card border-border p-6 shadow-subtle">
                    <h3 className="font-display font-bold text-foreground mb-4">
                      Weight &amp; Waist Trend
                    </h3>
                    <ResponsiveContainer width="100%" height={220}>
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient
                            id="weightGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="oklch(0.68 0.22 185)"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="oklch(0.68 0.22 185)"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="waistGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="oklch(0.72 0.25 55)"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="oklch(0.72 0.25 55)"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="oklch(0.28 0.015 280)"
                        />
                        <XAxis
                          dataKey="date"
                          tick={{ fontSize: 11, fill: "oklch(0.55 0.01 280)" }}
                        />
                        <YAxis
                          tick={{ fontSize: 11, fill: "oklch(0.55 0.01 280)" }}
                        />
                        <Tooltip
                          contentStyle={{
                            background: "oklch(0.18 0.01 280)",
                            border: "1px solid oklch(0.28 0.015 280)",
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                        />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="weight"
                          name="Weight (kg)"
                          stroke="oklch(0.68 0.22 185)"
                          fill="url(#weightGrad)"
                          strokeWidth={2}
                        />
                        <Area
                          type="monotone"
                          dataKey="waist"
                          name="Waist (cm)"
                          stroke="oklch(0.72 0.25 55)"
                          fill="url(#waistGrad)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Card>

                  {/* Arms Progress */}
                  <Card className="bg-card border-border p-6 shadow-subtle">
                    <h3 className="font-display font-bold text-foreground mb-4">
                      Arms Growth
                    </h3>
                    <ResponsiveContainer width="100%" height={220}>
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient
                            id="armsGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="oklch(0.68 0.22 185)"
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="95%"
                              stopColor="oklch(0.72 0.25 55)"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="oklch(0.28 0.015 280)"
                        />
                        <XAxis
                          dataKey="date"
                          tick={{ fontSize: 11, fill: "oklch(0.55 0.01 280)" }}
                        />
                        <YAxis
                          tick={{ fontSize: 11, fill: "oklch(0.55 0.01 280)" }}
                        />
                        <Tooltip
                          contentStyle={{
                            background: "oklch(0.18 0.01 280)",
                            border: "1px solid oklch(0.28 0.015 280)",
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="arms"
                          name="Arms (cm)"
                          stroke="oklch(0.68 0.22 185)"
                          fill="url(#armsGrad)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Card>
                </div>

                {/* Latest Measurement Breakdown Bar Chart */}
                {latest && (
                  <Card className="bg-card border-border p-6 shadow-subtle">
                    <h3 className="font-display font-bold text-foreground mb-1">
                      Latest Measurement Breakdown
                    </h3>
                    <p className="text-xs text-muted-foreground font-body mb-4">
                      Snapshot of your most recent body composition metrics
                    </p>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart
                        data={barData}
                        margin={{ top: 4, right: 16, left: 0, bottom: 4 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="oklch(0.28 0.015 280)"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="name"
                          tick={{ fontSize: 10, fill: "oklch(0.55 0.01 280)" }}
                        />
                        <YAxis
                          tick={{ fontSize: 10, fill: "oklch(0.55 0.01 280)" }}
                        />
                        <Tooltip
                          contentStyle={{
                            background: "oklch(0.18 0.01 280)",
                            border: "1px solid oklch(0.28 0.015 280)",
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                        />
                        <Bar dataKey="value" name="Value" radius={[4, 4, 0, 0]}>
                          {barData.map((entry) => (
                            <Cell key={entry.name} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>
                )}
              </div>
            )}
          </TabsContent>

          {/* Log Form */}
          <TabsContent value="log">
            <Card className="bg-card border-border p-6 shadow-subtle max-w-2xl">
              <h3 className="font-display font-bold text-foreground mb-5 flex items-center gap-2">
                <Plus size={18} className="text-primary" aria-hidden="true" />
                Log Weekly Measurements
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {(
                    [
                      {
                        id: "weightKg",
                        label: "Weight (kg)",
                        field: "weightKg",
                      },
                      { id: "waistCm", label: "Waist (cm)", field: "waistCm" },
                      { id: "chestCm", label: "Chest (cm)", field: "chestCm" },
                      { id: "armsCm", label: "Arms (cm)", field: "armsCm" },
                      { id: "hipsCm", label: "Hips (cm)", field: "hipsCm" },
                      { id: "legsCm", label: "Legs (cm)", field: "legsCm" },
                    ] as const
                  ).map(({ id, label, field }) => (
                    <div key={id} className="space-y-1.5">
                      <Label
                        htmlFor={id}
                        className="text-sm font-body text-muted-foreground"
                      >
                        {label}
                      </Label>
                      <Input
                        id={id}
                        type="number"
                        min={0}
                        step="0.1"
                        value={form[field] || ""}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            [field]: Number(e.target.value),
                          }))
                        }
                        className="bg-muted border-border"
                        data-ocid={`input-${id}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="notes"
                    className="text-sm font-body text-muted-foreground"
                  >
                    Notes (optional)
                  </Label>
                  <Input
                    id="notes"
                    type="text"
                    placeholder="How are you feeling this week?"
                    value={form.notes}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, notes: e.target.value }))
                    }
                    className="bg-muted border-border"
                    data-ocid="input-notes"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={logMeasurement.isPending}
                  data-ocid="btn-log-measurement"
                >
                  <Save size={15} className="mr-1.5" aria-hidden="true" />
                  {logMeasurement.isPending ? "Saving..." : "Save Measurements"}
                </Button>
              </form>
            </Card>
          </TabsContent>

          {/* History */}
          <TabsContent value="history">
            {isLoading ? (
              <PageLoading label="Loading history..." />
            ) : displayData.length === 0 ? (
              <div
                className="text-center py-16 text-muted-foreground"
                data-ocid="history-empty"
              >
                <Ruler
                  size={48}
                  className="mx-auto mb-4 opacity-30"
                  aria-hidden="true"
                />
                <p className="font-body">
                  No measurements yet. Start logging to see your journey!
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      {[
                        "Date",
                        "Weight (kg)",
                        "Waist (cm)",
                        "Chest (cm)",
                        "Arms (cm)",
                        "Hips (cm)",
                        "Legs (cm)",
                        "Notes",
                        "",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left pb-3 px-2 font-body font-medium text-muted-foreground text-xs uppercase tracking-wide"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[...displayData].reverse().map((m, i) => (
                      <motion.tr
                        key={String(m.id)}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="border-b border-border/50 hover:bg-muted/20 transition-smooth"
                        data-ocid={`measurement-row-${m.id}`}
                      >
                        <td className="py-3 px-2 font-body text-xs text-muted-foreground whitespace-nowrap">
                          {new Date(
                            Number(m.date) / 1_000_000,
                          ).toLocaleDateString("en-IN", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="py-3 px-2 font-mono font-bold text-foreground text-right">
                          {m.weightKg}
                        </td>
                        <td className="py-3 px-2 font-mono text-muted-foreground text-right">
                          {m.waistCm}
                        </td>
                        <td className="py-3 px-2 font-mono text-muted-foreground text-right">
                          {m.chestCm}
                        </td>
                        <td className="py-3 px-2 font-mono font-bold text-primary text-right">
                          {m.armsCm}
                        </td>
                        <td className="py-3 px-2 font-mono text-muted-foreground text-right">
                          {m.hipsCm}
                        </td>
                        <td className="py-3 px-2 font-mono text-muted-foreground text-right">
                          {m.legsCm}
                        </td>
                        <td className="py-3 px-2 font-body text-xs text-muted-foreground italic max-w-[140px] truncate">
                          {m.notes}
                        </td>
                        <td className="py-3 px-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(m.id)}
                            disabled={deleteMeasurement.isPending}
                            className="text-muted-foreground hover:text-destructive p-1 h-auto"
                            aria-label="Delete measurement"
                            data-ocid={`btn-delete-measurement-${m.id}`}
                          >
                            <Trash2 size={14} aria-hidden="true" />
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>

          {/* My Plans */}
          <TabsContent value="plans">
            {!myPlans?.length ? (
              <div
                className="text-center py-20 text-muted-foreground"
                data-ocid="my-plans-empty"
              >
                <Dumbbell
                  size={52}
                  className="mx-auto mb-5 opacity-30"
                  aria-hidden="true"
                />
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  No active plans
                </h3>
                <p className="font-body text-sm">
                  Contact Garima to get a fitness plan assigned to your profile.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {planDetails?.map(({ assignment, plan }, i) => (
                  <motion.div
                    key={String(assignment.planId)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    data-ocid={`plan-card-${assignment.planId}`}
                  >
                    <Card className="bg-card border-border p-5 shadow-subtle hover:shadow-elevated transition-smooth h-full flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Dumbbell
                            size={20}
                            className="text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        <Badge className="bg-primary/15 text-primary border-primary/30 text-xs">
                          Active
                        </Badge>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display font-bold text-foreground mb-1">
                          {plan?.name ?? "Fitness Plan"}
                        </h3>
                        <p className="text-sm text-muted-foreground font-body line-clamp-2">
                          {plan?.description ??
                            "Your personalized fitness program."}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                        {plan && (
                          <div className="flex items-center gap-1.5">
                            <Calendar size={12} aria-hidden="true" />
                            <span>{Number(plan.durationDays)} days</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} aria-hidden="true" />
                          <span>
                            Started{" "}
                            {new Date(
                              Number(assignment.assignedAt) / 1_000_000,
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        {assignment.expiresAt &&
                          assignment.expiresAt > BigInt(0) && (
                            <div className="flex items-center gap-1.5 text-accent">
                              <Calendar size={12} aria-hidden="true" />
                              <span>
                                Expires{" "}
                                {new Date(
                                  Number(assignment.expiresAt) / 1_000_000,
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          )}
                        {plan && (
                          <div className="flex items-center gap-1.5">
                            <CheckCircle size={12} aria-hidden="true" />
                            <span>₹{plan.price}</span>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
