class AddAdventureNameToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :adventure_name, :string
    add_index :routes, :adventure_name
  end
end
