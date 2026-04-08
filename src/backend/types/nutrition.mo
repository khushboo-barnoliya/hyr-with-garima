import Storage "mo:caffeineai-object-storage/Storage";
import Common "common";

module {
  public type MealPlanId = Common.Id;
  public type MacroLogId = Common.Id;
  public type RecipeGuideId = Common.Id;

  public type GoalType = {
    #weightLoss;
    #muscleGain;
    #maintenance;
    #endurance;
  };

  public type MealPlan = {
    id : MealPlanId;
    name : Text;
    description : Text;
    goalType : GoalType;
    dailyCalories : Nat;
    proteinGrams : Nat;
    carbsGrams : Nat;
    fatGrams : Nat;
    createdAt : Common.Timestamp;
  };

  public type MacroLog = {
    id : MacroLogId;
    memberId : Common.UserId;
    date : Common.Timestamp;
    calories : Nat;
    proteinGrams : Nat;
    carbsGrams : Nat;
    fatGrams : Nat;
    notes : Text;
    loggedAt : Common.Timestamp;
  };

  public type RecipeGuide = {
    id : RecipeGuideId;
    title : Text;
    description : Text;
    goalType : GoalType;
    file : Storage.ExternalBlob;
    filename : Text;
    createdAt : Common.Timestamp;
  };
};
