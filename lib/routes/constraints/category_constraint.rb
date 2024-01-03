module Routes
    module Constraints
      class CategoryConstraint
        def matches?(request)
          category_name = request.params[:category_name]
          PhotoCategory.exists?(name: category_name)
        end
      end
    end
  end