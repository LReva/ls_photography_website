class PhotoCategoriesController < ApplicationController
    def index
        @categories = PhotoCategory.all
    end

    def show
        @category = PhotoCategory.find(params[:id])
    end

    def new
        @category = PhotoCategory.new
    end

    def create
        @category = PhotoCategory.new(category_params)

        if @category.save
            redirect_to @category, notice: 'Category was successfully created.'
        else
            render :new
        end
    end

    private

    def category_params
        params.require(:category).permit(:name)
    end
end
