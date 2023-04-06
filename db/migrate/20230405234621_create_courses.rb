class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :course_name
      t.string :course_teacher
      t.string :course_day_1
      t.string :course_day_2

      t.timestamps
    end
  end
end
