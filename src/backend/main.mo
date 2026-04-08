import List "mo:core/List";
import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import GalleryTypes "types/gallery";
import BookingTypes "types/booking";
import NutritionTypes "types/nutrition";
import ProgressTypes "types/progress";
import PlansTypes "types/plans";
import MemberTypes "types/members";
import Common "types/common";
import GalleryMixin "mixins/gallery-api";
import BookingMixin "mixins/booking-api";
import NutritionMixin "mixins/nutrition-api";
import ProgressMixin "mixins/progress-api";
import PlansMixin "mixins/plans-api";
import MembersMixin "mixins/members-api";

actor {
  // === Authorization ===
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // === Object Storage ===
  include MixinObjectStorage();

  // === State ===
  let memberProfiles = Map.empty<Common.UserId, MemberTypes.MemberProfile>();

  let transformations = List.empty<GalleryTypes.Transformation>();
  let testimonials = List.empty<GalleryTypes.Testimonial>();
  let nextTransformationId = [var 1 : Nat];
  let nextTestimonialId = [var 1 : Nat];

  let sessions = List.empty<BookingTypes.TrainingSession>();
  let bookings = List.empty<BookingTypes.Booking>();
  let nextSessionId = [var 1 : Nat];
  let nextBookingId = [var 1 : Nat];

  let mealPlans = List.empty<NutritionTypes.MealPlan>();
  let macroLogs = List.empty<NutritionTypes.MacroLog>();
  let recipeGuides = List.empty<NutritionTypes.RecipeGuide>();
  let nextMealPlanId = [var 1 : Nat];
  let nextMacroLogId = [var 1 : Nat];
  let nextRecipeGuideId = [var 1 : Nat];

  let measurements = List.empty<ProgressTypes.BodyMeasurement>();
  let nextMeasurementId = [var 1 : Nat];

  let fitnessPlans = List.empty<PlansTypes.FitnessPlan>();
  let planAssignments = List.empty<PlansTypes.MemberPlanAssignment>();
  let nextFitnessPlanId = [var 1 : Nat];

  // === Mixins ===
  include MembersMixin(accessControlState, memberProfiles);

  include GalleryMixin(
    accessControlState,
    transformations,
    testimonials,
    nextTransformationId,
    nextTestimonialId,
  );

  include BookingMixin(
    accessControlState,
    sessions,
    bookings,
    nextSessionId,
    nextBookingId,
  );

  include NutritionMixin(
    accessControlState,
    mealPlans,
    macroLogs,
    recipeGuides,
    memberProfiles,
    nextMealPlanId,
    nextMacroLogId,
    nextRecipeGuideId,
  );

  include ProgressMixin(
    accessControlState,
    measurements,
    nextMeasurementId,
  );

  include PlansMixin(
    accessControlState,
    fitnessPlans,
    planAssignments,
    nextFitnessPlanId,
  );
};
