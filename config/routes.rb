Popos::Application.routes.draw do

  devise_for :users

  match "/index" => "home#index"

  root :to => "home#index"

end
