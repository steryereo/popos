class ChangeTypeToCategory < ActiveRecord::Migration
  def up
    rename_column :places, :type, :category
    rename_column :places, :popos_type, :popos_category
  end

  def down
    rename_column :places, :category, :type
    rename_column :places, :popos_category, :popos_type
  end
end
