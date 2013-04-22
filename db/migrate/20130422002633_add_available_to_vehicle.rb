class AddAvailableToVehicle < ActiveRecord::Migration
  def change
    add_column :vehicles, :available, :boolean
  end
end
