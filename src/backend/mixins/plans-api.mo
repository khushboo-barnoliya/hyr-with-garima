import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import PlansLib "../lib/plans";
import PlansTypes "../types/plans";
import Common "../types/common";

mixin (
  accessControlState : AccessControl.AccessControlState,
  fitnessPlans : List.List<PlansTypes.FitnessPlan>,
  planAssignments : List.List<PlansTypes.MemberPlanAssignment>,
  nextFitnessPlanId : [var Nat],
) {
  public shared ({ caller }) func createFitnessPlan(
    name : Text,
    description : Text,
    durationDays : Nat,
    price : Float,
  ) : async PlansTypes.FitnessPlan {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can create fitness plans");
    };
    let id = nextFitnessPlanId[0];
    nextFitnessPlanId[0] := id + 1;
    PlansLib.createFitnessPlan(fitnessPlans, id, name, description, durationDays, price, Time.now());
  };

  public query func listFitnessPlans() : async [PlansTypes.FitnessPlan] {
    PlansLib.listFitnessPlans(fitnessPlans);
  };

  public query func getFitnessPlan(id : PlansTypes.FitnessPlanId) : async ?PlansTypes.FitnessPlan {
    PlansLib.getFitnessPlan(fitnessPlans, id);
  };

  public shared ({ caller }) func deleteFitnessPlan(id : PlansTypes.FitnessPlanId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete fitness plans");
    };
    PlansLib.deleteFitnessPlan(fitnessPlans, id);
  };

  public shared ({ caller }) func assignPlanToMember(
    memberId : Common.UserId,
    planId : PlansTypes.FitnessPlanId,
    expiresAt : ?Common.Timestamp,
  ) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can assign fitness plans");
    };
    PlansLib.assignPlanToMember(planAssignments, memberId, planId, Time.now(), expiresAt);
  };

  public query ({ caller }) func getMyPlans() : async [PlansTypes.MemberPlanAssignment] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to view your plans");
    };
    PlansLib.getMemberAssignments(planAssignments, caller);
  };

  public query ({ caller }) func getAllPlanAssignments() : async [PlansTypes.MemberPlanAssignment] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all plan assignments");
    };
    PlansLib.getAllAssignments(planAssignments);
  };
};
