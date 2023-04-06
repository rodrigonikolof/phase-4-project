class CreateHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :houses do |t|
      t.string :house_name
      t.string :house_img

      t.timestamps
    end
  end
end
