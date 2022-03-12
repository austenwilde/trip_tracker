class Location < ApplicationRecord
  belongs_to :trip

  validates :name, :description, presence: true
end
