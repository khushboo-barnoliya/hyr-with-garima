import Common "common";
import Nutrition "nutrition";

module {
  public type UserProfile = {
    name : Text;
  };

  public type MemberProfile = {
    id : Common.UserId;
    name : Text;
    email : Text;
    joinedAt : Common.Timestamp;
    assignedMealPlanId : ?Nutrition.MealPlanId;
  };
};
