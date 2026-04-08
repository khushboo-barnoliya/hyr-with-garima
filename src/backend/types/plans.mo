import Common "common";

module {
  public type FitnessPlanId = Common.Id;

  public type FitnessPlan = {
    id : FitnessPlanId;
    name : Text;
    description : Text;
    durationDays : Nat;
    price : Float;
    createdAt : Common.Timestamp;
  };

  public type MemberPlanAssignment = {
    memberId : Common.UserId;
    planId : FitnessPlanId;
    assignedAt : Common.Timestamp;
    expiresAt : ?Common.Timestamp;
  };
};
