class Destination < ApplicationRecord
  belongs_to :user
  has_many :activity
end