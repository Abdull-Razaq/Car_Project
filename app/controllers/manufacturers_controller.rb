class ManufacturersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /manufacturers
  def index
    manufacturers = Manufacturer.all

    render json: manufacturers
  end

  # GET /manufacturers/1
  def show
    manufacturer = set_manufacturer

    render json: manufacturer
  end

  # POST /manufacturers
  def create
    manufacturer = Manufacturer.create(manufacturer_params)
    render json: manufacturer, status: :created
  end

  # PATCH/PUT /manufacturers/1
  def update
    manufacturer = set_manufacturer
    if manufacturer
      manufacturer.update(manufacturer_params)
      render json: manufacturer
    else
      render json: manufacturer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /manufacturers/1
  def destroy
    manufacturer = set_manufacturer
    manufacturer.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manufacturer
      manufacturer = Manufacturer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def manufacturer_params
      params.require(:manufacturer).permit(:name, :country_of_origin)
    end

    def render_not_found_response
      render json: { error: "Manufacturer not found" }, status: :not_found
    end
end
