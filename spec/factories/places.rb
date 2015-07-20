# spec/factories/places.rb

require 'ffaker'

FactoryGirl.define do
  factory :place do |p|
    name FFaker::Venue.name
    address FFaker::AddressUS.street_address
    latitude Random.new.rand(-90.000000000...90.000000000)
	longitude Random.new.rand(-180.000000000...180.000000000)
	category "POPOS"
  end
end