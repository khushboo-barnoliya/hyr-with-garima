import List "mo:core/List";
import Time "mo:core/Time";
import Storage "mo:caffeineai-object-storage/Storage";
import Types "../types/gallery";
import Common "../types/common";

module {
  public func createTransformation(
    transformations : List.List<Types.Transformation>,
    nextId : Nat,
    clientName : Text,
    description : Text,
    beforeImage : Storage.ExternalBlob,
    afterImage : Storage.ExternalBlob,
    now : Common.Timestamp,
  ) : Types.Transformation {
    let t : Types.Transformation = {
      id = nextId;
      clientName;
      description;
      beforeImage;
      afterImage;
      createdAt = now;
    };
    transformations.add(t);
    t;
  };

  public func getTransformation(
    transformations : List.List<Types.Transformation>,
    id : Types.TransformationId,
  ) : ?Types.Transformation {
    transformations.find(func(t) { t.id == id });
  };

  public func listTransformations(
    transformations : List.List<Types.Transformation>,
  ) : [Types.Transformation] {
    transformations.toArray();
  };

  public func deleteTransformation(
    transformations : List.List<Types.Transformation>,
    id : Types.TransformationId,
  ) : () {
    let filtered = transformations.filter(func(t) { t.id != id });
    transformations.clear();
    transformations.append(filtered);
  };

  public func createTestimonial(
    testimonials : List.List<Types.Testimonial>,
    nextId : Nat,
    clientName : Text,
    content : Text,
    rating : Nat,
    now : Common.Timestamp,
  ) : Types.Testimonial {
    let t : Types.Testimonial = {
      id = nextId;
      clientName;
      content;
      rating;
      createdAt = now;
    };
    testimonials.add(t);
    t;
  };

  public func listTestimonials(
    testimonials : List.List<Types.Testimonial>,
  ) : [Types.Testimonial] {
    testimonials.toArray();
  };

  public func deleteTestimonial(
    testimonials : List.List<Types.Testimonial>,
    id : Types.TestimonialId,
  ) : () {
    let filtered = testimonials.filter(func(t) { t.id != id });
    testimonials.clear();
    testimonials.append(filtered);
  };
};
