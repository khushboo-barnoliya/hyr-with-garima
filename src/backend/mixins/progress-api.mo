import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import ProgressLib "../lib/progress";
import ProgressTypes "../types/progress";
import Common "../types/common";

mixin (
  accessControlState : AccessControl.AccessControlState,
  measurements : List.List<ProgressTypes.BodyMeasurement>,
  nextMeasurementId : [var Nat],
) {
  public shared ({ caller }) func logMeasurement(
    date : Common.Timestamp,
    weightKg : Float,
    chestCm : Float,
    waistCm : Float,
    hipsCm : Float,
    armsCm : Float,
    legsCm : Float,
    notes : Text,
  ) : async ProgressTypes.BodyMeasurement {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to log measurements");
    };
    let id = nextMeasurementId[0];
    nextMeasurementId[0] := id + 1;
    ProgressLib.logMeasurement(measurements, id, caller, date, weightKg, chestCm, waistCm, hipsCm, armsCm, legsCm, notes, Time.now());
  };

  public query ({ caller }) func getMyMeasurements() : async [ProgressTypes.BodyMeasurement] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to view measurements");
    };
    ProgressLib.getMemberMeasurements(measurements, caller);
  };

  public shared ({ caller }) func deleteMeasurement(id : ProgressTypes.MeasurementId) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to delete measurements");
    };
    let isAdmin = AccessControl.isAdmin(accessControlState, caller);
    ProgressLib.deleteMeasurement(measurements, id, caller, isAdmin);
  };
};
