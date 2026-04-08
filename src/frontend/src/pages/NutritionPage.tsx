import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart2,
  BookOpen,
  Download,
  Plus,
  Save,
  Utensils,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { GoalType } from "../backend";
import { Layout } from "../components/Layout";
import { PageLoading } from "../components/LoadingSpinner";
import { MacroProgressBar } from "../components/MacroProgressBar";
import {
  useLogMacros,
  useMyMacroLogs,
  useMyMealPlan,
  useRecipeGuides,
} from "../hooks/useBackend";

const DEMO_GUIDES = [
  {
    id: "1",
    title: "High-Protein Meal Prep Guide",
    description:
      "30 recipes for hitting your protein goals. Perfect for muscle gain phase.",
    goalType: GoalType.muscleGain,
    filename: "high-protein-guide.pdf",
    file: { getDirectURL: () => "#" },
  },
  {
    id: "2",
    title: "Low-Carb Fat Loss Cookbook",
    description:
      "Delicious keto-friendly meals that keep you satiated while burning fat.",
    goalType: GoalType.weightLoss,
    filename: "low-carb-cookbook.pdf",
    file: { getDirectURL: () => "#" },
  },
  {
    id: "3",
    title: "Plant-Based Power Nutrition",
    description:
      "Complete plant-based guide with full amino acid profile coverage.",
    goalType: GoalType.maintenance,
    filename: "plant-based-guide.pdf",
    file: { getDirectURL: () => "#" },
  },
  {
    id: "4",
    title: "Endurance Athlete Fuel Guide",
    description:
      "Carb-cycling and periodization for endurance performance and recovery.",
    goalType: GoalType.endurance,
    filename: "endurance-fuel.pdf",
    file: { getDirectURL: () => "#" },
  },
];

const DEMO_MEAL_PLAN = {
  id: BigInt(1),
  name: "Lean Bulk Protocol",
  description:
    "Designed to build lean muscle while minimizing fat gain. High protein, moderate carbs.",
  dailyCalories: BigInt(2800),
  proteinGrams: BigInt(180),
  carbsGrams: BigInt(320),
  fatGrams: BigInt(75),
  goalType: GoalType.muscleGain,
  createdAt: BigInt(0),
};

export default function NutritionPage() {
  const { data: mealPlan, isLoading: planLoading } = useMyMealPlan();
  const { data: macroLogs, isLoading: logsLoading } = useMyMacroLogs();
  const { data: guides, isLoading: guidesLoading } = useRecipeGuides();
  const logMacros = useLogMacros();

  const [macroForm, setMacroForm] = useState({
    date: BigInt(Date.now()) * BigInt(1_000_000),
    calories: BigInt(0),
    proteinGrams: BigInt(0),
    carbsGrams: BigInt(0),
    fatGrams: BigInt(0),
    notes: "",
  });

  const displayPlan = mealPlan ?? DEMO_MEAL_PLAN;
  const displayGuides = guides?.length ? guides : DEMO_GUIDES;
  const todayLog = macroLogs?.[0];

  const handleLogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logMacros.mutateAsync({
        ...macroForm,
        date: BigInt(Date.now()) * BigInt(1_000_000),
      });
      toast.success("Macros logged successfully!");
      setMacroForm({
        date: BigInt(0),
        calories: BigInt(0),
        proteinGrams: BigInt(0),
        carbsGrams: BigInt(0),
        fatGrams: BigInt(0),
        notes: "",
      });
    } catch {
      toast.error("Failed to log macros. Please try again.");
    }
  };

  const goalTypeLabel = (gt: GoalType) => {
    const labels: Record<GoalType, string> = {
      [GoalType.weightLoss]: "Weight Loss",
      [GoalType.muscleGain]: "Muscle Gain",
      [GoalType.maintenance]: "Maintenance",
      [GoalType.endurance]: "Endurance",
    };
    return labels[gt] ?? gt;
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
            <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs tracking-widest uppercase">
              Nutrition Hub
            </Badge>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              YOUR NUTRITION COMMAND CENTER
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-xl">
              Your custom meal plan, macro tracker, and recipe guides — all in
              one place.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <Tabs defaultValue="plan" className="space-y-6">
          <TabsList
            className="bg-card border border-border"
            data-ocid="nutrition-tabs"
          >
            <TabsTrigger
              value="plan"
              className="gap-1.5"
              data-ocid="tab-meal-plan"
            >
              <Utensils size={15} aria-hidden="true" /> Meal Plan
            </TabsTrigger>
            <TabsTrigger
              value="macros"
              className="gap-1.5"
              data-ocid="tab-macros"
            >
              <BarChart2 size={15} aria-hidden="true" /> Track Macros
            </TabsTrigger>
            <TabsTrigger
              value="guides"
              className="gap-1.5"
              data-ocid="tab-recipes"
            >
              <BookOpen size={15} aria-hidden="true" /> Recipe Guides
            </TabsTrigger>
          </TabsList>

          {/* Meal Plan Tab */}
          <TabsContent value="plan" className="space-y-6">
            {planLoading ? (
              <PageLoading label="Loading your meal plan..." />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="bg-card border-border p-6 shadow-subtle">
                  <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
                    <div>
                      <Badge className="mb-2 bg-accent/15 text-accent border-accent/30 text-xs">
                        {goalTypeLabel(displayPlan.goalType)}
                      </Badge>
                      <h2 className="font-display font-bold text-xl text-foreground">
                        {displayPlan.name}
                      </h2>
                      <p className="text-sm text-muted-foreground font-body mt-1 max-w-lg">
                        {displayPlan.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-display font-bold text-primary">
                        {Number(displayPlan.dailyCalories)}
                      </div>
                      <div className="text-xs text-muted-foreground font-body">
                        kcal / day
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <MacroProgressBar
                      label="Protein"
                      value={Number(todayLog?.proteinGrams ?? 0)}
                      target={Number(displayPlan.proteinGrams)}
                      colorClass="bg-primary"
                    />
                    <MacroProgressBar
                      label="Carbs"
                      value={Number(todayLog?.carbsGrams ?? 0)}
                      target={Number(displayPlan.carbsGrams)}
                      colorClass="bg-accent"
                    />
                    <MacroProgressBar
                      label="Fats"
                      value={Number(todayLog?.fatGrams ?? 0)}
                      target={Number(displayPlan.fatGrams)}
                      colorClass="bg-chart-3"
                    />
                  </div>

                  {!todayLog && (
                    <p className="text-xs text-muted-foreground font-body mt-4 text-center">
                      Log today&apos;s macros to see your progress
                    </p>
                  )}
                </Card>
              </motion.div>
            )}
          </TabsContent>

          {/* Macro Tracker Tab */}
          <TabsContent value="macros" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Log Form */}
              <Card className="bg-card border-border p-6 shadow-subtle">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Plus size={18} className="text-primary" aria-hidden="true" />
                  Log Today&apos;s Macros
                </h3>
                <form onSubmit={handleLogSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="calories"
                        className="text-sm font-body text-muted-foreground"
                      >
                        Calories (kcal)
                      </Label>
                      <Input
                        id="calories"
                        type="number"
                        min={0}
                        value={Number(macroForm.calories) || ""}
                        onChange={(e) =>
                          setMacroForm((f) => ({
                            ...f,
                            calories: BigInt(e.target.value || "0"),
                          }))
                        }
                        className="bg-muted border-border"
                        data-ocid="input-calories"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="protein"
                        className="text-sm font-body text-muted-foreground"
                      >
                        Protein (g)
                      </Label>
                      <Input
                        id="protein"
                        type="number"
                        min={0}
                        value={Number(macroForm.proteinGrams) || ""}
                        onChange={(e) =>
                          setMacroForm((f) => ({
                            ...f,
                            proteinGrams: BigInt(e.target.value || "0"),
                          }))
                        }
                        className="bg-muted border-border"
                        data-ocid="input-protein"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="carbs"
                        className="text-sm font-body text-muted-foreground"
                      >
                        Carbs (g)
                      </Label>
                      <Input
                        id="carbs"
                        type="number"
                        min={0}
                        value={Number(macroForm.carbsGrams) || ""}
                        onChange={(e) =>
                          setMacroForm((f) => ({
                            ...f,
                            carbsGrams: BigInt(e.target.value || "0"),
                          }))
                        }
                        className="bg-muted border-border"
                        data-ocid="input-carbs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="fats"
                        className="text-sm font-body text-muted-foreground"
                      >
                        Fats (g)
                      </Label>
                      <Input
                        id="fats"
                        type="number"
                        min={0}
                        value={Number(macroForm.fatGrams) || ""}
                        onChange={(e) =>
                          setMacroForm((f) => ({
                            ...f,
                            fatGrams: BigInt(e.target.value || "0"),
                          }))
                        }
                        className="bg-muted border-border"
                        data-ocid="input-fats"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={logMacros.isPending}
                    data-ocid="btn-log-macros"
                  >
                    <Save size={15} className="mr-1.5" aria-hidden="true" />
                    {logMacros.isPending ? "Saving..." : "Save Today's Macros"}
                  </Button>
                </form>
              </Card>

              {/* Recent Logs */}
              <Card className="bg-card border-border p-6 shadow-subtle">
                <h3 className="font-display font-bold text-foreground mb-4">
                  Recent Logs
                </h3>
                {logsLoading ? (
                  <PageLoading label="Loading logs..." />
                ) : !macroLogs?.length ? (
                  <div
                    className="text-center py-10 text-muted-foreground"
                    data-ocid="macros-empty"
                  >
                    <BarChart2
                      size={36}
                      className="mx-auto mb-3 opacity-30"
                      aria-hidden="true"
                    />
                    <p className="font-body text-sm">
                      No macro logs yet. Start tracking today!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                    {macroLogs.slice(0, 10).map((log) => (
                      <div
                        key={String(log.id)}
                        className="bg-muted/40 rounded-lg p-3 flex items-center justify-between gap-2"
                      >
                        <div>
                          <div className="text-xs text-muted-foreground font-body">
                            {new Date(
                              Number(log.date) / 1_000_000,
                            ).toLocaleDateString()}
                          </div>
                          <div className="text-sm font-body font-medium text-foreground">
                            {Number(log.calories)} kcal
                          </div>
                        </div>
                        <div className="flex gap-3 text-xs">
                          <span className="text-primary font-mono">
                            P: {Number(log.proteinGrams)}g
                          </span>
                          <span className="text-accent font-mono">
                            C: {Number(log.carbsGrams)}g
                          </span>
                          <span className="text-chart-3 font-mono">
                            F: {Number(log.fatGrams)}g
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          {/* Recipe Guides Tab */}
          <TabsContent value="guides">
            {guidesLoading ? (
              <PageLoading label="Loading recipe guides..." />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {displayGuides.map((guide, i) => (
                  <motion.div
                    key={String(guide.id)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    data-ocid={`recipe-guide-${guide.id}`}
                  >
                    <Card className="bg-card border-border p-5 flex flex-col gap-3 h-full shadow-subtle hover:shadow-elevated hover:border-accent/30 transition-smooth">
                      <div className="w-full aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                        <BookOpen
                          size={32}
                          className="text-muted-foreground/40"
                          aria-hidden="true"
                        />
                      </div>
                      <Badge variant="secondary" className="w-fit text-xs">
                        {goalTypeLabel(guide.goalType)}
                      </Badge>
                      <h4 className="font-display font-bold text-foreground text-sm leading-snug">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-body flex-1">
                        {guide.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-accent/30 text-accent hover:bg-accent/10 mt-auto"
                        asChild
                        data-ocid={`btn-download-guide-${guide.id}`}
                      >
                        <a
                          href={guide.file.getDirectURL()}
                          download={guide.filename}
                        >
                          <Download
                            size={14}
                            className="mr-1.5"
                            aria-hidden="true"
                          />
                          Download
                        </a>
                      </Button>
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
