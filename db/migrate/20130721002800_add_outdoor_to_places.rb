class AddOutdoorToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :outdoor, :boolean
  end
end
