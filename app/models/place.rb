class Place < ActiveRecord::Base
  attr_accessor :marker_point
  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
  # after_update :crop_photo

  def crop_photo
    if crop_x.present?
      photo.recreate_versions!(:sidebar)
      self.save!
    end
  end

  # mount_uploader :image, ImageUploader
  mount_uploader :photo, PhotoUploader

  validates :name, presence: true, uniqueness: true
  validates :address, presence: true
  validates :category, presence: true
  validates :longitude, presence: true
  validates :latitude, presence: true

  scope :no_photo, -> {
    where("photo is null or photo = ''")
  }
  scope :no_credit, -> {
    where("photo is not null and photo != '' and (photo_credit is null or photo_credit = '')")
  }
  

  geocoded_by :address_in_sf

  # CALLBACKS

  before_validation :geocode, if: lambda { |l|
    l.address && !(l.latitude && l.longitude)
  }

  def url_for_photo
    u = photo_url(:sidebar)
  end

  def photo_url_large
    u = photo_url
  end

  def address_in_sf
    address + " near San Francisco, CA"
  end

  def to_jq_upload
    {
      "name" => read_attribute(:photo),
      "size" => photo.size,
      "url" => photo.url,
      "thumbnail_url" => photo_url(:thumb),
      "delete_url" => place_path(:id => id),
      "delete_type" => "DELETE" 
    }
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
        photo_credit: photo_credit,
        year_built: year_built,
        reject: reject,
        reject_reason: reject_reason,
        reject_auth: reject_auth,
        longitude: longitude,
        latitude: latitude,
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