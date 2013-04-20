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

  field :food,     type: Boolean, :default => false
  field :seating,  type: Boolean, :default => false
  field :restroom, type: Boolean, :default => false
  field :wifi,     type: Boolean, :default => false
  field :indoor,   type: Boolean, :default => false
  field :tables,   type: Boolean, :default => false

  embeds_many :contacts
  embeds_many :comments

  validates_presence_of :name, :latitude, :longitude

end
