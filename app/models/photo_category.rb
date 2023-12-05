class PhotoCategory < ApplicationRecord
  has_many :photo_assignments
  has_many :photos, through: :photo_assignments

  validates :name, presence: true, uniqueness: true

  def create
    @category = PhotoCategory.new(attributes = {})
    @category.save
  end

end