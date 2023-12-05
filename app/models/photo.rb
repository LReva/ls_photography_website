class Photo < ApplicationRecord
  has_many :photo_assignments
  has_many :photo_categories, through: :photo_assignments

  validates :name, presence: true, uniqueness: true
  validates :photo_data, :created_at, :updated_at, :description, presence: true
  
  def create
    @photo = Photo.new(attributes = {})
    @photo.save
  end

end