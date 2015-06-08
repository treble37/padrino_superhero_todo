class Superhero < ActiveRecord::Base
  # Fields
  field :superhero_name, :as => :string
  field :age, :as => :integer
end
