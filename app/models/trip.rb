class Trip < ApplicationRecord
  belongs_to :user

  validates :name, :duration, :description, presence: true
  validates :description, length:{maximum: 50}

end
