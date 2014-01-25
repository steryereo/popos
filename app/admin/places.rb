ActiveAdmin.register Place do
  config.sort_order = "name_asc"
  form :html => { :enctype => "multipart/form-data" } do |f|
    # uploader = f.object.image
    # direct_upload_form_for uploader do |g|
    #   g.file_field :image
    #   g.submit "Upload Image"
    # end
    f.inputs "Details" do
      f.input :photo, :as => :file, :hint => f.template.image_tag(f.object.url_for_photo.to_s)
      f.input :photo_credit
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
      # f.input :photo_url
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

  show do |place|
    attributes_table do
      row :photo do
        columns do
          column :min_width => "520px", :max_width => "50%" do
            ul(:style => "list-style: none; ") do
              li image_tag(place.photo_url(:large).to_s, :width => '500')
              li para(place.photo_url(:large).to_s)
            end
          end
          column :min_width => "400px", :max_width => "30%" do
            ul(:style => "list-style: none; ") do
              li image_tag(place.photo_url(:sidebar).to_s)
              li para place.photo_url(:sidebar).to_s
            end
          end
        end
      end
      row :photo_credit
      # row :url_for_photo
      row :name
      row :name_display
      row :address
      row :category
      row :popos_category
      row :neighborhood
      row :description
      row :year_built
      row :reject
      row :reject_reason
      row :reject_auth
      row :longitude
      row :latitude
      row :route_id
      row :route_order
      row :open
      row :open_hours
      row :open_days
      row :open_notes
      row :seating
      row :restrooms
      row :wifi
      row :views
      row :food
      row :indoor
      row :exercise
      row :art
      row :dogs
      row :playground
      row :seating_notes
      row :restrooms_notes
      row :wifi_notes
      row :views_notes
      row :food_notes
      row :exercise_notes
      row :art_notes
      row :dogs_notes
      row :playground_notes
      row :transportation
      row :popos_id_spur
      row :popos_rating_spur
      row :popos_downtown_plan
      row :notes
    end
    active_admin_comments
  end

  index do
    column :name
    column :address
    column "Photo" do |place|
      if (place.url_for_photo != "" && place.url_for_photo != nil)
        link_to(image_tag(place.url_for_photo, :height => '100'), admin_place_path(place))
      end
    end
    # column "Photo Url", :url_for_photo
    column :category
    column :neighborhood

    actions
  end

  member_action :update, :method => :put do
    # debugger
    @place = Place.find(params[:id])
    if params[:place].present?
      if @place.update_attributes(params[:place])
        if params[:place][:photo].present?
          render :admin_crop
        else
          if params[:place][:crop_x].present?
            @place.crop_photo
          end
          redirect_to admin_place_path(@place)
        end
      else
        # render :new
      end
    # else
    #   redirect_to admin_place_path(@place), :action => :show
    end
  end
end
