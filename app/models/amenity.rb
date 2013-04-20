class Amenity
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name,     type: String
  field :details,  type: String

  embedded_in :popo

  validates_presence_of :name

end
