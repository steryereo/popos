class ChangeLimitForOpenNotes < ActiveRecord::Migration
    def up
      change_table :places do |t|
        t.change :open_hours, :text, :limit=>nil
      end
    end

  def down
      change_table :places do |t|
        t.change :open_hours, :text, :limit=>255
    end
  end
end