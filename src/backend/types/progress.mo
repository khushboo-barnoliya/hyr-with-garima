import Common "common";

module {
  public type MeasurementId = Common.Id;

  public type BodyMeasurement = {
    id : MeasurementId;
    memberId : Common.UserId;
    date : Common.Timestamp;
    weightKg : Float;
    chestCm : Float;
    waistCm : Float;
    hipsCm : Float;
    armsCm : Float;
    legsCm : Float;
    notes : Text;
    loggedAt : Common.Timestamp;
  };
};
