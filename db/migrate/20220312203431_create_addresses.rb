class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :state
      t.integer :zip
      t.string :country
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
