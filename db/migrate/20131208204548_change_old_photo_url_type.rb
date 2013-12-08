class ChangeOldPhotoUrlType < ActiveRecord::Migration
  def up
  	change_column :places, :old_photo_url, :text, :limit => nil
  end

  def down
  	change_column :places, :old_photo_url, :string
  end
end
