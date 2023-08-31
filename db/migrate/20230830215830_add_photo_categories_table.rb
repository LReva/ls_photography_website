class AddPhotoCategoriesTable < ActiveRecord::Migration[7.0]
  def change
    create_table :photo_categories do |t|
      t.string :name
    end
  end
end
