class Api::V1::PhotosController < ApplicationController
  before_action :set_photo, only: [:show]

  def index
    @photos = Photo.all
    render json: @photos
  end

  def show
    render json: @photo
  end

  private

  def set_photo
    @photo = Photo.find(params[:id])
  end

  def photo_params
    params.require(:photo).permit(:name, 
                                  :description, 
                                  :photo_data)
  end

end
