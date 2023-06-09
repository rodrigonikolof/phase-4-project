Rails.application.routes.draw do
  get 'fallback/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  get 'me', to: 'students#show'
  post 'signup', to: 'students#create'
  patch 'update', to: 'students#update'

  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  
  
  get '/enrolments', to: 'enrolments#index'
  delete '/enrolments/:id', to: 'enrolments#destroy'
  post '/enrolments', to: 'enrolments#create'
  
  get 'courses', to: 'courses#index'

  get 'houses', to: 'houses#index'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
