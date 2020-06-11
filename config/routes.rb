Rails.application.routes.draw do
  resources :activities
  get 'main/index'
  resources :destinations
  devise_for :users

  get '/destinations/:destination_id/activities' => 'activities#index', as: 'destination_activitiess'
  get '/destinations/:destination_id/activities/:id' => 'activities#show'
  get '/destinations/:destination_id/activities/new' => 'activities#create', as: 'new_destination_activity'
  post '/destinations/:destination_id/activities' => 'activities#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end