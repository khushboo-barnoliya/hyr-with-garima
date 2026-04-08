import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export type Timestamp = bigint;
export interface RecipeGuide {
    id: RecipeGuideId;
    title: string;
    goalType: GoalType;
    file: ExternalBlob;
    createdAt: Timestamp;
    description: string;
    filename: string;
}
export type MeasurementId = bigint;
export interface MemberPlanAssignment {
    memberId: UserId;
    expiresAt?: Timestamp;
    assignedAt: Timestamp;
    planId: FitnessPlanId;
}
export interface MemberProfile {
    id: UserId;
    name: string;
    joinedAt: Timestamp;
    email: string;
    assignedMealPlanId?: MealPlanId;
}
export interface MealPlan {
    id: MealPlanId;
    fatGrams: bigint;
    goalType: GoalType;
    name: string;
    createdAt: Timestamp;
    description: string;
    carbsGrams: bigint;
    proteinGrams: bigint;
    dailyCalories: bigint;
}
export interface TrainingSession {
    id: SessionId;
    startTime: Timestamp;
    title: string;
    endTime: Timestamp;
    bookedCount: bigint;
    description: string;
    capacity: bigint;
}
export type FitnessPlanId = bigint;
export type TransformationId = bigint;
export interface Booking {
    id: BookingId;
    status: BookingStatus;
    memberId: UserId;
    bookedAt: Timestamp;
    sessionId: SessionId;
}
export type TestimonialId = bigint;
export type RecipeGuideId = bigint;
export type BookingId = bigint;
export interface Transformation {
    id: TransformationId;
    afterImage: ExternalBlob;
    clientName: string;
    beforeImage: ExternalBlob;
    createdAt: Timestamp;
    description: string;
}
export type MacroLogId = bigint;
export type SessionId = bigint;
export type MealPlanId = bigint;
export interface MacroLog {
    id: MacroLogId;
    memberId: UserId;
    fatGrams: bigint;
    date: Timestamp;
    calories: bigint;
    notes: string;
    carbsGrams: bigint;
    proteinGrams: bigint;
    loggedAt: Timestamp;
}
export interface BodyMeasurement {
    id: MeasurementId;
    memberId: UserId;
    chestCm: number;
    date: Timestamp;
    hipsCm: number;
    weightKg: number;
    legsCm: number;
    notes: string;
    armsCm: number;
    waistCm: number;
    loggedAt: Timestamp;
}
export type UserId = Principal;
export interface FitnessPlan {
    id: FitnessPlanId;
    durationDays: bigint;
    name: string;
    createdAt: Timestamp;
    description: string;
    price: number;
}
export interface UserProfile {
    name: string;
}
export interface Testimonial {
    id: TestimonialId;
    content: string;
    clientName: string;
    createdAt: Timestamp;
    rating: bigint;
}
export enum BookingStatus {
    cancelled = "cancelled",
    confirmed = "confirmed"
}
export enum GoalType {
    weightLoss = "weightLoss",
    muscleGain = "muscleGain",
    maintenance = "maintenance",
    endurance = "endurance"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    adminAssignMealPlanToMember(memberId: UserId, mealPlanId: MealPlanId | null): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    assignMealPlanToMember(memberId: UserId, mealPlanId: MealPlanId | null): Promise<void>;
    assignPlanToMember(memberId: UserId, planId: FitnessPlanId, expiresAt: Timestamp | null): Promise<void>;
    bookSession(sessionId: SessionId): Promise<Booking>;
    cancelBooking(bookingId: BookingId): Promise<void>;
    createFitnessPlan(name: string, description: string, durationDays: bigint, price: number): Promise<FitnessPlan>;
    createMealPlan(name: string, description: string, goalType: GoalType, dailyCalories: bigint, proteinGrams: bigint, carbsGrams: bigint, fatGrams: bigint): Promise<MealPlan>;
    createRecipeGuide(title: string, description: string, goalType: GoalType, file: ExternalBlob, filename: string): Promise<RecipeGuide>;
    createSession(title: string, description: string, startTime: Timestamp, endTime: Timestamp, capacity: bigint): Promise<TrainingSession>;
    createTestimonial(clientName: string, content: string, rating: bigint): Promise<Testimonial>;
    createTransformation(clientName: string, description: string, beforeImage: ExternalBlob, afterImage: ExternalBlob): Promise<Transformation>;
    deleteFitnessPlan(id: FitnessPlanId): Promise<void>;
    deleteMealPlan(id: MealPlanId): Promise<void>;
    deleteMeasurement(id: MeasurementId): Promise<void>;
    deleteRecipeGuide(id: RecipeGuideId): Promise<void>;
    deleteSession(id: SessionId): Promise<void>;
    deleteTestimonial(id: TestimonialId): Promise<void>;
    deleteTransformation(id: TransformationId): Promise<void>;
    getAllPlanAssignments(): Promise<Array<MemberPlanAssignment>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getFitnessPlan(id: FitnessPlanId): Promise<FitnessPlan | null>;
    getMealPlan(id: MealPlanId): Promise<MealPlan | null>;
    getMyBookings(): Promise<Array<Booking>>;
    getMyMacroLogs(): Promise<Array<MacroLog>>;
    getMyMealPlan(): Promise<MealPlan | null>;
    getMyMeasurements(): Promise<Array<BodyMeasurement>>;
    getMyMemberProfile(): Promise<MemberProfile | null>;
    getMyPlans(): Promise<Array<MemberPlanAssignment>>;
    getSession(id: SessionId): Promise<TrainingSession | null>;
    getTransformation(id: TransformationId): Promise<Transformation | null>;
    getUserProfile(user: UserId): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    listAllBookings(): Promise<Array<Booking>>;
    listAllMembers(): Promise<Array<MemberProfile>>;
    listFitnessPlans(): Promise<Array<FitnessPlan>>;
    listMealPlans(): Promise<Array<MealPlan>>;
    listRecipeGuides(): Promise<Array<RecipeGuide>>;
    listSessions(): Promise<Array<TrainingSession>>;
    listTestimonials(): Promise<Array<Testimonial>>;
    listTransformations(): Promise<Array<Transformation>>;
    logMacros(date: Timestamp, calories: bigint, proteinGrams: bigint, carbsGrams: bigint, fatGrams: bigint, notes: string): Promise<MacroLog>;
    logMeasurement(date: Timestamp, weightKg: number, chestCm: number, waistCm: number, hipsCm: number, armsCm: number, legsCm: number, notes: string): Promise<BodyMeasurement>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    saveMemberProfile(name: string, email: string): Promise<void>;
}
