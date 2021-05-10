Rails.application.routes.draw do
  resources :user_courses
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #  root to: "home#index"
  resources :courses do
    resources :lessons
  end
  
  devise_for :users, controllers: { registrations: "registrations" }
  namespace :api do
    namespace :v1 do
      get "post/index"
      post :auth, to: "authentication#create"
      get "/auth" => "authentication#fetch"
    end
    namespace :v2 do
    end
  end
end
