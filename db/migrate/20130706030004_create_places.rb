class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.string :name_display
      t.string :address
      t.string :category
      t.string :popos_category
      t.string :neighborhood
      t.text :description
      t.text :photo_url
      t.date :year_built
      t.boolean :reject
      t.text :reject_reason
      t.string :reject_auth
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
     # t. :marker_point
      t.integer :route_id
      t.integer :route_order
      t.boolean :open
      t.string :open_hours
      t.string :open_days
      t.text :open_notes
      t.boolean :seating
      t.boolean :restrooms
      t.boolean :wifi
      t.boolean :views
      t.boolean :food
      t.boolean :indoor
      t.boolean :exercise
      t.boolean :art
      t.boolean :dogs
      t.boolean :playground
      t.text :seating_notes
      t.text :restrooms_notes
      t.text :wifi_notes
      t.text :views_notes
      t.text :food_notes
      t.text :exercise_notes
      t.text :art_notes
      t.text :dogs_notes
      t.text :playground_notes
      t.text :transportation
      t.integer :popos_id_spur
      t.string :popos_rating_spur
      t.boolean :popos_downtown_plan
      t.text :notes
      
      t.timestamps
    end
  end
end
