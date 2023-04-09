class RemoveForeignKeysFromEnrolments < ActiveRecord::Migration[7.0]
  def change
    remove_column :enrolments, :student_id
    remove_column :enrolments, :course_id
  end
end
