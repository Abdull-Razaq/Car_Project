class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :make
      t.string :model
      t.string :transmission
      t.string :fuel_type

      t.timestamps
    end
  end
end
