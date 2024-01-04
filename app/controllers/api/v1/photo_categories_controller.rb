class Api::V1::PhotoCategoriesController < ApplicationController
    before_action :set_photo_category, only: [:show]

    def index
        @photo_categories = PhotoCategory.all
        render json: @photo_categories
    end

    def show
        render json: @photo_category
    end

    private

    def set_photo_category
        @photo_category = PhotoCategory.find(params[:name])
    end

    def photo_params
        params.require(:photo_category).permit(:name)
    end

end
      