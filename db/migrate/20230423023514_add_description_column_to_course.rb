class AddDescriptionColumnToCourse < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :course_description, :text
  end
end
