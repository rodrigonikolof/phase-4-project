class CreateEnrolments < ActiveRecord::Migration[7.0]
  def change
    create_table :enrolments do |t|
      t.string :course_id
      t.string :student_id
      t.string :course_day

      t.timestamps
    end
  end
end
