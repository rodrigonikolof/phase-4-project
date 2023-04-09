class ReAddForeignKeysToEnrolments < ActiveRecord::Migration[7.0]
  def change
    add_column :enrolments, :course_id, :integer
    add_column :enrolments, :student_id, :integer
  end
end
