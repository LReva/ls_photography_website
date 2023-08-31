class AddPhotosTable < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.string :name 
      t.binary :photo_data
      t.text :desctiption
      t.timestamps
    end
  end
end
