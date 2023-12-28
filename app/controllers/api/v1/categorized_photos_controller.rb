class Api::V1::CategorizedPhotosController < ApplicationController
    before_action :set_categorized_photos, only: [:show]

    def index
        @categories_with_photo_example = []
        all_photo_assignments = PhotoAssignment.all
        all_photo_assignments_random = all_photo_assignments.group_by(&:photo_category_id).map { |_, group| group.sample }
        all_photo_assignments_random.each do |photo|
            photo_in_the_category = Photo.find(photo.photo_id)
            category = PhotoCategory.find(photo.photo_category_id)
            category_photo = { :photo => photo_in_the_category, :category => category }
            @categories_with_photo_example.push(category_photo)
        end
        render json: @categories_with_photo_example
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
      