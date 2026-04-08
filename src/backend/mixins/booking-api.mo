import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import BookingLib "../lib/booking";
import BookingTypes "../types/booking";
import Common "../types/common";

mixin (
  accessControlState : AccessControl.AccessControlState,
  sessions : List.List<BookingTypes.TrainingSession>,
  bookings : List.List<BookingTypes.Booking>,
  nextSessionId : [var Nat],
  nextBookingId : [var Nat],
) {
  public shared ({ caller }) func createSession(
    title : Text,
    description : Text,
    startTime : Common.Timestamp,
    endTime : Common.Timestamp,
    capacity : Nat,
  ) : async BookingTypes.TrainingSession {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can create sessions");
    };
    let id = nextSessionId[0];
    nextSessionId[0] := id + 1;
    BookingLib.createSession(sessions, id, title, description, startTime, endTime, capacity);
  };

  public query func listSessions() : async [BookingTypes.TrainingSession] {
    BookingLib.listSessions(sessions);
  };

  public query func getSession(id : BookingTypes.SessionId) : async ?BookingTypes.TrainingSession {
    BookingLib.getSession(sessions, id);
  };

  public shared ({ caller }) func deleteSession(id : BookingTypes.SessionId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete sessions");
    };
    BookingLib.deleteSession(sessions, id);
  };

  public shared ({ caller }) func bookSession(sessionId : BookingTypes.SessionId) : async BookingTypes.Booking {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to book a session");
    };
    let id = nextBookingId[0];
    nextBookingId[0] := id + 1;
    BookingLib.createBooking(bookings, sessions, id, sessionId, caller, Time.now());
  };

  public shared ({ caller }) func cancelBooking(bookingId : BookingTypes.BookingId) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to cancel a booking");
    };
    let isAdmin = AccessControl.isAdmin(accessControlState, caller);
    BookingLib.cancelBooking(bookings, sessions, bookingId, caller, isAdmin);
  };

  public query ({ caller }) func getMyBookings() : async [BookingTypes.Booking] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to view bookings");
    };
    BookingLib.getMemberBookings(bookings, caller);
  };

  public query ({ caller }) func listAllBookings() : async [BookingTypes.Booking] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all bookings");
    };
    BookingLib.listAllBookings(bookings);
  };
};
