class Trip < ApplicationRecord
  belongs_to :user

  validates :date, :duration, presence:true
end
