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

ActiveRecord::Schema.define(:version => 20140204221453) do

  create_table "active_admin_comments", :force => true do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   :null => false
    t.string   "resource_type", :null => false
    t.integer  "author_id"
    t.string   "author_type"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "active_admin_comments", ["author_type", "author_id"], :name => "index_active_admin_comments_on_author_type_and_author_id"
  add_index "active_admin_comments", ["namespace"], :name => "index_active_admin_comments_on_namespace"
  add_index "active_admin_comments", ["resource_type", "resource_id"], :name => "index_active_admin_comments_on_resource_type_and_resource_id"

  create_table "admin_users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "admin_users", ["email"], :name => "index_admin_users_on_email", :unique => true
  add_index "admin_users", ["reset_password_token"], :name => "index_admin_users_on_reset_password_token", :unique => true

  create_table "adventures", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "places", :force => true do |t|
    t.string   "name"
    t.string   "name_display"
    t.string   "address"
    t.string   "category"
    t.string   "popos_category"
    t.string   "neighborhood"
    t.text     "description"
    t.text     "old_photo_url"
    t.date     "year_built"
    t.boolean  "reject"
    t.text     "reject_reason"
    t.string   "reject_auth"
    t.decimal  "latitude",            :precision => 10, :scale => 6
    t.decimal  "longitude",           :precision => 10, :scale => 6
    t.integer  "route_id"
    t.integer  "route_order"
    t.boolean  "open"
    t.string   "open_hours"
    t.string   "open_days"
    t.text     "open_notes"
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
    t.boolean  "outdoor"
    t.string   "photo"
    t.string   "photo_credit"
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.integer  "resource_id"
    t.string   "resource_type"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "roles", ["name", "resource_type", "resource_id"], :name => "index_roles_on_name_and_resource_type_and_resource_id"
  add_index "roles", ["name"], :name => "index_roles_on_name"

  create_table "route_points", :force => true do |t|
    t.integer  "route_order"
    t.decimal  "latitude",    :precision => 10, :scale => 6
    t.decimal  "longitude",   :precision => 10, :scale => 6
    t.integer  "route_id"
    t.integer  "place_id"
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
  end

  add_index "route_points", ["place_id"], :name => "index_route_points_on_place_id"
  add_index "route_points", ["route_id"], :name => "index_route_points_on_route_id"

  create_table "routes", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.float    "length_in_miles"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "adventure_name"
  end

  add_index "routes", ["adventure_name"], :name => "index_routes_on_adventure_name"

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "users", ["confirmation_token"], :name => "index_users_on_confirmation_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  create_table "users_roles", :id => false, :force => true do |t|
    t.integer "user_id"
    t.integer "role_id"
  end

  add_index "users_roles", ["user_id", "role_id"], :name => "index_users_roles_on_user_id_and_role_id"

end
