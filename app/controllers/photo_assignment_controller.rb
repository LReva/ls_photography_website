class PhotoAssignmentsController < ApplicationController
    def index
        @photo_assignments = PhotoAssignment.all
    end

    def show
        @photo_assignments = PhotoAssignment.find(params[:id])
    end

    def new
        @photo_assignments = PhotoAssignment.new
    end

    def create
        @photo_assignments = PhotoAssignment.new(category_params)

        if @photo_assignments.save
            redirect_to @photo_assignments, notice: 'Photo Assignments were successfully created.'
        else
            render :new
        end
    end

    private

    def photo_assignments_params
        params.require(:photo_assignments).permit(:photo, :photo_category)
    end
end
