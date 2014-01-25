class AddPhotoCreditToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :photo_credit, :string
  end
end
