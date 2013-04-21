# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

file = "public/vehicles.csv"

CSV.foreach(file, :headers => true) do |row|
  Vehicle.create(
    :goget_id => row[0],
    :name => row[1],
    :vehicle_type => row[2],
    :pod => row[3],
    :pod_id => row[4],
    :latitude => row[6],
    :longitude => row[7]
  )
end
