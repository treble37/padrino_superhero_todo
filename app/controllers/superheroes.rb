PadrinoSuperheroTodo::App.controllers :posts do
  get :index do
    @superheroes = Superhero.all
    render 'superheroes/index'
  end
end
