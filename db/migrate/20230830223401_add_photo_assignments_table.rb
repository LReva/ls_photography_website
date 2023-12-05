class AddPhotoAssignmentsTable < ActiveRecord::Migration[7.0]
  def change
    create_table :photo_assignments do |t|
      t.references :photo, foreign_key: true
      t.references :photo_category, foreign_key: true
    end
  end
end
