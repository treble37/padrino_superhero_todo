PadrinoSuperheroTodo::App.controllers :superheroes do

  get :index do
    @superheroes = Superhero.all
    render 'superheroes/index'
  end

  get :api_index do
    render 'superheroes_api/index'
  end
end
