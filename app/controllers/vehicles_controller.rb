class VehiclesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    # GET /vehicle
  def index
    vehicles = Vehicle.all
    render json: vehicles
  end

  # POST /vehicles
  def create
    vehicle = Vehicle.create(vehicle_params)
    render json: vehicle, status: :created
  end

  # GET /vehicles/:id
  def show
    vehicle = find_vehicle
    render json: vehicle
  end

  # PATCH /vehicles/:id
  def update
    vehicle = find_vehicle
    vehicle.update(vehicle_params)
    render json: vehicle
  end

  # DELETE /vehicles/:id
  def destroy
    vehicle = find_vehicle
    vehicle.destroy
    head :no_content
  end

  private

  def find_vehicle
    Vehicle.find(params[:id])
  end

  def vehicle_params
    params.permit(:make, :model, :transmission, :fuel_type)
  end

  def render_not_found_response
    render json: { error: "Vehicle not found" }, status: :not_found
  end
end
