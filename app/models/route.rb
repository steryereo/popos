class Route < ActiveRecord::Base
  attr_accessible :description, :length_in_miles, :name

  has_many :route_points
  has_many :places, through: :route_points


  validates :name, presence: true, uniqueness: true
end
