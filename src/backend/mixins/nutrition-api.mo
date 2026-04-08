import List "mo:core/List";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Storage "mo:caffeineai-object-storage/Storage";
import AccessControl "mo:caffeineai-authorization/access-control";
import NutritionLib "../lib/nutrition";
import MembersLib "../lib/members";
import NutritionTypes "../types/nutrition";
import MemberTypes "../types/members";
import Common "../types/common";

mixin (
  accessControlState : AccessControl.AccessControlState,
  mealPlans : List.List<NutritionTypes.MealPlan>,
  macroLogs : List.List<NutritionTypes.MacroLog>,
  recipeGuides : List.List<NutritionTypes.RecipeGuide>,
  memberProfiles : Map.Map<Common.UserId, MemberTypes.MemberProfile>,
  nextMealPlanId : [var Nat],
  nextMacroLogId : [var Nat],
  nextRecipeGuideId : [var Nat],
) {
  // === Meal Plans ===

  public shared ({ caller }) func createMealPlan(
    name : Text,
    description : Text,
    goalType : NutritionTypes.GoalType,
    dailyCalories : Nat,
    proteinGrams : Nat,
    carbsGrams : Nat,
    fatGrams : Nat,
  ) : async NutritionTypes.MealPlan {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can create meal plans");
    };
    let id = nextMealPlanId[0];
    nextMealPlanId[0] := id + 1;
    NutritionLib.createMealPlan(mealPlans, id, name, description, goalType, dailyCalories, proteinGrams, carbsGrams, fatGrams, Time.now());
  };

  public query func listMealPlans() : async [NutritionTypes.MealPlan] {
    NutritionLib.listMealPlans(mealPlans);
  };

  public query func getMealPlan(id : NutritionTypes.MealPlanId) : async ?NutritionTypes.MealPlan {
    NutritionLib.getMealPlan(mealPlans, id);
  };

  public shared ({ caller }) func deleteMealPlan(id : NutritionTypes.MealPlanId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete meal plans");
    };
    NutritionLib.deleteMealPlan(mealPlans, id);
  };

  public shared ({ caller }) func assignMealPlanToMember(
    memberId : Common.UserId,
    mealPlanId : ?NutritionTypes.MealPlanId,
  ) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can assign meal plans");
    };
    MembersLib.assignMealPlan(memberProfiles, memberId, mealPlanId);
  };

  public query ({ caller }) func getMyMealPlan() : async ?NutritionTypes.MealPlan {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to view meal plan");
    };
    let profileOpt = memberProfiles.get(caller);
    switch (profileOpt) {
      case (?profile) {
        switch (profile.assignedMealPlanId) {
          case (?planId) NutritionLib.getMealPlan(mealPlans, planId);
          case null null;
        };
      };
      case null null;
    };
  };

  // === Macro Logs ===

  public shared ({ caller }) func logMacros(
    date : Common.Timestamp,
    calories : Nat,
    proteinGrams : Nat,
    carbsGrams : Nat,
    fatGrams : Nat,
    notes : Text,
  ) : async NutritionTypes.MacroLog {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to log macros");
    };
    let id = nextMacroLogId[0];
    nextMacroLogId[0] := id + 1;
    NutritionLib.logMacros(macroLogs, id, caller, date, calories, proteinGrams, carbsGrams, fatGrams, notes, Time.now());
  };

  public query ({ caller }) func getMyMacroLogs() : async [NutritionTypes.MacroLog] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to view macro logs");
    };
    NutritionLib.getMemberMacroLogs(macroLogs, caller);
  };

  // === Recipe Guides ===

  public shared ({ caller }) func createRecipeGuide(
    title : Text,
    description : Text,
    goalType : NutritionTypes.GoalType,
    file : Storage.ExternalBlob,
    filename : Text,
  ) : async NutritionTypes.RecipeGuide {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can create recipe guides");
    };
    let id = nextRecipeGuideId[0];
    nextRecipeGuideId[0] := id + 1;
    NutritionLib.createRecipeGuide(recipeGuides, id, title, description, goalType, file, filename, Time.now());
  };

  public query func listRecipeGuides() : async [NutritionTypes.RecipeGuide] {
    NutritionLib.listRecipeGuides(recipeGuides);
  };

  public shared ({ caller }) func deleteRecipeGuide(id : NutritionTypes.RecipeGuideId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete recipe guides");
    };
    NutritionLib.deleteRecipeGuide(recipeGuides, id);
  };
};
