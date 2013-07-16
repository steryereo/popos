class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.string :name
      t.text :description
      t.float :length_in_miles

      t.timestamps
    end
  end
end
