Rails.application.routes.draw do
  get '*anything' => 'metool#index'
  root to: 'metool#index'
end
