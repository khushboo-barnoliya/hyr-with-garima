import List "mo:core/List";
import Storage "mo:caffeineai-object-storage/Storage";
import Types "../types/nutrition";
import Common "../types/common";

module {
  public func createMealPlan(
    mealPlans : List.List<Types.MealPlan>,
    nextId : Nat,
    name : Text,
    description : Text,
    goalType : Types.GoalType,
    dailyCalories : Nat,
    proteinGrams : Nat,
    carbsGrams : Nat,
    fatGrams : Nat,
    now : Common.Timestamp,
  ) : Types.MealPlan {
    let plan : Types.MealPlan = {
      id = nextId;
      name;
      description;
      goalType;
      dailyCalories;
      proteinGrams;
      carbsGrams;
      fatGrams;
      createdAt = now;
    };
    mealPlans.add(plan);
    plan;
  };

  public func getMealPlan(
    mealPlans : List.List<Types.MealPlan>,
    id : Types.MealPlanId,
  ) : ?Types.MealPlan {
    mealPlans.find(func(p) { p.id == id });
  };

  public func listMealPlans(
    mealPlans : List.List<Types.MealPlan>,
  ) : [Types.MealPlan] {
    mealPlans.toArray();
  };

  public func deleteMealPlan(
    mealPlans : List.List<Types.MealPlan>,
    id : Types.MealPlanId,
  ) : () {
    let filtered = mealPlans.filter(func(p) { p.id != id });
    mealPlans.clear();
    mealPlans.append(filtered);
  };

  public func logMacros(
    macroLogs : List.List<Types.MacroLog>,
    nextId : Nat,
    memberId : Common.UserId,
    date : Common.Timestamp,
    calories : Nat,
    proteinGrams : Nat,
    carbsGrams : Nat,
    fatGrams : Nat,
    notes : Text,
    now : Common.Timestamp,
  ) : Types.MacroLog {
    let entry : Types.MacroLog = {
      id = nextId;
      memberId;
      date;
      calories;
      proteinGrams;
      carbsGrams;
      fatGrams;
      notes;
      loggedAt = now;
    };
    macroLogs.add(entry);
    entry;
  };

  public func getMemberMacroLogs(
    macroLogs : List.List<Types.MacroLog>,
    memberId : Common.UserId,
  ) : [Types.MacroLog] {
    macroLogs.filter(func(l) { l.memberId == memberId }).toArray();
  };

  public func createRecipeGuide(
    recipeGuides : List.List<Types.RecipeGuide>,
    nextId : Nat,
    title : Text,
    description : Text,
    goalType : Types.GoalType,
    file : Storage.ExternalBlob,
    filename : Text,
    now : Common.Timestamp,
  ) : Types.RecipeGuide {
    let guide : Types.RecipeGuide = {
      id = nextId;
      title;
      description;
      goalType;
      file;
      filename;
      createdAt = now;
    };
    recipeGuides.add(guide);
    guide;
  };

  public func listRecipeGuides(
    recipeGuides : List.List<Types.RecipeGuide>,
  ) : [Types.RecipeGuide] {
    recipeGuides.toArray();
  };

  public func deleteRecipeGuide(
    recipeGuides : List.List<Types.RecipeGuide>,
    id : Types.RecipeGuideId,
  ) : () {
    let filtered = recipeGuides.filter(func(g) { g.id != id });
    recipeGuides.clear();
    recipeGuides.append(filtered);
  };
};
