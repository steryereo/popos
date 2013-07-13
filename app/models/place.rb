class Place < ActiveRecord::Base
    attr_accessible :name, :description, :name_display, :address, :category, :popos_category, :neighborhood, :photo_url, :year_built, :reject, :reject_reason, :reject_auth, :longitude, :latitude, :marker_point, :route_id, :route_order, :open, :open_hours, :open_days, :open_notes, :seating, :restrooms, :wifi, :views, :food, :indoor, :exercise, :art, :dogs, :playground, :seating_notes, :restrooms_notes, :wifi_notes, :views_notes, :food_notes, :exercise_notes, :art_notes, :dogs_notes, :playground_notes, :transportation, :popos_id_spur, :popos_rating_spur, :popos_downtown_plan, :notes
    attr_accessor :marker_point
    
    validates :name, presence: true, uniqueness: true
    validates :address, presence: true
    validates :category, presence: true
    validates :longitude, presence: true
    validates :latitude, presence: true


  geocoded_by :address_in_sf

  # CALLBACKS

  before_validation :geocode, if: lambda { |l|
    l.address && !(l.latitude && l.longitude)
  }

  def address_in_sf
    address + ", San Francisco, CA"
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
        photo_url: photo_url,
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
