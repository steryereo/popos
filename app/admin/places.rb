ActiveAdmin.register Place do
  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do

      f.input :image, :as => :file, :hint => f.template.image_tag(f.object.image_url.to_s)
      f.input :name
      f.input :name_display
      f.input :address
      f.input :category
      f.input :popos_category
      f.input :neighborhood
      f.input :description
      f.input :year_built
      f.input :reject
      f.input :reject_reason
      f.input :reject_auth
      f.input :longitude
      f.input :latitude
      f.input :route_id
      f.input :route_order
      f.input :photo_url
      f.input :open
      f.input :open_hours
      f.input :open_days
      f.input :open_notes
      f.input :seating
      f.input :restrooms
      f.input :wifi
      f.input :views
      f.input :food
      f.input :indoor
      f.input :exercise
      f.input :art
      f.input :dogs
      f.input :playground
      f.input :seating_notes
      f.input :restrooms_notes
      f.input :wifi_notes
      f.input :views_notes
      f.input :food_notes
      f.input :exercise_notes
      f.input :art_notes
      f.input :dogs_notes
      f.input :playground_notes
      f.input :transportation
      f.input :popos_id_spur
      f.input :popos_rating_spur
      f.input :popos_downtown_plan
      f.input :notes
    end  
    f.buttons
  end
end

