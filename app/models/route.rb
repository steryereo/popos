class Route < ActiveRecord::Base
  attr_accessible :description, :length_in_miles, :name

  has_many :route_points
  has_many :places, through: :route_points
  belongs_to :adventure

  validates :name, presence: true, uniqueness: true

  def adventure_id
  	return nil
  end

  def to_geojson
    {
      id: id,
      type: "Feature",
      geometry: {
        type: "LineString" ,
        coordinates: points_sorted
      },
      properties: {
        name: name,
    	length_in_miles: length_in_miles,
    	description: description
      }
    }
  end

  def points_sorted
	p = route_points.sort_by{|e| e[:route_order]}
	result = []
	p.each {|point| result.push([ point.longitude.to_f, point.latitude.to_f ])}
	return result
  end
end