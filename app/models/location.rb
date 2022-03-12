class Location < ApplicationRecord
  belongs_to :trip
  has_one :addresses, dependent: :destroy

  validates :name, :description, presence: true
end
