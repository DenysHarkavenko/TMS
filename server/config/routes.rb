Rails.application.routes.draw do
  namespace :api do
    resources :projects do
      resources :tasks
    end
  end
end
