PadrinoSuperheroTodo::App.controllers :superheroes do
  get :index do
    @superheroes = Superhero.all
    render 'superheroes/index'
  end
end
