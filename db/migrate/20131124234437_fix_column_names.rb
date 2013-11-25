class FixColumnNames < ActiveRecord::Migration
 def change
    change_table :places do |t|
      t.rename :photo_url, :old_photo_url
      t.rename :image, :photo
    end
  end
end
