import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Types "../types/members";
import NutritionTypes "../types/nutrition";
import Common "../types/common";

module {
  public func saveProfile(
    profiles : Map.Map<Common.UserId, Types.MemberProfile>,
    memberId : Common.UserId,
    name : Text,
    email : Text,
    now : Common.Timestamp,
  ) : () {
    let existing = profiles.get(memberId);
    let profile : Types.MemberProfile = switch (existing) {
      case (?p) { { p with name; email } };
      case null {
        {
          id = memberId;
          name;
          email;
          joinedAt = now;
          assignedMealPlanId = null;
        }
      };
    };
    profiles.add(memberId, profile);
  };

  public func getProfile(
    profiles : Map.Map<Common.UserId, Types.MemberProfile>,
    memberId : Common.UserId,
  ) : ?Types.MemberProfile {
    profiles.get(memberId);
  };

  public func listAllMembers(
    profiles : Map.Map<Common.UserId, Types.MemberProfile>,
  ) : [Types.MemberProfile] {
    profiles.values().toArray();
  };

  public func assignMealPlan(
    profiles : Map.Map<Common.UserId, Types.MemberProfile>,
    memberId : Common.UserId,
    mealPlanId : ?NutritionTypes.MealPlanId,
  ) : () {
    let existing = profiles.get(memberId);
    switch (existing) {
      case (?p) {
        profiles.add(memberId, { p with assignedMealPlanId = mealPlanId });
      };
      case null {
        Runtime.trap("Member profile not found");
      };
    };
  };
};
