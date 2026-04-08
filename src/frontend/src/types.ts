// ─── Domain types mapped from Motoko backend ───────────────────────────────
import type { ExternalBlob, GoalType } from "./backend";

export interface Transformation {
  id: bigint;
  clientName: string;
  description: string;
  beforeImage: ExternalBlob;
  afterImage: ExternalBlob;
  createdAt: bigint;
}

export interface Testimonial {
  id: bigint;
  clientName: string;
  content: string;
  rating: bigint;
  createdAt: bigint;
}

export interface TrainingSession {
  id: bigint;
  title: string;
  description: string;
  startTime: bigint;
  endTime: bigint;
  capacity: bigint;
  bookedCount: bigint;
}

// Legacy alias for components that still use "Session"
export type Session = TrainingSession;

export interface Booking {
  id: bigint;
  sessionId: bigint;
  memberId: import("@icp-sdk/core/principal").Principal;
  bookedAt: bigint;
  status: import("./backend.d").BookingStatus;
}

export interface MealPlan {
  id: bigint;
  name: string;
  description: string;
  dailyCalories: bigint;
  proteinGrams: bigint;
  carbsGrams: bigint;
  fatGrams: bigint;
  goalType: GoalType;
  createdAt: bigint;
}

export interface MacroLog {
  id: bigint;
  memberId: import("@icp-sdk/core/principal").Principal;
  date: bigint;
  calories: bigint;
  proteinGrams: bigint;
  carbsGrams: bigint;
  fatGrams: bigint;
  notes: string;
  loggedAt: bigint;
}

export interface RecipeGuide {
  id: bigint;
  title: string;
  description: string;
  goalType: GoalType;
  file: ExternalBlob;
  filename: string;
  createdAt: bigint;
}

export interface BodyMeasurement {
  id: bigint;
  memberId: import("@icp-sdk/core/principal").Principal;
  date: bigint;
  weightKg: number;
  chestCm: number;
  waistCm: number;
  hipsCm: number;
  armsCm: number;
  legsCm: number;
  notes: string;
  loggedAt: bigint;
}

// Legacy alias for components that still use "Measurement"
export type Measurement = BodyMeasurement;

export interface FitnessPlan {
  id: bigint;
  name: string;
  description: string;
  durationDays: bigint;
  price: number;
  createdAt: bigint;
}

export interface PlanAssignment {
  memberId: import("@icp-sdk/core/principal").Principal;
  planId: bigint;
  assignedAt: bigint;
  expiresAt?: bigint;
}

export interface UserProfile {
  name: string;
}

export interface MemberProfile {
  id: import("@icp-sdk/core/principal").Principal;
  name: string;
  email: string;
  joinedAt: bigint;
  assignedMealPlanId?: bigint;
}

export type UserRole = "admin" | "user" | "guest";
