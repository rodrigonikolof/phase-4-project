class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :name
      t.string :username
      t.integer :house_id
      t.string :password_digest

      t.timestamps
    end
  end
end
