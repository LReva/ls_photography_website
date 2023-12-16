class AddPhotosTable < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.string :name 
      t.string :photo_data
      t.text :description
      t.timestamps
    end
  end
end
