class CreateVehicles < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.integer :goget_id
      t.string :name
      t.string :vehicle_type
      t.string :pod
      t.integer :pod_id
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
