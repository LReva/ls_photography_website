class PhotoAssignment < ApplicationRecord
  belongs_to :photo
  belongs_to :photo_category
  
  validates :photo_id, uniqueness: { scope: :photo_category_id }
  validates :photo, :photo_category, presence: true
end