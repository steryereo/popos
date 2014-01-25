class PlacesController < ApplicationController
  def map
  end

  def new
    # @place = Place.new
  end

  def create
    # @place = Place.new(place_params)
    # if @place.save
    #   if params[:place][:photo].present?
    #     render :crop
    #   else
    #     redirect_to @place, notice: "Successfully created place."
    #   end
    # else
    #   render 'new'
    # end
  end

  def show
    @place = Place.find(params[:id])
    respond_to do |format|
      # format.html
      format.json { render json: @place }
      format.geojson do
        render json: @place.to_geojson
      end
    end
  end

  def index
    @places = Place.all
    respond_to do |format|
      # format.html
      format.json { render json: @places }
      format.geojson do
        render json: multi_geojson(@places)
      end
    end
  end

  def edit
    # @place = Place.find(params[:id])
  end

  def update
    # @place = Place.find(params[:id])
    # if @place.update_attributes(params[:place])
    #   if params[:place][:photo].present?
    #     render :crop
    #   else
    #     redirect_to @place, notice: "Successfully updated place."
    #   end
    # else
    #   render :new
    # end
  end

  def destroy
    # @place = Place.find(params[:id])
    # @place.destroy
    # redirect_to places_url, notice: "Successfully destroyed place."
  end



  private

  def multi_geojson (places)
    geojson = {
      type: "FeatureCollection",
      features: places.map(&:to_geojson)
    }
    return geojson
  end

  def place_params
    params.require(:place).permit(:name, :description)
  end

end
