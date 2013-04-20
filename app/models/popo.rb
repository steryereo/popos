class Popo
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name,         type: String
  field :description,  type: String
  field :latitude,     type: Float
  field :longitude,    type: Float
  field :address,      type: String
  field :type,         type: String
  field :year_built,   type: String

  field :directions,   type: String
  field :open_times,   type: String
  field :rating,       type: String
  field :foursquareid, type: String
  field :spurid,       type: String
  field :transportation,   type: String
  field :twitter_hash_tag, type: String
  field :pic_1,            type:  String

  field :food,     type: Boolean, :default => false
  field :seating,  type: Boolean, :default => false
  field :restroom, type: Boolean, :default => false
  field :wifi,     type: Boolean, :default => false
  field :indoor,   type: Boolean, :default => false
  field :tables,   type: Boolean, :default => false

  embeds_many :contacts
  embeds_many :comments

  validates_presence_of :name, :latitude, :longitude

  def migrate
    self.name = self[:NAME]
    self.description = self[:Descriptio]
    self.latitude = self[:coordinates][0]
    self.longitude = self[:coordinates][1]
    self.address = self[:POPOS_ADDR]
    self.pic_1 = self[:Pic_File]
    self.food = (self[:Food] == "Y")
    self.seating = (self[:Seating] == "Y")
    self.restroom = (self[:Restroom] == "Y")
  end

  def as_json(options = {})
    {
      id: self.id.to_s,
      name: self.name,
      description: self.description,
      latitude: self.latitude,
      longitude: self.longitude,
      address: self.address,
      type: self.type,
      year_built: self.year_built,

      directions: self.directions,
      open_times: self.open_times,
      rating: self.rating,
      foursquareid: self.foursquareid,
      spurid: self.spurid,
      transportation: self.transportation,
      twitter_hash_tag: self.twitter_hash_tag,
      pic_1: self.pic_1,

      food: self.food,
      seating: self.seating,
      restroom: self.restroom,
      wifi: self.wifi,
      indoor: self.indoor,
      tables: self.tables
    }
  end

end
