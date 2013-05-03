require 'csv'
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

  field :directions,    type: String
  field :open_times,    type: String
  field :rating,        type: String
  field :spur_rating,   type: String
  field :downtown_plan, type: Boolean

  field :foursquareid,     type: String
  field :spurid,           type: String
  field :transportation,   type: String
  field :twitter_hash_tag, type: String
  field :pic_1,            type: String

  field :food,     type: Boolean, :default => false
  field :food_notes,     type: String
  field :seating,  type: Boolean, :default => false
  field :seating_notes,  type: String
  field :restroom, type: Boolean, :default => false
  field :restroom_notes, type: String

  field :wifi,     type: Boolean, :default => false
  field :indoor,   type: Boolean, :default => false
  field :tables,   type: Boolean, :default => false
  field :notes,    type: String

  embeds_many :contacts
  embeds_many :comments

  validates_presence_of :name

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

  def self.import
    import_fields = {
      'downtown_plan' => :downtown_plan
    }

    popos = Popo.all
    csv_text = File.read("sf_popos_import.csv")
    csv = CSV.parse(csv_text, :headers => true)
    csv.each do |row|
      row = row.to_hash.with_indifferent_access
      if !row['pic_1'].blank?
        popo = popos.select{ |p| !p.pic_1.match(row['pic_1']).nil? }.first
        if popo
          import_fields.each do |k,v|
            puts "update #{v} <#{popo[v]}> to <#{row[k]}>"
            popo[v] = row[k].to_i == 1
          end
          puts "--- saving"
          popo.save!
        else
          puts "No popo found #{row['pic_1']}"
        end
      end
    end
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
      downtown_plan: self.downtown_plan,

      directions: self.directions,
      open_times: self.open_times,
      rating: self.rating,
      spur_rating: self.spur_rating ? self.spur_rating.downcase : nil,
      foursquareid: self.foursquareid,
      spurid: self.spurid,
      transportation: self.transportation,
      twitter_hash_tag: self.twitter_hash_tag,
      pic_1: self.pic_1,

      food: self.food,
      food_notes: self.food_notes,
      seating: self.seating,
      seating_notes: self.seating_notes,
      restroom: self.restroom,
      restroom_notes: self.restroom_notes,
      wifi: self.wifi,
      indoor: self.indoor,
      tables: self.tables
    }
  end

end
