class Popo
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name,         type: String
  field :latitude,     type: Float
  field :longitude,    type: Float
  field :address,      type: String
  field :directions,   type: String
  field :open_time,    type: Time
  field :close_time,   type: Time
  field :rating,       type: Float
  field :foursquareid, type: String
  field :twitter_hash_tag, type: String

  embeds_many :amenities
  embeds_many :contacts
  embeds_many :comments

  validates_presence_of :name, :latitude, :longitude

end
