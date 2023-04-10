class RemoveCourseDayFromEnrolments < ActiveRecord::Migration[7.0]
  def change
    remove_column :enrolments, :course_day
  end
end
