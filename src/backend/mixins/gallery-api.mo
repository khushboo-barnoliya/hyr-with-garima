import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Storage "mo:caffeineai-object-storage/Storage";
import AccessControl "mo:caffeineai-authorization/access-control";
import GalleryLib "../lib/gallery";
import GalleryTypes "../types/gallery";
import Common "../types/common";

mixin (
  accessControlState : AccessControl.AccessControlState,
  transformations : List.List<GalleryTypes.Transformation>,
  testimonials : List.List<GalleryTypes.Testimonial>,
  nextTransformationId : [var Nat],
  nextTestimonialId : [var Nat],
) {
  // === Transformations ===

  public shared ({ caller }) func createTransformation(
    clientName : Text,
    description : Text,
    beforeImage : Storage.ExternalBlob,
    afterImage : Storage.ExternalBlob,
  ) : async GalleryTypes.Transformation {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can create transformations");
    };
    let id = nextTransformationId[0];
    nextTransformationId[0] := id + 1;
    GalleryLib.createTransformation(
      transformations,
      id,
      clientName,
      description,
      beforeImage,
      afterImage,
      Time.now(),
    );
  };

  public query func listTransformations() : async [GalleryTypes.Transformation] {
    GalleryLib.listTransformations(transformations);
  };

  public query func getTransformation(id : GalleryTypes.TransformationId) : async ?GalleryTypes.Transformation {
    GalleryLib.getTransformation(transformations, id);
  };

  public shared ({ caller }) func deleteTransformation(id : GalleryTypes.TransformationId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete transformations");
    };
    GalleryLib.deleteTransformation(transformations, id);
  };

  // === Testimonials ===

  public shared ({ caller }) func createTestimonial(
    clientName : Text,
    content : Text,
    rating : Nat,
  ) : async GalleryTypes.Testimonial {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can create testimonials");
    };
    let id = nextTestimonialId[0];
    nextTestimonialId[0] := id + 1;
    GalleryLib.createTestimonial(testimonials, id, clientName, content, rating, Time.now());
  };

  public query func listTestimonials() : async [GalleryTypes.Testimonial] {
    GalleryLib.listTestimonials(testimonials);
  };

  public shared ({ caller }) func deleteTestimonial(id : GalleryTypes.TestimonialId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete testimonials");
    };
    GalleryLib.deleteTestimonial(testimonials, id);
  };
};
