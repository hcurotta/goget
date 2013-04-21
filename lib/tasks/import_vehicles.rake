require 'csv'

desc "Import vehicles and locations from csv file"
task :import => [:environment] do

  file = "public/vehicles.csv"

  CSV.foreach(file, :headers => true) do |row|
    Vehicle.create(
      :goget_id => row[1],
      :name => row[2],
      :type => row[3],
      :pod => row[4],
      :pod_id => row[5],
      :latitude => row[7],
      :longitude => row[8]
    )
  end

end