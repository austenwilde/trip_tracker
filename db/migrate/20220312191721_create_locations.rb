class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :description
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end