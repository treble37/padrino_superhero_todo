class Api < Grape::API
  include PadrinoGrape

  format :json
  default_format :json

  get '/' do
    @superheroes = Superhero.all
    @superheroes
  end

  post :create do
    @superhero = Superhero.create(superhero_name: params[:superhero_name], age: params[:age])
    @superhero
  end
end
