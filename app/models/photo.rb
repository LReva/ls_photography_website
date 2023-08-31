class Photo < ApplicationRecord
  has_and_belongs_to_many :photo_categories
end