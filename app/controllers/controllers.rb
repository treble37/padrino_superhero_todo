PadrinoSuperheroTodo::App.controllers :superheroes do

  get :index do
    @superheroes = Superhero.all
    render 'superheroes/index'
  end

  get :api_index do
    gon.superheroes = HTTParty.get('http://localhost:3000/api/', {})
    render 'superheroes_api/index'
  end
end
