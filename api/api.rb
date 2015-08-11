require 'pry'

class Api < Grape::API
  include PadrinoGrape

  format :json
  default_format :json

  get '/' do
    @superheroes = Superhero.all
    @superheroes
  end

  get '/:id' do
    @superhero = Superhero.where(:id => params[:id])
  end

  post :create do
    @superhero = Superhero.create(superhero_name: params[:superhero_name], age: params[:age])
    @superhero
  end

  put :update do
    @superhero = Superhero.update(id: params[:id], superhero_name: params[:superhero_name], age: params[:age])
    @superhero
  end
end
