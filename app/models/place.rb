class Place < ActiveRecord::Base
  attr_accessible :photo, :name, :description, :name_display, :address, :category, :popos_category, :neighborhood, :old_photo_url, :year_built, :reject, :reject_reason, :reject_auth, :longitude, :latitude, :marker_point, :route_id, :route_order, :open, :open_hours, :open_days, :open_notes, :seating, :restrooms, :wifi, :views, :food, :indoor, :exercise, :art, :dogs, :playground, :seating_notes, :restrooms_notes, :wifi_notes, :views_notes, :food_notes, :exercise_notes, :art_notes, :dogs_notes, :playground_notes, :transportation, :popos_id_spur, :popos_rating_spur, :popos_downtown_plan, :notes
  attr_accessor :marker_point
  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
  attr_accessible :crop_x, :crop_y, :crop_w, :crop_h
  after_update :crop_photo

  def crop_photo
    photo.recreate_versions! if crop_x.present?
  end
  
  # mount_uploader :image, ImageUploader
  mount_uploader :photo, PhotoUploader

  validates :name, presence: true, uniqueness: true
  validates :address, presence: true
  validates :category, presence: true
  validates :longitude, presence: true
  validates :latitude, presence: true

  scope :no_photo, where(:photo => nil)


  geocoded_by :address_in_sf

  # CALLBACKS

  before_validation :geocode, if: lambda { |l|
    l.address && !(l.latitude && l.longitude)
  }

  def url_for_photo
    u = photo_url(:sidebar) || old_photo_url || "" #|| "/img/popos/no_photo.png"
    u = u.sub(/^\/?img/, "http://urbanwander.org/img")
  end

  def photo_url_large
    u = photo_url || old_photo_url || "" #|| "/img/popos/no_photo.png"
    u = u.sub(/^\/?img/, "http://urbanwander.org/img")
  end

  def address_in_sf
    address + " near San Francisco, CA"
  end

  def to_geojson
    {
      id: id,
      type: "Feature",
      geometry: {
        type: "Point" ,
        coordinates: [ longitude.to_f, latitude.to_f ]
      },
      properties: {
        name: name,
        name_display: name_display,
        address: address,
        category: category,
        popos_category: popos_category,
        neighborhood: neighborhood,
        description: description,
        photo_url: url_for_photo,
        photo_url_large: photo_url_large,
        year_built: year_built,
        reject: reject,
        reject_reason: reject_reason,
        reject_auth: reject_auth,
        longitude: longitude,
        latitude: latitude,
        #       marker_point: marker_point,
        route_id: route_id,
        route_order: route_order,
        open: open,
        open_hours: open_hours,
        open_days: open_days,
        open_notes: open_notes,
        seating: seating,
        restrooms: restrooms,
        wifi: wifi,
        views: views,
        food: food,
        indoor: indoor,
        exercise: exercise,
        art: art,
        dogs: dogs,
        playground: playground,
        seating_notes: seating_notes,
        restrooms_notes: restrooms_notes,
        wifi_notes: wifi_notes,
        views_notes: views_notes,
        food_notes: food_notes,
        exercise_notes: exercise_notes,
        art_notes: art_notes,
        dogs_notes: dogs_notes,
        playground_notes: playground_notes,
        transportation: transportation,
        popos_id_spur: popos_id_spur,
        popos_rating_spur: popos_rating_spur,
        popos_downtown_plan: popos_downtown_plan,
        notes: notes
      }
    }
  end
end