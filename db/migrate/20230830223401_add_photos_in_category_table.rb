class AddPhotosInCategoryTable < ActiveRecord::Migration[7.0]
  def change
    create_table :photos_in_categories do |t|
      t.references :photo, foreign_key: true
      t.references :category, foreign_key: true
    end
  end
end
