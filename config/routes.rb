require 'routes/constraints/category_constraint'

Rails.application.routes.draw do
  root 'home#index'
  get '/:category_name', to: 'categories#index'
  get '/photos', to: 'all_photos#index'
  get '/photos/:id', to: 'photo#index'

  namespace :api do
    namespace :v1 do
      resources :photos
      resources :photo_categories
      resources :categorized_photos, only: [:index, :show]
    end
  end

end
