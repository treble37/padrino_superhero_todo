PadrinoSuperheroTodo::App.controllers :superheroes do
  get :index do
    @superheroes = Superhero.all
  end
end
