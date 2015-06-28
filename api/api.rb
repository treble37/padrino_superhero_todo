class Api < Grape::API
  include PadrinoGrape

  get :hello do
    { hello: "world"}
  end
end
