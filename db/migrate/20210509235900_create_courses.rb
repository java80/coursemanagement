class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :imageurl
      t.text :description
      t.string :category

      t.timestamps
    end
  end
end
