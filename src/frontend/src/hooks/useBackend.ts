import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ExternalBlob, GoalType } from "../backend";
import { createActor } from "../backend";
import type {
  BodyMeasurement,
  Booking,
  FitnessPlan,
  MacroLog,
  MealPlan,
  MemberProfile,
  PlanAssignment,
  RecipeGuide,
  Testimonial,
  TrainingSession,
  Transformation,
} from "../types";

// ─── Actor type helper ───────────────────────────────────────────────────────
type BackendActor = {
  // Transformations
  createTransformation: (
    clientName: string,
    description: string,
    beforeImage: ExternalBlob,
    afterImage: ExternalBlob,
  ) => Promise<Transformation>;
  listTransformations: () => Promise<Transformation[]>;
  getTransformation: (id: bigint) => Promise<Transformation | null>;
  deleteTransformation: (id: bigint) => Promise<void>;
  // Testimonials
  createTestimonial: (
    clientName: string,
    content: string,
    rating: bigint,
  ) => Promise<Testimonial>;
  listTestimonials: () => Promise<Testimonial[]>;
  deleteTestimonial: (id: bigint) => Promise<void>;
  // Sessions
  createSession: (
    title: string,
    description: string,
    startTime: bigint,
    endTime: bigint,
    capacity: bigint,
  ) => Promise<TrainingSession>;
  listSessions: () => Promise<TrainingSession[]>;
  getSession: (id: bigint) => Promise<TrainingSession | null>;
  deleteSession: (id: bigint) => Promise<void>;
  bookSession: (sessionId: bigint) => Promise<Booking>;
  cancelBooking: (bookingId: bigint) => Promise<void>;
  getMyBookings: () => Promise<Booking[]>;
  listAllBookings: () => Promise<Booking[]>;
  // Meal Plans
  createMealPlan: (
    name: string,
    description: string,
    goalType: GoalType,
    dailyCalories: bigint,
    proteinGrams: bigint,
    carbsGrams: bigint,
    fatGrams: bigint,
  ) => Promise<MealPlan>;
  listMealPlans: () => Promise<MealPlan[]>;
  getMealPlan: (id: bigint) => Promise<MealPlan | null>;
  deleteMealPlan: (id: bigint) => Promise<void>;
  assignMealPlanToMember: (
    memberId: string,
    planId: bigint | null,
  ) => Promise<void>;
  getMyMealPlan: () => Promise<MealPlan | null>;
  logMacros: (
    date: bigint,
    calories: bigint,
    proteinGrams: bigint,
    carbsGrams: bigint,
    fatGrams: bigint,
    notes: string,
  ) => Promise<MacroLog>;
  getMyMacroLogs: () => Promise<MacroLog[]>;
  // Recipe Guides
  createRecipeGuide: (
    title: string,
    description: string,
    goalType: GoalType,
    file: ExternalBlob,
    filename: string,
  ) => Promise<RecipeGuide>;
  listRecipeGuides: () => Promise<RecipeGuide[]>;
  deleteRecipeGuide: (id: bigint) => Promise<void>;
  // Measurements
  logMeasurement: (
    date: bigint,
    weightKg: number,
    chestCm: number,
    waistCm: number,
    hipsCm: number,
    armsCm: number,
    legsCm: number,
    notes: string,
  ) => Promise<BodyMeasurement>;
  getMyMeasurements: () => Promise<BodyMeasurement[]>;
  deleteMeasurement: (id: bigint) => Promise<void>;
  // Fitness Plans
  createFitnessPlan: (
    name: string,
    description: string,
    durationDays: bigint,
    price: number,
  ) => Promise<FitnessPlan>;
  listFitnessPlans: () => Promise<FitnessPlan[]>;
  getFitnessPlan: (id: bigint) => Promise<FitnessPlan | null>;
  deleteFitnessPlan: (id: bigint) => Promise<void>;
  assignPlanToMember: (
    memberId: string,
    planId: bigint,
    expiresAt: bigint | null,
  ) => Promise<void>;
  getMyPlans: () => Promise<PlanAssignment[]>;
  getAllPlanAssignments: () => Promise<PlanAssignment[]>;
  // Members
  listAllMembers: () => Promise<MemberProfile[]>;
};

function useBackendActor() {
  const { actor, isFetching } = useActor(createActor);
  return { actor: actor as unknown as BackendActor | null, isFetching };
}

// ─── Transformations ─────────────────────────────────────────────────────────
export function useTransformations() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Transformation[]>({
    queryKey: ["transformations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listTransformations();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateTransformation() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      clientName,
      description,
      beforeImage,
      afterImage,
    }: {
      clientName: string;
      description: string;
      beforeImage: ExternalBlob;
      afterImage: ExternalBlob;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createTransformation(
        clientName,
        description,
        beforeImage,
        afterImage,
      );
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["transformations"] }),
  });
}

export function useDeleteTransformation() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteTransformation(id);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["transformations"] }),
  });
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export function useTestimonials() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateTestimonial() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      clientName,
      content,
      rating,
    }: {
      clientName: string;
      content: string;
      rating: bigint;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createTestimonial(clientName, content, rating);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["testimonials"] }),
  });
}

export function useDeleteTestimonial() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteTestimonial(id);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["testimonials"] }),
  });
}

// ─── Sessions ─────────────────────────────────────────────────────────────────
export function useSessions() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<TrainingSession[]>({
    queryKey: ["sessions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listSessions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyBookings() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Booking[]>({
    queryKey: ["myBookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBookSession() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (sessionId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.bookSession(sessionId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
      queryClient.invalidateQueries({ queryKey: ["myBookings"] });
    },
  });
}

export function useCancelBooking() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (bookingId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.cancelBooking(bookingId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
      queryClient.invalidateQueries({ queryKey: ["myBookings"] });
    },
  });
}

export function useCreateSession() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      title,
      description,
      startTime,
      endTime,
      capacity,
    }: {
      title: string;
      description: string;
      startTime: bigint;
      endTime: bigint;
      capacity: bigint;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createSession(
        title,
        description,
        startTime,
        endTime,
        capacity,
      );
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["sessions"] }),
  });
}

export function useDeleteSession() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteSession(id);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["sessions"] }),
  });
}

// ─── Meal Plans ───────────────────────────────────────────────────────────────
export function useMealPlans() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<MealPlan[]>({
    queryKey: ["mealPlans"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listMealPlans();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyMealPlan() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<MealPlan | null>({
    queryKey: ["myMealPlan"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyMealPlan();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyMacroLogs() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<MacroLog[]>({
    queryKey: ["myMacroLogs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyMacroLogs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLogMacros() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      date,
      calories,
      proteinGrams,
      carbsGrams,
      fatGrams,
      notes,
    }: {
      date: bigint;
      calories: bigint;
      proteinGrams: bigint;
      carbsGrams: bigint;
      fatGrams: bigint;
      notes: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.logMacros(
        date,
        calories,
        proteinGrams,
        carbsGrams,
        fatGrams,
        notes,
      );
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["myMacroLogs"] }),
  });
}

export function useCreateMealPlan() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      name,
      description,
      goalType,
      dailyCalories,
      proteinGrams,
      carbsGrams,
      fatGrams,
    }: {
      name: string;
      description: string;
      goalType: GoalType;
      dailyCalories: bigint;
      proteinGrams: bigint;
      carbsGrams: bigint;
      fatGrams: bigint;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createMealPlan(
        name,
        description,
        goalType,
        dailyCalories,
        proteinGrams,
        carbsGrams,
        fatGrams,
      );
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["mealPlans"] }),
  });
}

export function useDeleteMealPlan() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteMealPlan(id);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["mealPlans"] }),
  });
}

// ─── Recipe Guides ────────────────────────────────────────────────────────────
export function useRecipeGuides() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<RecipeGuide[]>({
    queryKey: ["recipeGuides"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listRecipeGuides();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateRecipeGuide() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      title,
      description,
      goalType,
      file,
      filename,
    }: {
      title: string;
      description: string;
      goalType: GoalType;
      file: ExternalBlob;
      filename: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createRecipeGuide(
        title,
        description,
        goalType,
        file,
        filename,
      );
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["recipeGuides"] }),
  });
}

export function useDeleteRecipeGuide() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteRecipeGuide(id);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["recipeGuides"] }),
  });
}

// ─── Measurements ─────────────────────────────────────────────────────────────
export function useMyMeasurements() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<BodyMeasurement[]>({
    queryKey: ["myMeasurements"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyMeasurements();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLogMeasurement() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      date,
      weightKg,
      chestCm,
      waistCm,
      hipsCm,
      armsCm,
      legsCm,
      notes,
    }: {
      date: bigint;
      weightKg: number;
      chestCm: number;
      waistCm: number;
      hipsCm: number;
      armsCm: number;
      legsCm: number;
      notes: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.logMeasurement(
        date,
        weightKg,
        chestCm,
        waistCm,
        hipsCm,
        armsCm,
        legsCm,
        notes,
      );
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["myMeasurements"] }),
  });
}

export function useDeleteMeasurement() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteMeasurement(id);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["myMeasurements"] }),
  });
}

// ─── Fitness Plans ────────────────────────────────────────────────────────────
export function useFitnessPlans() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<FitnessPlan[]>({
    queryKey: ["fitnessPlans"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listFitnessPlans();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyPlans() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PlanAssignment[]>({
    queryKey: ["myPlans"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyPlans();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllPlanAssignments() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PlanAssignment[]>({
    queryKey: ["allPlanAssignments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPlanAssignments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateFitnessPlan() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      name,
      description,
      durationDays,
      price,
    }: {
      name: string;
      description: string;
      durationDays: bigint;
      price: number;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createFitnessPlan(name, description, durationDays, price);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["fitnessPlans"] }),
  });
}

export function useDeleteFitnessPlan() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteFitnessPlan(id);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["fitnessPlans"] }),
  });
}

export function useAssignPlanToMember() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      memberId,
      planId,
    }: { memberId: string; planId: string }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.assignPlanToMember(memberId, BigInt(planId), null);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["allPlanAssignments"] }),
  });
}

export function useAllBookings() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Booking[]>({
    queryKey: ["allBookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

// ─── Members ──────────────────────────────────────────────────────────────────
export function useAllMembers() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<MemberProfile[]>({
    queryKey: ["allMembers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllMembers();
    },
    enabled: !!actor && !isFetching,
  });
}
