class ChangeDataTypeForOpenNotes < ActiveRecord::Migration
    def up
      change_table :places do |t|
        t.change :open_hours, :text
      end
    end

  def down
      change_table :places do |t|
      t.change :open_hours, :string
    end
  end
end
