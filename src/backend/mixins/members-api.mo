import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import MembersLib "../lib/members";
import MemberTypes "../types/members";
import NutritionTypes "../types/nutrition";
import Common "../types/common";

mixin (
  accessControlState : AccessControl.AccessControlState,
  memberProfiles : Map.Map<Common.UserId, MemberTypes.MemberProfile>,
) {
  public query ({ caller }) func getCallerUserProfile() : async ?MemberTypes.UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    switch (memberProfiles.get(caller)) {
      case (?p) ?{ name = p.name };
      case null null;
    };
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : MemberTypes.UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    MembersLib.saveProfile(memberProfiles, caller, profile.name, "", Time.now());
  };

  public query ({ caller }) func getUserProfile(user : Common.UserId) : async ?MemberTypes.UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    switch (memberProfiles.get(user)) {
      case (?p) ?{ name = p.name };
      case null null;
    };
  };

  public query ({ caller }) func getMyMemberProfile() : async ?MemberTypes.MemberProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to view profile");
    };
    MembersLib.getProfile(memberProfiles, caller);
  };

  public shared ({ caller }) func saveMemberProfile(
    name : Text,
    email : Text,
  ) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to save profile");
    };
    MembersLib.saveProfile(memberProfiles, caller, name, email, Time.now());
  };

  public query ({ caller }) func listAllMembers() : async [MemberTypes.MemberProfile] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can list all members");
    };
    MembersLib.listAllMembers(memberProfiles);
  };

  public shared ({ caller }) func adminAssignMealPlanToMember(
    memberId : Common.UserId,
    mealPlanId : ?NutritionTypes.MealPlanId,
  ) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can assign meal plans to members");
    };
    MembersLib.assignMealPlan(memberProfiles, memberId, mealPlanId);
  };
};
