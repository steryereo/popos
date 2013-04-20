Popos::Application.routes.draw do

  resources :popos

  devise_for :users

  match "/index" => "home#index"

  root :to => "home#index"

end
