Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :photos
      resources :photo_categories
      resources :categorized_photos
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
