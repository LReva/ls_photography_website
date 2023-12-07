class Api::V1::CategorizedPhotosController < ApplicationController
    before_action :set_categorized_photos, only: [:show]

    def index
        @all_photo_assignments = PhotoAssignment.all
        render json: @all_photo_assignments
    end

    def show
        render json: @categorized_photos
    end

    private

    def set_categorized_photos
        @categorized_photos = []
        category_to_find = params[:id]
        photos = PhotoAssignment.where(photo_category_id: category_to_find)
        photos.each do |photo|
            photo_in_the_category = Photo.find(photo.photo_id)
            @categorized_photos.push(photo_in_the_category)
        end
    end

    def categorized_photos_params
        params.require(:categorized_photos).permit(:name, 
                                                   :photo_data,
                                                   :description)
    end

end
      