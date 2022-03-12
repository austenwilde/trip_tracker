class User < ApplicationRecord
  has_many :trips, dependent: :destroy
  validates :name, :email, :password presence: true
  validates :password, length: { minimum:8 }
  validates :email, :password, uniqueness: true 
end
