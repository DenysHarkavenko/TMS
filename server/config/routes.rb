Rails.application.routes.draw do
  # devise_for :users
  namespace :v1 do
    resources :projects do
      resources :tasks
    end
    resources :sessions, only:[:create, :destroy]
  end
end
