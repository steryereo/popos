class PoposController < ApplicationController
  # GET /popos
  # GET /popos.json
  def index
    @popos = Popo.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @popos }
    end
  end

  # GET /popos/1
  # GET /popos/1.json
  def show
    @popo = Popo.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @popo }
    end
  end

  # GET /popos/new
  # GET /popos/new.json
  def new
    @popo = Popo.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @popo }
    end
  end

  # GET /popos/1/edit
  def edit
    @popo = Popo.find(params[:id])
  end

  # POST /popos
  # POST /popos.json
  def create
    @popo = Popo.new(params[:popo])

    respond_to do |format|
      if @popo.save
        format.html { redirect_to @popo, notice: 'Popo was successfully created.' }
        format.json { render json: @popo, status: :created, location: @popo }
      else
        format.html { render action: "new" }
        format.json { render json: @popo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /popos/1
  # PUT /popos/1.json
  def update
    @popo = Popo.find(params[:id])

    respond_to do |format|
      if @popo.update_attributes(params[:popo])
        format.html { redirect_to @popo, notice: 'Popo was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @popo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /popos/1
  # DELETE /popos/1.json
  def destroy
    @popo = Popo.find(params[:id])
    @popo.destroy

    respond_to do |format|
      format.html { redirect_to popos_url }
      format.json { head :no_content }
    end
  end

end
