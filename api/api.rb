class Api < Grape::API
  include PadrinoGrape

  format :json
  default_format :json

  get '/' do
    @superheroes = Superhero.all
    @superheroes.to_json
  end

  post :create do
    @superhero = Superhero.create(superhero_name: params[:superhero_name], age: params[:age])
    @superhero.to_json
  end
end
