class RoutePoint < ActiveRecord::Base
  belongs_to :route
  belongs_to :place
  #attr_accessible :latitude, :longitude, :route_order
end
