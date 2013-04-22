class VehiclesController < ApplicationController


  def index
    @vehicles = Vehicle.all
  

  
    respond_to do |format|
      format.html {
      agent = Mechanize.new
                  locations = Vehicle.get_pods(agent)
                  
                  @vehicles.each do |vehicle|
                    locations.each do |location|
                      if vehicle.pod_id == location[:pod_id]
                        if location[:available] == nil
                          vehicle.destroy
                        else
                          vehicle.available = location[:available]
                          vehicle.save
                        end
                      end
                    end
                  end
      }
      format.json { render json: @vehicles }
    end
  end
  
end