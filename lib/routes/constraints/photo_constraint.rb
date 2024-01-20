module Routes
    module Constraints
      class PhotoConstraint
        def matches?(request)
          photo_id = request.params[:id]
          Photo.exists?(id: id)
        end
      end
    end
  end