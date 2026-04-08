import Storage "mo:caffeineai-object-storage/Storage";
import Common "common";

module {
  public type TransformationId = Common.Id;
  public type TestimonialId = Common.Id;

  public type Transformation = {
    id : TransformationId;
    clientName : Text;
    description : Text;
    beforeImage : Storage.ExternalBlob;
    afterImage : Storage.ExternalBlob;
    createdAt : Common.Timestamp;
  };

  public type Testimonial = {
    id : TestimonialId;
    clientName : Text;
    content : Text;
    rating : Nat;
    createdAt : Common.Timestamp;
  };
};
