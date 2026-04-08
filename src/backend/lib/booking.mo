import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Types "../types/booking";
import Common "../types/common";

module {
  public func createSession(
    sessions : List.List<Types.TrainingSession>,
    nextId : Nat,
    title : Text,
    description : Text,
    startTime : Common.Timestamp,
    endTime : Common.Timestamp,
    capacity : Nat,
  ) : Types.TrainingSession {
    let s : Types.TrainingSession = {
      id = nextId;
      title;
      description;
      startTime;
      endTime;
      capacity;
      bookedCount = 0;
    };
    sessions.add(s);
    s;
  };

  public func getSession(
    sessions : List.List<Types.TrainingSession>,
    id : Types.SessionId,
  ) : ?Types.TrainingSession {
    sessions.find(func(s) { s.id == id });
  };

  public func listSessions(
    sessions : List.List<Types.TrainingSession>,
  ) : [Types.TrainingSession] {
    sessions.toArray();
  };

  public func deleteSession(
    sessions : List.List<Types.TrainingSession>,
    id : Types.SessionId,
  ) : () {
    let filtered = sessions.filter(func(s) { s.id != id });
    sessions.clear();
    sessions.append(filtered);
  };

  public func createBooking(
    bookings : List.List<Types.Booking>,
    sessions : List.List<Types.TrainingSession>,
    nextId : Nat,
    sessionId : Types.SessionId,
    memberId : Common.UserId,
    now : Common.Timestamp,
  ) : Types.Booking {
    // Verify session exists and has capacity
    let sessionOpt = sessions.find(func(s) { s.id == sessionId });
    let session = switch (sessionOpt) {
      case (?s) s;
      case null Runtime.trap("Session not found");
    };
    if (session.bookedCount >= session.capacity) {
      Runtime.trap("Session is fully booked");
    };
    // Check member hasn't already booked this session
    let existing = bookings.find(func(b : Types.Booking) : Bool {
      b.sessionId == sessionId and b.memberId == memberId and b.status == #confirmed
    });
    switch (existing) {
      case (?_) Runtime.trap("Already booked this session");
      case null {};
    };
    // Increment bookedCount on session
    sessions.mapInPlace(func(s) {
      if (s.id == sessionId) { { s with bookedCount = s.bookedCount + 1 } } else s
    });
    let booking : Types.Booking = {
      id = nextId;
      sessionId;
      memberId;
      bookedAt = now;
      status = #confirmed;
    };
    bookings.add(booking);
    booking;
  };

  public func cancelBooking(
    bookings : List.List<Types.Booking>,
    sessions : List.List<Types.TrainingSession>,
    bookingId : Types.BookingId,
    caller : Common.UserId,
    isAdmin : Bool,
  ) : () {
    let bookingOpt = bookings.find(func(b) { b.id == bookingId });
    let booking = switch (bookingOpt) {
      case (?b) b;
      case null Runtime.trap("Booking not found");
    };
    if (not isAdmin and booking.memberId != caller) {
      Runtime.trap("Unauthorized: Cannot cancel another member's booking");
    };
    // Decrement bookedCount
    sessions.mapInPlace(func(s) {
      if (s.id == booking.sessionId and s.bookedCount > 0) {
        { s with bookedCount = s.bookedCount - 1 }
      } else s
    });
    bookings.mapInPlace(func(b) {
      if (b.id == bookingId) { { b with status = #cancelled } } else b
    });
  };

  public func getMemberBookings(
    bookings : List.List<Types.Booking>,
    memberId : Common.UserId,
  ) : [Types.Booking] {
    bookings.filter(func(b) { b.memberId == memberId }).toArray();
  };

  public func listAllBookings(
    bookings : List.List<Types.Booking>,
  ) : [Types.Booking] {
    bookings.toArray();
  };
};
