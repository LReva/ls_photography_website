class PhotosController < ApplicationController
    def index
        @photos = Photo.all
    end

    def show
        @photo = Photo.find(params[:id])
    end

    def new
        @photo = Photo.new
    end

    def create
        @photo = Photo.new(category_params)

        if @photo.save
            redirect_to @photo, notice: 'Photo was successfully created.'
        else
            render :new
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:name, :description, :photo_data, :created_at, :updated_at)
    end
end
