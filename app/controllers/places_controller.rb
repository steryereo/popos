class PlacesController < ApplicationController
  def map
  end

  def new
    @place = Place.new
  end

  def create
    @place = Place.new(place_params)
    if @place.save
      redirect_to @place
    else
      render 'new'
    end
  end
  def show
    @place = Place.find(params[:id])
    respond_to do |format|
      format.json { render json: @place }
      format.geojson do
        render json: @place.to_geojson
      end
    end
  end

  def index
    @places = Place.all
      respond_to do |format|
      format.json { render json: @places }
      format.geojson do
        render json: multi_geojson(@places)
      end
    end 
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
