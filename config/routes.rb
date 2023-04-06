Rails.application.routes.draw do
  get 'fallback/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  post 'signup', to: 'students#create'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'session#destroy'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
