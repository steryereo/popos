class RoutesController < ApplicationController
  def map
  end

  def new
    @route = Route.new
  end

  def create
    @route = Route.new(route_params)
    if @route.save
      redirect_to @route
    else
      render 'new'
    end
  end
  def show
    @route = Route.find(params[:id])
    respond_to do |format|
      format.json { render json: @route }
      format.geojson do
        render json: @route.to_geojson
      end
    end
  end

  def index
    @routes = Route.all
      respond_to do |format|
      format.json { render json: @routes }
      format.geojson do
        render json: multi_geojson(@routes)
      end
    end 
  end

  private

    def multi_geojson (routes)
      geojson = {
        type: "FeatureCollection",
        features: routes.map(&:to_geojson)
      }
      return geojson
    end  

    def route_params
      params.require(:route).permit(:name, :description)
    end
end
