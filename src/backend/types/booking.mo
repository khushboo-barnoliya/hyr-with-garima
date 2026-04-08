import Common "common";

module {
  public type SessionId = Common.Id;
  public type BookingId = Common.Id;

  public type TrainingSession = {
    id : SessionId;
    title : Text;
    description : Text;
    startTime : Common.Timestamp;
    endTime : Common.Timestamp;
    capacity : Nat;
    bookedCount : Nat;
  };

  public type Booking = {
    id : BookingId;
    sessionId : SessionId;
    memberId : Common.UserId;
    bookedAt : Common.Timestamp;
    status : BookingStatus;
  };

  public type BookingStatus = {
    #confirmed;
    #cancelled;
  };
};
