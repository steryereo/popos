# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130706030004) do

  create_table "places", :force => true do |t|
    t.string   "name"
    t.string   "name_display"
    t.string   "address"
    t.string   "type"
    t.string   "popos_type"
    t.string   "neighborhood"
    t.text     "description"
    t.string   "photo_url"
    t.date     "year_built"
    t.boolean  "reject"
    t.text     "reject_reason"
    t.string   "reject_auth"
    t.decimal  "latitude",            :precision => 10, :scale => 6
    t.decimal  "longitude",           :precision => 10, :scale => 6
    t.integer  "route_id"
    t.integer  "route_order"
    t.boolean  "open"
    t.time     "open_hours"
    t.string   "open_days"
    t.string   "open_notes"
    t.boolean  "seating"
    t.boolean  "restrooms"
    t.boolean  "wifi"
    t.boolean  "views"
    t.boolean  "food"
    t.boolean  "indoor"
    t.boolean  "exercise"
    t.boolean  "art"
    t.boolean  "dogs"
    t.boolean  "playground"
    t.text     "seating_notes"
    t.text     "restrooms_notes"
    t.text     "wifi_notes"
    t.text     "views_notes"
    t.text     "food_notes"
    t.text     "exercise_notes"
    t.text     "art_notes"
    t.text     "dogs_notes"
    t.text     "playground_notes"
    t.text     "transportation"
    t.integer  "popos_id_spur"
    t.string   "popos_rating_spur"
    t.boolean  "popos_downtown_plan"
    t.text     "notes"
    t.datetime "created_at",                                         :null => false
    t.datetime "updated_at",                                         :null => false
  end

end
