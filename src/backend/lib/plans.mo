import List "mo:core/List";
import Types "../types/plans";
import Common "../types/common";

module {
  public func createFitnessPlan(
    fitnessPlans : List.List<Types.FitnessPlan>,
    nextId : Nat,
    name : Text,
    description : Text,
    durationDays : Nat,
    price : Float,
    now : Common.Timestamp,
  ) : Types.FitnessPlan {
    let plan : Types.FitnessPlan = {
      id = nextId;
      name;
      description;
      durationDays;
      price;
      createdAt = now;
    };
    fitnessPlans.add(plan);
    plan;
  };

  public func getFitnessPlan(
    fitnessPlans : List.List<Types.FitnessPlan>,
    id : Types.FitnessPlanId,
  ) : ?Types.FitnessPlan {
    fitnessPlans.find(func(p) { p.id == id });
  };

  public func listFitnessPlans(
    fitnessPlans : List.List<Types.FitnessPlan>,
  ) : [Types.FitnessPlan] {
    fitnessPlans.toArray();
  };

  public func deleteFitnessPlan(
    fitnessPlans : List.List<Types.FitnessPlan>,
    id : Types.FitnessPlanId,
  ) : () {
    let filtered = fitnessPlans.filter(func(p) { p.id != id });
    fitnessPlans.clear();
    fitnessPlans.append(filtered);
  };

  public func assignPlanToMember(
    assignments : List.List<Types.MemberPlanAssignment>,
    memberId : Common.UserId,
    planId : Types.FitnessPlanId,
    now : Common.Timestamp,
    expiresAt : ?Common.Timestamp,
  ) : () {
    // Remove existing assignment for same plan+member if any, then add new
    let filtered = assignments.filter(func(a) {
      not (a.memberId == memberId and a.planId == planId)
    });
    assignments.clear();
    assignments.append(filtered);
    let assignment : Types.MemberPlanAssignment = {
      memberId;
      planId;
      assignedAt = now;
      expiresAt;
    };
    assignments.add(assignment);
  };

  public func getMemberAssignments(
    assignments : List.List<Types.MemberPlanAssignment>,
    memberId : Common.UserId,
  ) : [Types.MemberPlanAssignment] {
    assignments.filter(func(a) { a.memberId == memberId }).toArray();
  };

  public func getAllAssignments(
    assignments : List.List<Types.MemberPlanAssignment>,
  ) : [Types.MemberPlanAssignment] {
    assignments.toArray();
  };
};
