import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Types "../types/progress";
import Common "../types/common";

module {
  public func logMeasurement(
    measurements : List.List<Types.BodyMeasurement>,
    nextId : Nat,
    memberId : Common.UserId,
    date : Common.Timestamp,
    weightKg : Float,
    chestCm : Float,
    waistCm : Float,
    hipsCm : Float,
    armsCm : Float,
    legsCm : Float,
    notes : Text,
    now : Common.Timestamp,
  ) : Types.BodyMeasurement {
    let m : Types.BodyMeasurement = {
      id = nextId;
      memberId;
      date;
      weightKg;
      chestCm;
      waistCm;
      hipsCm;
      armsCm;
      legsCm;
      notes;
      loggedAt = now;
    };
    measurements.add(m);
    m;
  };

  public func getMemberMeasurements(
    measurements : List.List<Types.BodyMeasurement>,
    memberId : Common.UserId,
  ) : [Types.BodyMeasurement] {
    measurements.filter(func(m) { m.memberId == memberId }).toArray();
  };

  public func deleteMeasurement(
    measurements : List.List<Types.BodyMeasurement>,
    id : Types.MeasurementId,
    caller : Common.UserId,
    isAdmin : Bool,
  ) : () {
    let mOpt = measurements.find(func(m) { m.id == id });
    let measurement = switch (mOpt) {
      case (?m) m;
      case null Runtime.trap("Measurement not found");
    };
    if (not isAdmin and measurement.memberId != caller) {
      Runtime.trap("Unauthorized: Cannot delete another member's measurement");
    };
    let filtered = measurements.filter(func(m) { m.id != id });
    measurements.clear();
    measurements.append(filtered);
  };
};
