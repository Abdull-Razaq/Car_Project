class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
  def index
    users = User.all
    render json: users
  end

  def show
    user = find_user
    render json: user
  end

  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def update
    user = find_user
    user.update(user_params)
    render json: user
  end

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end

  private

  def find_user
    User.find(params[:id])
  end

  def user_params
    params.permit(:username, :email, :password)
  end

  def render_not_found_response
    render json: { error: "User not found" }, status: :not_found
  end
end
