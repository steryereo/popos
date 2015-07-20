# spec/models/place_spec.rb
require 'rails_helper'

describe Place do
  it 'has a valid factory' do
    expect(build(:place)).to be_valid
  end

  it 'is invalid without a name' do
    expect(build(:place, name: nil)).to_not be_valid
  end

    it 'is invalid without an address' do
    expect(build(:place, address: nil)).to_not be_valid
  end
end