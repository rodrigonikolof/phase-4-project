class ChangeCourseDayInCourses < ActiveRecord::Migration[7.0]
  def change
    remove_column :courses, :course_day_2
    rename_column :courses, :course_day_1, :course_day
  end
end
