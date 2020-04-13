Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  # root 'groups#index'
  # get 'index', to: 'groups#index'
  resources :groups, only: [:index, :new, :create, :edit, :update]

end