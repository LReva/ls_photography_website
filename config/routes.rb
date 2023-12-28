Rails.application.routes.draw do
  root 'home#index'
  get 'photos', to: 'pages#photos'
  get 'photos/:id', to: 'pages#photo_view'
  get 'photos/:category_name', to: 'pages#category_view'

  namespace :api do
    namespace :v1 do
      resources :photos
      resources :photo_categories
      resources :categorized_photos
    end
  end

end
