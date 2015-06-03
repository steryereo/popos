class Adventure < ActiveRecord::Base
  #attr_accessible :name

  has_many :routes
  has_many :route_points, through: :routes
  has_many :places, through: :route_points
end
