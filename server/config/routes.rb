Rails.application.routes.draw do
  devise_for :users
  namespace :v1 do
    resources :projects do
      resources :tasks
    end
    resource :sessions, only:[:create, :destroy]
  end
end
