class CreateRoutePoints < ActiveRecord::Migration
  def change
    create_table :route_points do |t|
      t.integer :route_order
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
      t.references :route
      t.references :place

      t.timestamps
    end
    add_index :route_points, :route_id
    add_index :route_points, :place_id
  end
end
